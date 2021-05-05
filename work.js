var express = require('express');
const port = 3300;
var bodyParser = require('body-parser');

// Create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.get('/area of circle',(req,res)=>{
    // res.send("About us");
    console.log(__dirname);
    res.sendFile( __dirname + "/public/" + "area of circle.html" );
});

app.post('/process-area of circle',urlencodedParser,(req,res)=>{
    // console.log(`${req.body.firstNum} ---- ${req.body.secondNum}`);
    let firstNum = Math.PI, secondNum = Math.pow(radius,2)
    var result = parseInt(req.body.firstNum) + parseInt(req.body.secondNum);
    res.send(`${result}`);
});

var server = app.listen(3300,()=>{
var address = server.address().address;
var port = server.address().port;
console.log(`server listening on port ${address}:${port}`);
});