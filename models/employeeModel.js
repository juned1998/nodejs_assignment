const Sequelize = require("sequelize");
const sequelize = require("./../db");
const Department = require("./departmentModel");

const Employee = sequelize.define(
    "employee",
    {
        name: {
            type: Sequelize.STRING,
            field: "name",
        },
        phone: {
            type: Sequelize.STRING,
            field: "phone",
        },
        email: {
            type: Sequelize.STRING,
            field: "email",
        },
    },
    {
        freezeTableName: true, // Model tableName will be the same as the model name
        indexes: [
            {
                unique: true,
                fields: ["phone"],
            },
            {
                unique: true,
                fields: ["email"],
            },
        ],
    }
);

Employee.belongsTo(Department);

module.exports = Employee;
