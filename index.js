const express = require('express');
const path = require('path');
const app = express()

// bodyParser Use
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

// set view engine
app.set('view engine', 'pug');

// serve static files from the `public` folder
app.use(express.static(__dirname + '/public'))

const http = require('http');
const res = require('express/lib/response');
const { redirect } = require('express/lib/response');

app.get('/', (req, res) => {
    res.render('index')
})

app.listen(3000, () => {
    console.log('Server is running on https://localhost:3000')
})