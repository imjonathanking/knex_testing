const router = require("express").Router();
const apiRoutes = require("./api");

// API Routes
router.use("/api", apiRoutes);

router.get("*", function(req, res){
    res.json("Connected to Express server");
})

module.exports = router;