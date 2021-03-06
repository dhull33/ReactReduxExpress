// set pg-promise to use bluebird as its promise library

const Promise = require('bluebird');

const initOptions = {
    promiseLib: Promise
};

const pgp = require('pg-promise')(initOptions);

const config = {
    host: 'localhost',
    port: 5432,
    database: 'reactbackend',
    user: 'postgres'
}

const db = pgp(config);

module.exports = db;