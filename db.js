const Pool = require("pg").Pool;

// connecting config.env
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });

const pool = new Pool({
    user: process.env.DBUSER,
    password: " ",
    host: process.env.DBHOST,
    port: process.env.DBPORT,
    database: process.env.DBNAME,
});

module.exports = pool;
