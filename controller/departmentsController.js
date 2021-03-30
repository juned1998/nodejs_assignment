const Department = require("../models/departmentModel");

const catchAsync = (fn) => {
    return (req, res, next) => {
        // fn throws error which will be handled by next(err)
        fn(req, res, next).catch(next);
    };
};

exports.getDepartment = catchAsync(async (req, res) => {
    const { id } = req.params;
    const department = await Department.findOne({ where: { id: id } });

    res.json({
        status: 200,
        data: department,
    });
});

exports.getDepartments = catchAsync(async (req, res) => {
    const departments = await Department.findAll();

    res.json({
        status: 200,
        data: departments,
    });
});

exports.createDepartment = catchAsync(async (req, res) => {
    console.log(req.body);
    const department = await Department.create({
        name: req.body.name,
    });

    res.json({
        status: 200,
        message: "Department created successfully",
        data: department,
    });
});
