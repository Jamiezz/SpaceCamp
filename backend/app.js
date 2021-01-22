const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const csurf = require('csurf');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');


const app = express();
app.use(morgan('dev'));
app.use(cookieParser());
app.use(express.json());

  // Set the _csrf token and create req.csrfToken method

  const { environment } = require('./config');
const isProduction = environment === 'production';

  app.use(
    csurf({
      cookie: {
        secure: isProduction,
        sameSite: isProduction && "Lax",
        httpOnly: true,
      },
    })
  );





// backend/app.js
const routes = require('./routes');

// ...

app.use(routes); // Connect all the routes

// Security Middleware
if (!isProduction) {
    // enable cors only in development
    app.use(cors());
  }
  // helmet helps set a variety of headers to better secure your app
  app.use(helmet({
    contentSecurityPolicy: false
  }));


  module.exports = app;