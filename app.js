const express = require("express");
const fs = require('fs');

const port = 3000;
const app = express();

app.get('/', function(req, res) {
    console.log("Request reached");
    fs.readFile("index.html", "utf-8", (err, data)=>{
        res.send(data);
    });
});

app.listen(port);