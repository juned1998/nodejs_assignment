const Employee = require("./../models/employeeModel");
const Department = require("./../models/departmentModel");

const catchAsync = (fn) => {
    return (req, res, next) => {
        // fn throws error which will be handled by next(err)
        fn(req, res, next).catch(next);
    };
};

exports.getEmployees = catchAsync(async (req, res) => {
    const employees = await Employee.findAll({
        where: {},
        include: [
            {
                model: Department,
                as: "department",
                attributes: ["name"],
            },
        ],
    });

    res.json({
        status: 200,
        data: employees,
    });
});

exports.getEmployee = catchAsync(async (req, res) => {
    const { id } = req.params;
    const employee = await Employee.findOne({
        where: { id: id },
        include: [
            {
                model: Department,
                as: "department",
                attributes: ["name"],
            },
        ],
    });

    res.json({
        status: 200,
        data: employee,
    });
});

exports.createEmployee = catchAsync(async (req, res) => {
    const department = await Department.findOne({
        where: { name: req.body.department },
    });

    const employee = await Employee.create({
        name: req.body.name,
        phone: req.body.phone,
        email: req.body.email,
        departmentId: department.dataValues.id,
    });

    res.json({
        status: 200,
        message: "Employee created successfully",
        data: employee,
    });
});
