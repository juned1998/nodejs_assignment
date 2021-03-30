const Sequelize = require("sequelize");
const sequelize = require("./../db");

const Department = sequelize.define(
    "department",
    {
        name: {
            type: Sequelize.STRING,
            field: "name",
        },
    },
    {
        freezeTableName: true, // Model tableName will be the same as the model name
    }
);

module.exports = Department;
