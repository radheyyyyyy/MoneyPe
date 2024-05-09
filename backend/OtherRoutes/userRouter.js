const express = require('express');
const {Router} = require("express");
const z=require('zod');
const {User, Account}=require('../Database/db')
const jwt = require("jsonwebtoken");
const {JWT_SECRET} = require("../config");
const {authMiddleware} = require("../authMiddleware");
const e = require("express");

const schema=z.object({
    email:z.string().email(),
    pass:z.string().min(3),
    lastName:z.string().min(1),
    firstName:z.string().min(1),
    balance:z.number().min(1),
})
const userRouter=new Router();
userRouter.use(express.json());


userRouter.post('/signup',async (req,res)=> {
    const body = req.body;
    if (schema.safeParse(body).success) {
        const user=await User.findOne({email:body.email});
        if (user===null){
        const user1=new User({
            email:body.email,
            password:body.pass,
            firstName:body.firstName,
            lastName:body.lastName,
        })
            const acc1=new Account({
                user_id:user1._id,
                Balance:body.balance,
            })
        await user1.save();
        await acc1.save();
        const token=jwt.sign(body.email,JWT_SECRET);
        res.status(201).send({message: "Sign up successfully",token:token});
    }else res.send("Please Login")} else {
        res.status(400).send({message: "Invalid inputs"})
    }
})

userRouter.get('/login',authMiddleware,(req,res)=> {
        res.status(200).send("Welcome to page");
    }
)
const schema2=z.object({
    pass:z.string().min(3).optional(),
    lastName:z.string().min(3).optional(),
    firstName:z.string().min(3).optional(),
})
userRouter.put('/update',authMiddleware,async (req,res)=> {
    const email=req.headers.email;
    const body=req.body;
    if(schema2.safeParse(body)){
    const user=await User.updateOne({email:email},body);
    res.send("Updated Successfully")
    }
})

userRouter.get('/bulk',async (req,res)=>{
    const f=req.query.f;
    if(f===""){
        return res.send("Enter filter")
    }
    let users=await User.find({
        $or:[
            {firstName:{
                "$regex":f
                }},
            {lastName:{
            "$regex":f
    }}
        ]
    });
    res.send(users);
})

module.exports = userRouter;