CREATE DATABASE ems;

CREATE TABLE departments (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100)
);

CREATE TABLE employees (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    phone VARCHAR(100),
    deptId INT,
    FOREIGN KEY (deptId) REFERENCES departments(id)
);






