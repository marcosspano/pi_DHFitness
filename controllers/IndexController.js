const { Help } = require ('../models');

module.exports = {
    index (req, res, next) {
        res.render ('index', { user: req.session.user });
    },

    cp (req, res, next) {
        res.render('cp', { user: req.session.user });
    },

    async contato (req, res, next) {
        let { name_help, email_help, subject_help, text_help } = req.body;
        await Help.create( { full_name: name_help, email: email_help, subject: subject_help, text:  text_help} )

        res.render('index', { message: true, user: req.session.user })
    }
}