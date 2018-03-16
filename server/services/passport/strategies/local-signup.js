// attempt refactor of import {}
const LocalStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');

const User = mongoose.model('User');

module.exports = passport => {
  passport.use(
    'local-signup',
    new LocalStrategy(
      {
        usernameField: 'username',
        passwordField: 'password',
        passReqToCallback: true
      },
      async (req, username, password, done) => {
        const existingUser = await User.findOne({ 'local.username': username });

        if (existingUser) {
          return done(
            null,
            false,
            req.flash('signupMessage', 'That username is not available')
          );
        } else {
          const newUser = new User();

          newUser.local.username = username;
          newUser.local.password = newUser.generateHash(password);

          const user = await newUser.save();

          done(null, user);
        }
      }
    )
  );
};
