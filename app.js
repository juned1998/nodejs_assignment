const express = require("express");
const app = express();

// body-parser: reading from body into req.body
app.use(express.json({ limit: "10kb" }));

const employeesRouter = require("./routes/employeesRoutes");
const departmentsRouter = require("./routes/departmentsRoutes");

// routes
app.use("/api/employees", employeesRouter);
app.use("/api/departments", departmentsRouter);

app.all("*", (req, res, next) => {
    const err = new Error("Can't find this url on the server");
    err.statusCode = 404;
    err.status = "fail";
    next(err);
});

// global error handler
app.use("*", (err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.status = err.status || "Error";
    console.log(err);
    res.status(err.statusCode).json({
        status: err.status,
        message: err.message,
    });
});

module.exports = app;
