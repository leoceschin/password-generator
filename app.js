const express = require("express")
const dotenv = require("dotenv")

dotenv.config();

const app = express();

app.get("/", (req, res)=>{
    res.send("<h1>OLA</h1>")
})

app.listen(process.env.port || 3000, ()=>{
    console.log("server online")
})