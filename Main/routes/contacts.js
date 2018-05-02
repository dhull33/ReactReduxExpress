const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const db = require('./dataBase');

router.get('/', (req, res) => {
    console.log("Form Submitted");
});

router.post('/', (req, res) => {
    console.log(req);
    let id= 2;
    let name = req.body.name;
    let email = req.body.email;
    let phone = req.body.phone;
    let address = req.body.address;
    let city = req.body.city;
    let state = req.body.state;
    let zipcode = req.body.zipcode;

    db.none(`INSERT INTO contacts( id, contactname, email, phone, address, city, state, zip) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)`,[2, name, email, phone, address, city, state, zipcode]);
});

module.exports = router;

