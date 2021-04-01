const express = require("express");
const router = express.Router();

const employeesController = require("./../controller/employeesController");

router.route("/:id").get(employeesController.getEmployee);
router
    .route("/")
    .post(employeesController.createEmployee)
    .get(employeesController.getEmployees);

module.exports = router;
