
const db = require('./dataBase');
const express = require('express');
const router = express.Router();
const uuid = require('uuid');
//const db = require('./routes/dataBase');
/* GET users listing. */
router.get('/', function(req, res, next) {
    // Comment out this line:
    //res.send('respond with a resource');
    // And insert something like this instead:
    let test = res.json([
        {
            name: 'David',
            email: 'john@gmail.com',
            phone: '770-564-9087',
            address: '',
            city: 'Houston',
            state: 'Texas',
            zip: '77006',
            id: uuid.v4(),

        }
    ]);
});





module.exports = router;
