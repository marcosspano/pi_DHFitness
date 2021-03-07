const { Student, Teacher, Plan } = require("../models");

module.exports = {
    async list (req, res, next) {
        let students = await Student.findAll({
            where: {
                active: 1,
                deleted: 0
            }
        });
        let teachers = await Teacher.findAll({
            where: {
                active:1,
                deleted: 0
            }
        });
        let plans = await Plan.findAll({
            active: 1,
            deleted: 0
        });

        res.render('students', { students, teachers, plans, user: req.session.user });
    },

    async create (req, res, next) {

    },

    async edit (req, res, next) {

    },

    async update (req, res, next) {

    },

    async delete (req, res, next) {

    }
}