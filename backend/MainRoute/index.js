const express=require("express");
const cors=require('cors')
const {router} = require("../OtherRoutes/router");
const {PORT} = require("../config");
const app=express();
app.use(cors());
app.use(express.json());
app.use("/v1/api",router);

app.listen(PORT);