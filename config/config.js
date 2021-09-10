const promise = require('bluebird');
const options = {
    promiseLib: promise,
    query: (e) => {}
}

const pgp = require('pg-promise')(options);
const types = pgp.pg.types;
types.setTypeParser(1114, function(stringValue) {
    return stringValue;
});

const databaseConfig = {
    'host': '34.95.159.189',
    'port': 5432,
    'database': 'postgres',
    'user': 'postgres',
    'password': 'Kakaroto95050*',

}

const db = pgp(databaseConfig);

module.exports = db;