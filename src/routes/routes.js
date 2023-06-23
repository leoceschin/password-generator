const express = require("express")
const router = express.Router()

const {sumNumbers, threeLetters} = require("../pasword/password")


router.post("/", (req, res) => {
        const {name, birth} = req.body
    
        let password = `${threeLetters(name)}@${sumNumbers(birth)}`
    
        res.send({"password": password})
        
    })

module.exports = router