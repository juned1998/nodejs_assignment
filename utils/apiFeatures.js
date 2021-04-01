const Department = require("./../models/departmentModel");

class APIfeatures {
    constructor(query, queryString) {
        this.query = query;
        this.queryString = queryString;
    }

    filter() {
        // BUILD QUERY
        const queryObj = { ...this.queryString };

        //FILTERING
        const excludedObj = ["department", "joinedAfter", "joinedBefore"];
        excludedObj.forEach((el) => delete queryObj[el]);

        //1B) ADVANCED FIlTERING
        let queryStr = JSON.stringify(queryObj);
        queryStr = queryStr.replace(
            /\b(gt|gte|lte|lt)\b/g,
            (match) => `$${match}`
        );
        this.query.find(JSON.parse(queryStr));

        return this;
    }

    department() {
        if (this.queryString.department) {
            const department = Department.findOne({
                where: this.queryString.department,
            });
            this.query = this.query.findAll({
                where: {
                    departmentId: department.dataValues.id,
                },
            });
        }
        return this;
    }

    joinedOn() {
        if (this.queryString.sort) {
            const sortBy = this.queryString.sort.split(",").join(" ");
            this.query = this.query.sort(sortBy);
        } else {
            this.query = this.query.sort("-createdAt");
        }

        return this;
    }
}

module.exports = APIfeatures;
