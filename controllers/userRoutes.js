const express= require('express');
const router=express.Router();
 const data=require('../data.js'); 

 router.get('/data',(req,res)=>{
    console.log(data);
    res.send(data);
 })
 router.get('/data/:id',(req,res)=>{
    const id=req.params.id;
    const newData=data.filter((item)=>{
        return item.id==id;
    })
    if(!newData.length)
   return res.status(404).send({sucess:false,mssg:"User Not Found"});
   return res.send({sucess:true,newData});
 })
 router.post('/data/addId',(req,res)=>{
    const newData=req.body;
    data.push(newData);

    console.log(data);
    res.send("ok");
 })
 router.put('/data/addId/:Id',(req,res)=>{
    const id=req.params.Id;
    const newData=req.body;
    console.log(id);
    const findIdx=data.findIndex(user=>user.id==(id))
    console.log(findIdx);
    if(findIdx!=-1)
    {
        data[findIdx]=newData;
        res.send({sucess:true,data:data});
    }
    else
    res.send("error");



 })

router.get('/',(req,res)=>{
    res.status(200).send({
        message:'All Data',
        path:dataPath
    })
})
module.exports =router;