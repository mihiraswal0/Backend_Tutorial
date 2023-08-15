const express= require('express');
const app=express();
const bodyParser=require('body-parser');
const cors=require('cors');
const PORT=8000;
require('dotenv').config(); 
require('./db.js');
const Todo=require('./models/todo');
app.use(cors());
app.use(bodyParser.json());

app.get('/',(req,res)=>{
    res.send("App is Working");
})
app.get('/alltodo',async (req,res)=>{
    const alltodo=await Todo.find();
    console.log(alltodo);
    res.json(alltodo);
})
app.post('/addtodo',async(req,res)=>{

    console.log(req.body);
    const {task,compelted}=req.body;
    const newtodo=new Todo({
        task:task,
        compelted:compelted,
        date:new Date()
    });
    const saveTodo=await newtodo.save();
    res.json(saveTodo);
})
app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`);
})

