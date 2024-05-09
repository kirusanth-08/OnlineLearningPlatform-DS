const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const paymentRoutes = require('./routes/paymentRoutes'); // Assuming routes are in a 'routes' directory
const app = express();
require('dotenv').config();

const port = process.env.PORT || 8084;

mongoose.connect(process.env.MONGODB_URL)
    .then(() => console.log('Database connected successfully'))
    .catch(err => console.log(err));


app.use(express.json())
app.use(bodyParser.json());
app.use(cors());

// Use the payment routes for requests to /payments
app.use('/api/payment', paymentRoutes);


app.listen(port, () => {
    console.log(`Payment service listening at http://localhost:${port}`);
});



