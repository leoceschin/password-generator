const express = require("express")
const dotenv = require("dotenv")

dotenv.config();

const app = express();
const routes = require("./src/routes/routes")

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use("/password", routes)

app.listen(process.env.port || 3000, ()=>{
    console.log("server online")
})