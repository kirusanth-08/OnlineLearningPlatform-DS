const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const notificationRoutes = require('./routes/notificationRoutes'); // Assuming routes are in a 'routes' directory
const app = express();
require('dotenv').config();

const port = process.env.PORT || 8088;

mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Database connected successfully'))
    .catch(err => console.log(err));

app.use(express.json())
// app.use(bodyParser.json());
app.use(cors());

// Use the notification routes for requests to /notification
app.use('/api/notifications', notificationRoutes);

app.listen(port, () => {
    console.log(`Notification service listening at http://localhost:${port}`);
});