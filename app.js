const express = require("express")
const dotenv = require("dotenv")

const {sumNumbers, threeLetters} = require("./password")

dotenv.config();

const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.post("/", (req, res) => {
    const {name, birth} = req.body

    let password = `${threeLetters(name)}@${sumNumbers(birth)}`

    res.send({"password": password})
})

app.listen(process.env.port || 3000, ()=>{
    console.log("server online")
})