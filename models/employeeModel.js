const Sequelize = require("sequelize");
const sequelize = require("./../db");
const Department = require("./departmentModel");

const Employee = sequelize.define(
    "employees",
    {
        name: {
            type: Sequelize.STRING,
            field: "name",
        },
        phone: {
            type: Sequelize.STRING,
            field: "phone",
        },
        joinedOn: {
            type: Sequelize.DATE,
            field: "joinedOn",
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

Employee.addHook("afterCreate", async (employee, options) => {
    await Department.increment("employeesCount", {
        by: 1,
        where: {
            id: employee.departmentId,
        },
    });
});

Employee.belongsTo(Department);

module.exports = Employee;
