const express=require('express');
const { createtodo,updatetodo } = require('./types');
const { Todo } = require('./db');
const app=express();
const cors=require("cors")
app.use(express.json());
app.use(cors());



app.post('/todos',  async function(req, res){
    const createpayload=req.body;
    const parsedpayload=createtodo.safeParse(createpayload);
    if(!parsedpayload.success){
        res.status(411).json({
            msg:"you passed wrong inputs"
        })
        return;
    }
    //put in mongodb
    await Todo.create({
        title: createpayload.title,
        description: createpayload.description,
        completed: false
    })
    res.send("todo created");
        

})


app.get('/todos',async function(req,res){
    const todos= await Todo.find({});
    res.json({
        todos
    })

})


app.put('/completed', async function(req, res){
    const updatepayload=req.body;
    const parsedpayload=updatetodo.safeParse(updatepayload);
    if(!parsedpayload.success){
        res.status(411).json({
            msg:"you sent wrong inputs"
        })
        return;
    }
    try {
        // Await the update operation to ensure it completes before proceeding
        await Todo.updateOne(
            {
                _id: req.body.id
            }, // Filter condition
            {
                completed: true
            } // Update data
        );

        // Send response after the update operation has completed successfully
        res.json({
            msg: "Todo is marked completed"
        });
    } catch (error) {
        // Handle any errors that occur during the update operation
        console.error("Error updating todo:", error);
        res.status(500).json({ msg: "Internal server error" });
    }


})



app.listen(3000,function(){
    console.log('listening on port 3000');
})
