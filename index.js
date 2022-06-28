const express = require("express");

const app = express();


app.get('/', (req,res)=>{
    res.send("<h1>Hi there Divyanshu</h1>");
})

app.listen(3000, ()=>{
    console.log("The server has started");
});


