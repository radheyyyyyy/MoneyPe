const express = require('express');
const {Router} = require("express");
const {authMiddleware} = require("../authMiddleware");
const {User, Account} = require("../Database/db");
const mongo = require("mongoose");
const jwt= require("jsonwebtoken");
const {JWT_SECRET} = require("../config");
const accountRouter=new Router();
accountRouter.get('/balance',async (req,res)=>{
    const email=req.body;
    const user=await User.findOne(email);
    const id=user._id;
    const balance=await Account.findOne({user_id:id});
    res.send({"total Balance":balance.Balance})
})

accountRouter.post('/transfer',async (req,res)=>{
    const {token,to,transfer}=req.body;
    let t=jwt.decode(token,JWT_SECRET);
    console.log(t);
    const session=await mongo.startSession();
    (await session).startTransaction();
    const acc1=await User.findOne({email:t})
    const acc2=await User.findOne({email:to});
    if(acc1===null || acc2===null){
        await (await session).abortTransaction();
        return res.send("User not found")
    }
    const bal1=await Account.findOne({user_id:acc1._id});
    const bal2=await Account.findOne({user_id:acc2._id});
    if(bal1.Balance<transfer){
        await (await session).abortTransaction();
        return res.send("Insufficient balance");
    }
    console.log(bal1);
    console.log(bal2);
   const updated1=await Account.updateOne({user_id:bal1.user_id},{Balance:bal1.Balance-transfer});
    const updated2= await Account.updateOne({user_id:bal2.user_id},{Balance:bal2.Balance+transfer});

    await (await session).commitTransaction();
    res.send("Successfully transferred");
})
module.exports=
    accountRouter

