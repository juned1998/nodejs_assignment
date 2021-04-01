const Employee = require("./../models/employeeModel");
const Department = require("./../models/departmentModel");
const { Op } = require("sequelize");

const catchAsync = (fn) => {
    return (req, res, next) => {
        // fn throws error which will be handled by next(err)
        fn(req, res, next).catch(next);
    };
};

exports.getEmployees = catchAsync(async (req, res) => {
    // create a empty where object
    let whereObj = {};

    // if query params contains department, add department in whereObj
    if (req.query.department) {
        const department = await Department.findOne({
            where: { name: req.query.department },
        });

        whereObj.departmentId = department.dataValues.id;
    }

    // if query params contains joinedON range
    if (
        req.query.joinedOn &&
        req.query.joinedOn.gte &&
        req.query.joinedOn.lte
    ) {
        // add joinedOn range from query params
        const gteDate = new Date(req.query.joinedOn.gte);
        const lteDate = new Date(req.query.joinedOn.lte);
        whereObj.joinedOn = { [Op.between]: [gteDate, lteDate] };

        // else add joinedOn greater than or equal to date from query params
    } else if (req.query.joinedOn && req.query.joinedOn.gte) {
        const date = new Date(req.query.joinedOn.gte);
        whereObj.joinedOn = { [Op.gte]: date };

        // else add joinedOn less than or equal to date from query params
    } else if (req.query.joinedOn && req.query.joinedOn.lte) {
        const date = new Date(req.query.joinedOn.lte);
        whereObj.joinedOn = { [Op.lte]: date };
    }

    // Execute query
    const employees = await Employee.findAll({
        where: whereObj,
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

    // YYYY-MM-DD
    const joiningDate = new Date(req.body.joinedOn);

    const employee = await Employee.create({
        name: req.body.name,
        phone: req.body.phone,
        email: req.body.email,
        departmentId: department.dataValues.id,
        joinedOn: joiningDate,
    });

    res.json({
        status: 200,
        message: "Employee created successfully",
        data: employee,
    });
});
