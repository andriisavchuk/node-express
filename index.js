const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cors = require('cors');
const app = express();
// const mongoose  = require('mongoose');

const user = require('./api/routes/user');
const profile = require('./api/routes/profile');
const posts = require('./api/routes/posts');



// DB config
// const db = require("./config/keys");
// mongoose.Promise = global.Promise;
// mongoose
//   .connect(
//     db.mongoURI,
//     { useNewUrlParser: true }
//   )
//   .then(() => console.log("MongoDB connected..."))
//   .catch(err => console.log(err));

// basic setup
app.use(cors());
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(express.static(path.join(__dirname, 'public')));

// routes
app.get('/', (req, res) => {
  res.send('Hello from Main Route.');
});

// use routes
app.use('/api/user', user);
app.use('/api/profile', profile);
app.use('/api/posts', posts);

// handling 404 request error
app.use((req, res, next) => {
  const error = new Error('Not found');
  error.status = 404;
  next(error);
});

// handling other possible errors
app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message
    }
  });
});

module.exports = app;
