const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());

app.get("/",(req,res)=>{
    return res.status(200).send({message : "welcome to ecom website",status:true})
})

const authRouter = require("./routes/auth.routes");
app.use("/auth",authRouter);

const userRouters = require("./routes/user.route");
app.use("/users",userRouters);

module.exports = app;
