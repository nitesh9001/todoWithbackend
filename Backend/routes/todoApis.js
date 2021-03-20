const express = require('express');
const router =express.Router();
const Todo = require('../Models/todoModel');
const multer=require('multer');
const path = require('path');

//GET ALL TODO LIST
router.get('/get',async (req,res)=>{
    try{
        const postList=await Todo.find();
        res.json(postList);
       }
       catch(err){
        res.json({message:err});
       }
});

//GET ONE TODO BY ID
router.get('/get/:todoId',async (req,res)=>{
    console.log(req.params.todoId)
    try{
        const postDet=await Todo.findById(req.params.todoId);
        res.json(postDet);
       }
       catch(err){
        res.json({message:err});
       }
});

// GET TODO BY SEARCH
router.post('/search',async (req,res)=>{
    try{
        var regex=new RegExp(req.body.title,'i');
        const postDet = await Todo.find({"title":regex});
        res.json(postDet);
    }
    catch(err){
        res.json({message:err});
    }
});
const storage = multer.diskStorage({
    destination: "./uploads/",
    filename: function(req, file, cb){
       cb(null,"files-" + Date.now() + path.extname(file.originalname));
    }
 });
 
 const upload = multer({
    storage: storage,
 }).single("file");
 

 router.post("/upload", (req,res) => {
    upload(req, res, () => {
       console.log("Request ---", req.body);
       console.log("Request file ---", req.file);
       const file = new Todo({
        file:req.file.path,
        title:req.body.title,
        impDate:req.body.impDate,
        discription:req.body.discription,
        priority:req.body.priority 
       });
       file.meta_data = req.file;
       file.save().then(()=>{
       res.send({message:"uploaded successfully"})
       })

})
})
//ADD TODO

//DELETE THE TODO BY ID
router.delete('/delete/:todoId',async (req,res)=>{
    console.log(req.params.todoId)
    try{
        const removePost = await Todo.remove({
            _id:req.params.todoId
        });
        res.json(removePost);
       }
       catch(err){
        res.json({message:err});
       }
});



module.exports = router;