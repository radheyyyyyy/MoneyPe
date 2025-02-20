
const {Router} = require("express");
const userRouter = require("./userRouter");
const accountRouter = require("./accountRoute");
const router=new Router();

router.use('/user',userRouter);
router.use('/account',accountRouter);
module.exports={
    router
}