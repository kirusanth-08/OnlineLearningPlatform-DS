const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const paymentRoutes = require('./routes/paymentRoutes'); // Assuming routes are in a 'routes' directory
const app = express();
require('dotenv').config();

const port = process.env.PORT || 3000;

mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Database connected successfully'))
    .catch(err => console.log(err));

app.use(cors());
app.use(bodyParser.json());

// Use the payment routes for requests to /payments
app.use('/payment', paymentRoutes);

app.listen(port, () => {
    console.log(`Payment service listening at http://localhost:${port}`);
});