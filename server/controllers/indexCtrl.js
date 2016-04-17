module.exports = {

  index: function(req, res) {
    res.render('index', {
    });
  },

  redirectToHomePage: function(req, res) {
    res.redirect('/home');
  }

};