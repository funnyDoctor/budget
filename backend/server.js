const express = require('express');
const connectDB = require('./config/db');
const budgetRoutes = require('./routes/budgetRoutes');
const authRoutes = require('./routes/authRoutes');
require('dotenv').config({path: './config.env'});


//App and port
const app = express();
const red = '\x1b[31m%s\x1b[0m';
const blue = '\x1b[34m%s\x1b[0m';
const yellow = '\x1b[33m%s\x1b[0m';
const PORT = process.env.PORT || 5000;

//Connect to DB
connectDB(yellow);



app.use(express.json());
app.use(express.static(__dirname + '/public'))
app.use('/api/budget', budgetRoutes)
app.use('/api/auth', authRoutes);


app.get('/', (req, res) => {
  res.json({message: 'API running...'});
});


//Server
const server = app.listen(PORT, () => console.log(blue, `Server has been started on port ${PORT}!`));

process.on('unhandledRejection', (err, promise) => {
  console.log(red,`MongoDB connection FAIL: ${err.message}`);
  server.close(() => process.exit(1));
});