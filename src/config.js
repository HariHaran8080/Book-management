
require('dotenv').config();

const config = {
  port: process.env.PORT || 3000,
  mongodbUri: process.env.MONGODB_URI || 'mongodb://localhost:27017/bookdb',
  env: process.env.NODE_ENV || 'development'
};

module.exports = config;
