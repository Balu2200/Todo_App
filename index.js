const express = require("express");

const {todo} = require("./db");
const {createTodo, updateTodo} = require("./types");

const app = express();

app.use(express.json());

app.post("/todo", async(req, res) =>{

    const data = req.body;
    const parseData = createTodo.safeParse(data);
    if(!parseData.success){
        res.status(401).send("Error in the input type of data")
        return;
    }

    await todo.create({
        title: data.title,
        description : data.description,
        completed: false
    })
    res.json({msg:"Todo Created"})
    
});

app.get("/todos", async(req, res) =>{
    
});

app.put("/completed", async(req, res) =>{

    const updatedata = req.body;
    const parseData = updateTodo.safeParse(updatedata);
    if(!parseData.success){
        res.status(401).send("Error in the input type of data");
        return;
    }
    await todo.update({_id:req.body.id},{ completed: true});
    res.json({msg:"Updated Successfully"}) 
});

app.listen(1234, ()=>{
    console.log("Server Started.....")
})