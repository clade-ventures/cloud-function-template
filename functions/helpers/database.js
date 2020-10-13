const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp(functions.config().firebase);

// admin.database = realtime database
// admin.firestore = firebase firestore

module.exports = admin.database();
