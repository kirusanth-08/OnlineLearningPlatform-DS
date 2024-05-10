const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const notificationRoutes = require('./routes/notificationRoutes'); // Assuming routes are in a 'routes' directory
const app = express();
require('dotenv').config();

const port = process.env.PORT || 3000;

mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Database connected successfully'))
    .catch(err => console.log(err));

app.use(cors());
app.use(bodyParser.json());

// Use the notification routes for requests to /notification
app.use('/notifications', notificationRoutes);

app.listen(port, () => {
    console.log(`Notification service listening at http://localhost:${port}`);
});