const bcrypt = require("bcrypt");
const { User } = require("../models");

module.exports = {

  async authenticate(req, res, next) {

    let { email, password } = req.body;
    let user = await User.findOne({ where: { email } });

    if(!user){
      return res.render('index', { notFound: true });
    }

    if(!bcrypt.compareSync(password, user.password)){
      return res.render('index', { notFound: true });
    }

    //Remove Senha
    delete user.password;

    req.session.user = user;

    res.render('cp', { user: req.session.user });
  },

  login(req, res, next) {
    res.render('cp');
  },

  logout(req, res, next) {
    req.session.destroy();
    res.redirect('/');
  }

}