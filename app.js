const express = require('express');
const app = express();
const port = 3000;

const sanitizeName = (req, res, next) => {
    let sanitized = req.body?.name.trim().toUpperCase();
    req.body.name = sanitized === '' ? 'ANONYMOUS' : sanitized;
    next();
}

app.use(express.json());
app.use(sanitizeName);

app.post('/create-user', (req, res) => {
    res.send(`მომხმარებელი ${req.body.name} შეიქმნა`);
});

app.listen(port, () => {
    console.log("Server is running on port", port);
});