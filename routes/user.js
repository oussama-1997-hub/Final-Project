const express=require("express")
const router=express.Router()
const User = require('../Modules/User');
const isAuth=require("../middleweare/isAuth")
const bcrypt=require("bcrypt")
var jwt = require('jsonwebtoken');

router.post("/register",async(req,res)=>{
    const{username, phoneNumber, email, password}=req.body
    let user=await User.findOne({email})
    if(user){
       return res.send({msg:"user already exists !"})
    }
user=new User({
    username, phoneNumber, email, password
})
const salt=10
let hashedPassword= await bcrypt.hash(password,salt)
user.password=hashedPassword
 await user.save()

const payload={
    id:user._id
}
 var token = jwt.sign(payload, 'jhghsd');



 res.send({msg:"user added with success !",user,token})

})

//login
router.post("/login",async(req,res)=>{
    const{email,password}=req.body
    try{
    let user=await User.findOne({email})
    if(!user){
     return    res.send({msg:"user not found !"})
    }
    let isMatch= await bcrypt.compare(password,user.password)

if(!isMatch){
   return  res.send({msg:"Bad credentials !  password"})
}
const payload={
    id:user._id
}
 var token = jwt.sign(payload, 'jhghsd',{ expiresIn: '1h' });


res.send({msg:"user logged with success !",user,token})

    }
    catch(error){
        res.send({msg:"Server error"})
    }

})

//get auth user
router.get("/user",isAuth,(req,res)=>{
    res.send({user:req.user})
})

// add new user 
router.post('/add', async(req,res)=>{
    const {username, phoneNumber, email, password}=req.body 
    const newUser=new User({username, phoneNumber, email, password})
    const user=await newUser.save()
    res.send({msg:'User added', user})
})

// Show all users
router.get('/', async(req, res)=>{
    const users= await User.find()

    res.send({msg:'users fetched', users})
})

// Delete user
router.delete('/:id', async(req,res)=>{
    const {id}=req.params
    const user=await User.findOneAndDelete({_id:id})
    res.send({msg:"user deleted", user})
})
 
// Edit user 
router.put('/edit/:id', async(req,res)=>{
    const {id}=req.params
    const user=await User.findOneAndUpdate({_id:id},{$set:req.body},{new:true})
    res.send({msg:"user updated", user})
})
module.exports=router 