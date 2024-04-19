const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const enrollmentRoutes = require('./routes/enrollmentRoutes'); // Assuming routes are in a 'routes' directory
const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

// Use the enrollment routes for requests to /enrollments
app.use('/enrollments', enrollmentRoutes);

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Enrollment service listening at http://localhost:${port}`);
});