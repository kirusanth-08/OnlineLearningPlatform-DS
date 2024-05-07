const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const enrollmentRoutes = require('./routes/enrollmentRoutes'); // Assuming routes are in a 'routes' directory
const app = express();
require('dotenv').config();

const port = process.env.PORT || 8085;


mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Database connected successfully'))
    .catch(err => console.log(err));

    app.use(express.json())
    app.use(bodyParser.json());
    app.use(cors());
    
// Use the enrollment routes for requests to /enrollments
app.use('/api/enrollments', enrollmentRoutes);

app.listen(port, () => {
    console.log(`Enrollment service listening at http://localhost:${port}`);
});