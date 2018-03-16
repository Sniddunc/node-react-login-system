const express = require('express');
const passport = require('passport');
const mongoose = require('mongoose');
const { PORT } = require('./config/config');
const keys = require('./config/keys');

const app = express();

// Mongoose
mongoose.connect(keys.mongoURI);
require('./models/User');

// Implement Middleware
require('./middleware/express')(app, passport);

// Passport Setup
require('./services/passport/passport')(passport);
require('./services/passport/strategies/local-signup')(passport);
require('./services/passport/strategies/local-login')(passport);

// Routes
require('./routes/auth')(app, passport);
require('./routes/api')(app, passport);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
