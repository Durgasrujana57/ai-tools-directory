const admin = require('firebase-admin');
const serviceAccount = require('./key.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://ai-tools-e06b5.firebaseio.com"
});

const db = admin.firestore();
module.exports = { admin, db };
