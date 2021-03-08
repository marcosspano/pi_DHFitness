const { Student, Teacher, Plan, Classe } = require("../models");

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
            where: {
                active: 1,
                deleted: 0
            }
        });

        let classes = await Classe.findAll({
            where: {
                active: 1,
                deleted: 0
            }
        });


        let { full_name_students } = req.body;
        let dado_Student = {};

        students.forEach(dado => {
            if (dado.id == full_name_students) {
                dado_Student = { email: dado.email }
            }
        });

        classes.forEach(dado => {
            if (dado.id_students == full_name_students) {
                dado_Student = { email: dado_Student.email, id_plan: dado.id_plans, id_teacher: dado.id_teachers }
            }
        });

        teachers.forEach(dado => {
            if (dado.id == dado_Student.id_teacher) {
                dado_Student = { email: dado_Student.email, id_plan: dado_Student.id_plan, id_teacher: dado_Student.id_teacher, full_name: dado.full_name, speciality: dado.speciality}
            }
        });

        plans.forEach(dado => {
            if (dado.id == dado_Student.id_plan) {
                dado_Student = { email: dado_Student.email, id_plan: dado_Student.id_plan, id_teacher: dado_Student.id_teacher, full_name: dado_Student.full_name, speciality: dado_Student.speciality, title: dado.title }
            }
        });

        // console.log (' E-MAIL: ' + dado_Student.email + ' ID PLANO: ' + dado_Student.id_plan + ' ID PROFESSOR: ' + dado_Student.id_teacher);

        res.render('students', { dado_Student, students, teachers, plans, user: req.session.user });
    },

    async create (req, res, next) {
        res.render('students');
    },

    async save (req, res, next) {
        let { nomeStudents, emailStudents, full_plan_students, full_teachers_students } = req.body;

        await Student.create( { full_name: nomeStudents, email: emailStudents });
        
        let new_student = await Student.findOne( { where: { email: emailStudents } });
        await Classe.create ( { id_students: new_student.id, id_teachers: full_teachers_students, id_plans: full_plan_students } );
    },

    async edit (req, res, next) {

    },

    async update (req, res, next) {

    },

    async delete (req, res, next) {

    }
}