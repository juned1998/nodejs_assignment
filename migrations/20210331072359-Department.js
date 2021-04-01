"use strict";

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable(
            "departments",
            {
                id: {
                    type: Sequelize.INTEGER,
                    autoIncrement: true,
                    primaryKey: true,
                },
                name: {
                    type: Sequelize.STRING,
                    field: "name",
                },
                employeesCount: {
                    type: Sequelize.INTEGER,
                    field: "employeesCount",
                },
                createdAt: {
                    type: Sequelize.DATE,
                },
                updatedAt: {
                    type: Sequelize.DATE,
                },
            },
            {
                indexes: [
                    {
                        unique: true,
                        fields: ["name"],
                    },
                ],
            }
        );
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable("department");
    },
};
