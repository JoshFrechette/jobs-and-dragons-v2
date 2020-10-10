const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const cors = require('cors');
const passport = require('passport');
const passportLocal = require('passport-local').Strategy;
const cookieParser = require('cookie-parser');
const bcrypt = require('bcryptjs');
const session = require('express-session');
const path = require('path');
const mongoose = require('mongoose');
const userRoutes = require('./routes/index');

const PORT = process.env.PORT || 3001;

// Load env variables
dotenv.config({ path: path.join(__dirname, 'config/config.env') });
const app = express();
app.use(cors());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());

app.use(cors({
  origin: `http://localhost:${PORT}`, // location of the React app
  credentials: true
}))

app.use(session({
  secret: "outcoded",
  resave: true,
  saveUninitialized: true
}))

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// Use development logging middleware
if (process.env.NODE_ENV === 'development') {
  const morgan = require('morgan');
  app.use(morgan('dev'));
}

// Add routes, both API and view
app.use('/', userRoutes);

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);

app.use(cookieParser("outcoded"))

const uri = process.env.MONGO_ATLAS_URI;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
});
const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB database connection established successfully');
});

module.exports = app;
