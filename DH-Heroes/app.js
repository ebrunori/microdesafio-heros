const express = require('express');
const app = express();
const path = require('path');

app.listen(3030, () => console.log('servidor 3030 coriendo OK'));

app.get('/', (req,res) => {
    res.sendFile(path.resolve(__dirname,'./views/index.html'))
})

app.get('/babbage', (req,res) => {
    res.sendFile(path.resolve(__dirname,'./views/babbage.html'))
})

app.get('/berners-lee', (req,res) => {
    res.sendFile(path.resolve(__dirname,'./views/berners-lee.html'))
})

app.get('/clarke', (req,res) => {
    res.sendFile(path.resolve(__dirname,'./views/clarke.html'))
})

app.get('/lovelace', (req,res) => {
    res.sendFile(path.resolve(__dirname,'./views/lovelace.html'))
})

app.get('/turing', (req,res) => {
    res.sendFile(path.resolve(__dirname,'./views/turing.html'))
})
