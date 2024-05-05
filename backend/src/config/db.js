const mongoose = require("mongoose");
const mongodburl = "mongodb+srv://siddharthsingh0403:x8w1jvNbOqGistS2@cluster0.hjkcyx5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

const connectDb=()=>{
    return mongoose.connect(mongodburl);
}

module.exports = {connectDb};