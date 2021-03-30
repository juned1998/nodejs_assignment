const express = require("express");
const router = express.Router();

const employeesController = require("./../controller/employeesController");

router.route("/:id").get(employeesController.getEmployee);
router
    .route("/")
    .get(employeesController.getEmployees)
    .post(employeesController.createEmployee);

module.exports = router;
