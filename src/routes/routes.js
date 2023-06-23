const express = require("express")
const router = express.Router()

const {validator} = require("../validator/validator")

const {sumNumbers, threeLetters} = require("../pasword/password")


router.post("/", validator, (req, res) => {
        const {name, birth} = req.body

        let passwordFinal = `${threeLetters(name)}@${sumNumbers(birth)}`
    
        res.json({password: passwordFinal})
        
    })

module.exports = router