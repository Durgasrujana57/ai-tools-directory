const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
require('dotenv').config();

// Firebase Admin
const { admin } = require('./firebase');

// Middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Session check middleware
const checkAuth = async (req, res, next) => {
  const sessionCookie = req.cookies.session || '';
  try {
    const decoded = await admin.auth().verifySessionCookie(sessionCookie, true);
    req.user = decoded;
    res.locals.user = decoded;
    next();
  } catch {
    res.redirect('/login');
  }
};

// Routes
const indexRoutes = require('./routes/index');
const authRoutes = require('./routes/auth');
const toolRoutes = require('./routes/tools');

app.use('/', indexRoutes);
app.use('/', authRoutes);
app.use(checkAuth, toolRoutes);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Server at http://localhost:${PORT}`));
