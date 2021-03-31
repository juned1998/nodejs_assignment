"use strict";

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable("employee", {
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
            createdAt: {
                type: Sequelize.DATE,
            },
            updatedAt: {
                type: Sequelize.DATE,
            },
            departmentId: {
                type: Sequelize.INTEGER,
            },
        });
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable("employee");
    },
};
