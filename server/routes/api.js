const keys = require('../config/keys');

module.exports = app => {
  app.get('/api/logout', (req, res) => {
    req.logout(); // logout() gets attached by passport to the request
    res.redirect('/');
  });

  app.get('/api/current_user', (req, res) => {
    res.send(req.user);
  });
};
