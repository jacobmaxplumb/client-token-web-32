const admin = require('firebase-admin');

const seriveAccount = require('../web-pt-32-firebase-adminsdk-6w8xw-9c9a4c8815.json');

admin.initializeApp({
    credential: admin.credential.cert(seriveAccount)
});

module.exports = admin;