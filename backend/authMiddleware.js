const jwt=require('jsonwebtoken');
const {JWT_SECRET} =require("./config");

const authMiddleware=(req,res,next)=>{
     const header=req.headers.authorization;
    if
    (!header.startsWith('Bearer ')){
        return res.status(403).send('Not authorized');
    }
    else {
        const token=header.split(' ')[1];
        try{
            const verify=jwt.verify(token,JWT_SECRET);
            if(verify){req.headers.email=verify;
            next();}
        }catch (e){
            return res.status(401).send("Authentication failed");
        }

    }
}

module.exports= {authMiddleware}
