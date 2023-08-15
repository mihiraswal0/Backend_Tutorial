const mongoose = require('mongoose');
const todoSchema=new mongoose.Schema({
    task:{
        type:String,
        required:true,
    },
    compeleted:{
        type:String,
        default:false,
    },
    date:{
        type:Date
    }
})
const Todo=mongoose.model('Todo',todoSchema); 
module.exports=Todo;