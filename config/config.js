require('dotenv').config();


const config = {
  PORT: process.env.PORT || 8000,
  DATABASE_URL: process.env.DATABASE_URL,
  DATABASE_DIALECT: process.env.DATABASE_DIALECT || 'postgresql',
  NODE_ENV: process.env.NODE_ENV || 'development',
};

module.exports = config;