const express=require("express")
const router=express.Router()
const Post=require('../Modules/Post')

// add new post 
router.post('/add', async(req,res)=>{
    const {title, content, author, createdAt, updatedAt, likes, imageUrl, isPublished}=req.body 
    const newPost=new Post({title, content, author, createdAt, updatedAt, likes, imageUrl, isPublished})
    const post=await newPost.save()
    res.send({msg:'Post added', post})
})

// Show all posts
router.get('/', async(req, res)=>{
    const posts= await Post.find()

    res.send({msg:'posts fetched', posts})
})

// Delete post
router.delete('/:id', async(req,res)=>{
    const {id}=req.params
    const post=await Post.findOneAndDelete({_id:id})
    res.send({msg:"post deleted", post})
})

// Edit post 
router.put('/edit/:id', async(req,res)=>{
    const {id}=req.params
    const post=await Post.findOneAndUpdate({_id:id},{$set:req.body},{new:true})
    res.send({msg:"post updated", post})
})
module.exports=router 