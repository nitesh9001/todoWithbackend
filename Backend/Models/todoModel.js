const mongoose=require('mongoose');

const TodoSchema= mongoose.Schema({
         title:{
             type:String,
             required:true
         },
         impDate:{
            type:Date,
            required:false
        },  
        createdAt:{
            type:Date,
            default:new Date().getTime()/1000
        },
        discription:{
            type:String,
            required:true
        },
        priority:{
            type:String,
            required:false,
        },
})

module.exports = mongoose.model('Todo',TodoSchema)