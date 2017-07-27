var express = require("express");
var app = express();

app.get("/", function(req, res) {
    res.send("Hi there, welcome to my assignment! ");
});

app.get("/speak/:animal", function(req, res) {
    var sounds = {
        pig : "oink",
        cow: "Moo",
        dog: "Wooof Wooof!",
        cat: "I hate you human",
        goldfish: "..."
    }
    var animal = req.params.animal;
    var sound = sounds[animal];
    
    res.send("the " + animal + " says " + sound);
});

app.listen(3000, function(){
    console.log("Connected Server at 3000!");
})