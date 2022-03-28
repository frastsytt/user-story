const express = require('express');
const app = express()
const apiQuery = require('./public/modules/apiQuery');

const states = [
    {state: 'UT', tax: 6.85},
    {state: 'NV', tax: 8.00},
    {state: 'TX', tax: 6.25},
    {state: 'AL', tax: 4.00},
    {state: 'CA', tax: 8.25},
    {state: 'EE', tax: 18.25}
];

// Discount array (must be in order from high to low)
const discounts = [
    {value: 50000, discount: 15},
    {value: 10000, discount: 10},
    {value: 7000, discount: 7},
    {value: 5000, discount: 5},
    {value: 1000, discount: 3},
    {value: 0, discount: 0}
];


// bodyParser Use
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

// set view engine
app.set('view engine', 'pug');

// serve static files from the `public` folder
app.use(express.static(__dirname + '/public'))

const { redirect } = require('express/lib/response');


app.get('/', (req, res) => {
    apiQuery.getPromise('http://localhost:3000/states')
        .then(data => {
            res.render('index', {
                data: data
            })
        })
        .catch(error => {
            res.render('index', {error: 'An error occurred, try again'})
        })
})

app.get('/states', (req, res) => {
    res.send(states)
})

app.get('/discounts', (req, res) => {
    res.send(discounts)
})


app.post('/states', (req, res) => {
    if (!req.body.name || !req.body.price) {
        return res.status(400).send({ error: 'One or all params are missing' })
    }
    let newState = {
        state: req.body.state,
        discount: req.body.discount
    }
    states.push(newState)
    res.status(201).send(
        newState
    )
})

app.listen(3000, () => {
    console.log('Server is running on https://localhost:3000')
})
