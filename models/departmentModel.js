const Sequelize = require("sequelize");
const sequelize = require("./../db");

const Department = sequelize.define(
    "departments",
    {
        name: {
            type: Sequelize.STRING,
            field: "name",
        },
        employeesCount: {
            type: Sequelize.INTEGER,
            field: "employeesCount",
            defaultValue: 0,
        },
    },
    {
        freezeTableName: true, // Model tableName will be the same as the model name
        indexes: [
            {
                unique: true,
                fields: ["name"],
            },
        ],
    }
);

module.exports = Department;
