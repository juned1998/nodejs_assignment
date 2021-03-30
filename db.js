// connecting config.env
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });

// Sequelize
const Sequelize = require("sequelize");

// const sequelize = new Sequelize(
//     process.env.DBNAME,
//     process.env.DBUSER,
//     process.env.DBPASSWORD,
//     {
//         host: process.env.DBHOST,
//         dialect: "postgres",
//         pool: {
//             max: 5,
//             min: 0,
//             idle: 10000,
//         },
//     }
// );

const sequelize = new Sequelize(process.env.DATABASE_URL);

// console.log(sequelize);

module.exports = sequelize;
