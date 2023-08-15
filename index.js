const express=require('express');
const app= express();
// const {data}=require('./data.js');
const cors=require('cors');
const bodyParser=require('body-parser'); 
const userRoutes=require('./controllers/userRoutes.js');
app.use(cors());
app.use(bodyParser.json());

app.use('/apiroutes',userRoutes);
app.get('/',(req,res)=>{
    res.send("Hn bhaiya ki hall chall");
})

app.listen(5000,()=>{
    console.log("Server Running on Port 5000");
})