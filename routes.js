var express = require("express");

var router = express.Router();


router.get("/", function(req, res) {
   res.render("main");
});

router.get('/message', (req, res) =>{
    res.render('message')
})

router.get('/election', (req, res) =>{
    res.render('election')
})

module.exports = router;