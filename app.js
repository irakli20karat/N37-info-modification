const express = require('express');
const app = express();
const port = 3000;

const sanitizeName = (req, res, next) => {
    req.body = req.body || {};
    req.body.name = (req.body.name || '').trim().toUpperCase() || 'ANONYMOUS';
    next();
};

app.use(express.json());
app.use(sanitizeName);

app.post('/create-user', (req, res) => {
    res.send(`მომხმარებელი ${req.body.name} შეიქმნა`);
});

app.listen(port, () => {
    console.log("Server is running on port", port);
});