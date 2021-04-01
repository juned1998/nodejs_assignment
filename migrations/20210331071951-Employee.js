"use strict";

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable(
            "employees",
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
                phone: {
                    type: Sequelize.STRING,
                    field: "phone",
                },
                email: {
                    type: Sequelize.STRING,
                    field: "email",
                },
                joinedOn: {
                    type: Sequelize.DATE,
                },
                departmentId: {
                    type: Sequelize.INTEGER,
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
                        fields: ["phone"],
                    },
                    {
                        unique: true,
                        fields: ["email"],
                    },
                ],
            }
        );
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable("employee");
    },
};
