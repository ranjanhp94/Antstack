const express = require('express');
const { mongoose } = require('./config/database');

const port = process.env.PORT || 3005

var csvjson = require('csvjson');
var fs = require('fs');

const app = express()

app.get('/products', (req, res) => {

    const file_data = fs.readFileSync('/home/ranjan/Desktop/antstack/data/ProblemData - Sheet2.csv', { encoding: 'utf8' });

    const result = csvjson.toObject(file_data);
    res.json(result)
})

app.listen(port, function () {
    console.log('listening to port', port)
})