const pool = require("./../db.js");

const catchAsync = (fn) => {
    return (req, res, next) => {
        // fn throws error which will be handled by next(err)
        fn(req, res, next).catch(next);
    };
};

exports.getEmployees = catchAsync(async (req, res) => {
    const data = await pool.query(
        `SELECT employees.*, departments.name as Department FROM employees INNER JOIN departments ON departments.id = employees.deptId`
    );
    res.json({
        status: 200,
        data: data.rows,
    });
});

exports.getEmployee = catchAsync(async (req, res) => {
    const { id } = req.params;
    const data = await pool.query(
        `SELECT employees.*, departments.name as Department 
        FROM employees 
        INNER JOIN departments 
        on employees.deptId = departments.id 
        WHERE employees.id = ${id}`
    );

    res.json({
        status: 200,
        data: data.rows,
    });
});
