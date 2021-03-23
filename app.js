const express = require("express");
const app = express();

const employeesRouter = require("./routes/employeesRoutes");

// routes
app.use("/api/employees", employeesRouter);

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

    res.status(err.statusCode).json({
        status: err.status,
    });
});

module.exports = app;
