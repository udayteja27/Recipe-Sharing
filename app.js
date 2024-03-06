// index.js

const express = require('express');
const connectDB = require('./config/db');
const authRoutes = require('./routes/auth');
const recipesRoutes = require('./routes/recipes');
require('dotenv').config();

const app = express();
connectDB();

app.use(express.json());

app.use('/auth', authRoutes);
app.use('/recipes', recipesRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
