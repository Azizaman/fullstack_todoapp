import {useState} from "react";
import axios from "axios";
//const axios=require('axios')


export function CreateTodo(){

    //react query
     const [title,setTitle]=useState("");
     const [description,setDescription]=useState("");

    return <div>
        <input  style={{
            padding: 10,
            margin: 10
        }} type="text" placeholder="title" onChange={function (e){
            const value=e.target.value;
            setTitle(e.target.value);
        }}></input><br/><br/>
        <input  style={{
            padding: 10,
            margin: 10
        }} type="text" placeholder="description" onChange={function (e) {
                const value = e.target.value;
                setDescription(e.target.value);
            }}></input><br/><br/>

        <button  style={{
            padding: 10,
            margin: 10

        }}
        onClick={()=>{
            //here we can use axios that eill do our work of fetching very easy and clean u can use axios
            axios.post("http://localhost:3000/todos",{
                title:title,
                description:description
            })

            // fetch("http://localhost:3000/todos",{
            //     method:"POST",
            //
            //     body:JSON.stringify({
            //         title:title,
            //         description:description
            //     }),
            //   headers:{
            //         "content-Type":"application/json"
            //     }
            //
            // })
                .then(async function(res){
                    const JSON=await res.json();
                    alert("Todo added")
                })
        }}>Add a todo</button> <br/><br/>


    </div>

 }