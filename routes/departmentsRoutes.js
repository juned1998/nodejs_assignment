const express = require("express");
const router = express.Router();

const departmentsController = require("./../controller/departmentsController");

router.route("/:id").get(departmentsController.getDepartment);
router
    .route("/")
    .get(departmentsController.getDepartments)
    .post(departmentsController.createDepartment);

module.exports = router;
