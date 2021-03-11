

module.exports = {
    index (req, res, next) {
        res.render ('index', { user: req.session.user });
    },

    cp (req, res, next) {
        res.render('cp', { user: req.session.user });
    }
}