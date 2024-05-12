const express = require('express');
const app = express();
const port = 3000;

const totp = require('./totp.js');

app.get('/api/otp', (req, res) => {
    res.send(totp.getUTCTime());
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});