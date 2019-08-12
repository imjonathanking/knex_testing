const router = require("express").Router();

// localhost:4000/api/test/
router
    .post("/", function(req, res){
        res.json("You have hit the test endpoint " + req.body.id);
    })

module.exports = router;