const express = require('express');

const app = express();

// Logging middleware
const logger = (req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
};

// Apply middleware
app.use(logger);

// Routes
app.get('/', (req, res) => {
    res.send('Welcome to the Home Page');
});

app.get('/students', (req, res) => {
    res.send('Student List');
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});