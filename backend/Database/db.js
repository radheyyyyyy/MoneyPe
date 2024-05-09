const mongo=require("mongoose");
const mongoose = require("mongoose");
if(
    mongo.connect('')  //Connection String
) console.log("MongoDB Connected");

 const User=mongo.model('Users',{
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    firstName:{
        type:String,
        required:true,
    },
    lastName:{
        type:String,
        required:true,
    }
})

const Account=mongo.model('Accounts',{
    user_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    Balance:{
        type:Number,
        required:true
    }
})

module.exports = {
     User,
    Account
};

