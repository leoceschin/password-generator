const regex = /[0-3][0-9]\/[0-2][0-9]\/[0-2][0-9][0-9][0-9]/;

const validator = (req, res, next) => {
    if(!req.body.name || req.body.name === ""){
        res.status(400);
        res.json({message:"The name field is required!"})
    }

    if(!req.body.birth || req.body.name === ""){
        res.status(400);
        res.json({message:"The birth field is required!"})
    }

    if(req.body.birth.search(regex) !== 0){
        res.status(400);
        res.json({message:"The birth field dont match with dd/mm/yyyy!"})
    }

    next()
}

module.exports = {validator}