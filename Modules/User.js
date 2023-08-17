const mongoose = require ("mongoose")

const schema=mongoose.Schema

const userSchema=new schema({
    username:{
        type:String
    },
    phoneNumber:{
        type:String
    },
    email: {
        type:String
    },
    password:{
        type:String
    }
})
module.exports=User=mongoose.model("users",userSchema)