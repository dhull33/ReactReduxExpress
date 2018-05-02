
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
            name: 'David Hull',
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
router.post('/users', (req,res,err) => {
    let test = JSON.parse(res);

    db.result('INSERT INTO contacts(contactname, email, phone, address, city, state, zip, id) VALUES($1, $2, $3, $4, $5, $6, $7, $8 )', [test.name, test.email, test.phone, test.address, test.city, test.state, test.zip, test.id])
        .then((result)=>{
            console.log(result);
        })
        .catch(err=>{
                console.log(err);
            }
        );
});





module.exports = router;
