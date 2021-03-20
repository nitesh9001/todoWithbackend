const { Int32 } = require('bson');
const mongoose=require('mongoose');

const TodoSchema= mongoose.Schema({
       
        title:{
            type:String,
            required:false
        },
        // impDate:{
        //     type:Date,
        //     required:false
        // },  
        createdAt:{
            type:Date,
            default:Date.now
        },
        discription:{
            type:String,
            required:false
        },
        priority:{
            type:String,
            required:false,
        },
        file:{
            type:String,
        }
})

module.exports = mongoose.model('Todo',TodoSchema)