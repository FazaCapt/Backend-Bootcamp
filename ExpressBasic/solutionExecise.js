var express = require("express");
var app = express();

app.get("/", function(req, res) {
    res.send("Hi there, welcome to my assignment! ");
});

app.get("/speak/:animal", function(req, res) {
    var animal = req.params.animal;
    var sound = "";
    if(animal === "pig"){
        sound = "Oink";
    } else if(animal === "Cow"){
        sound = "moo";
    }
    res.send("the " + animal + " says " + sound);
});

app.listen(3000, function(){
    console.log("Connected Server at 3000!");
})