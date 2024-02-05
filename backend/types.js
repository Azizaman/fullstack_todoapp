const zod = require('zod');

const createtodo = zod.object({
    title: zod.string(),
    description: zod.string()
});

const updatetodo = zod.object({
    id: zod.string()
});

// Exporting this file for use elsewhere
module.exports = {
    createtodo: createtodo,
    updatetodo: updatetodo
};



/*
{
    title:string,
    description:string
}

{
    id:string
}
*/