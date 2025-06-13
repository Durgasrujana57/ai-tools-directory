const express = require('express');
const router = express.Router();
const { admin } = require('../firebase');
const bodyParser = require('body-parser');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

// Render pages
router.get('/signup', (req, res) => res.render('signup', { error: null }));
router.get('/login', (req, res) => res.render('login', { error: null }));

// Session Login Handler
router.post('/sessionLogin', async (req, res) => {
  const idToken = req.body.idToken;
  const expiresIn = 60 * 60 * 24 * 5 * 1000; // 5 days

  try {
    const sessionCookie = await admin.auth().createSessionCookie(idToken, { expiresIn });
    res.cookie('session', sessionCookie, { maxAge: expiresIn, httpOnly: true });
    res.status(200).send({ status: 'success' });
  } catch {
    res.status(401).send('UNAUTHORIZED REQUEST!');
  }
});

// Logout route
router.get('/logout', (req, res) => {
  res.clearCookie('session');
  res.redirect('/login');
});

module.exports = router;
