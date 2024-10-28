function loggerMiddleware(req, res, next) {
    console.log(`${req.method} ${req.url}`);
    next(); // Call the next middleware or route handler
}

// Usage in an Express app
const express = require('express');
const app = express();

app.use(loggerMiddleware);

app.get('/', (req, res) => {
    res.send('Hello, world!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});