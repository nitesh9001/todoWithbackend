const express = require('express');
const router =express.Router();
const Todo = require('../Models/todoModel');

router.get('/',(req,res)=>{
    res.send("Welcome to todo App")
    console.log(req.body)
})

router.post('/post',(req,res)=>{
    console.log(req.body)
    const todo = new Todo({
        title:req.body.title,
        impDate:req.body.impDate,
        discription:req.body.discription,
        priority:req.body.priority
    });
    todo.save().then(data=>{
       res.json(data);
    })
    .catch(err=>{
        res.json({"message":"error occured"})
    })

})

module.exports = router;