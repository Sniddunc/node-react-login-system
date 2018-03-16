// attempt refactor of import
const LocalStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');

const User = mongoose.model('User');

module.exports = passport => {
  passport.use(
    'local-login',
    new LocalStrategy(
      {
        usernameField: 'username',
        passwordField: 'password',
        passReqToCallback: true
      },
      async (req, username, password, done) => {
        const user = await User.findOne({ 'local.username': username });

        console.log('USER FOUND: ', user);

        if (!user) {
          console.log('USER DOESNT EXIST. ABORTING');
          return done(
            null,
            false,
            req.flash('loginMessage', 'Invalid Credentials')
          );
        }

        console.log('USER EXISTS');

        if (!user.validPassword(password)) {
          console.log('WRONG PASSWORD. ABORTING');
          return done(
            null,
            false,
            req.flash('loginMessage', 'Invalid Credentials')
          );
        }

        console.log('GOOD. LOGGING IN');
        done(null, user);
      }
    )
  );
};
