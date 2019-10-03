import dotenv from 'dotenv';

dotenv.config();
module.exports = {
  development: {
    storage: './database_dev.sqlite',
    dialect: 'sqlite',
    logging: true
  },
  test: {
    storage: './database_test.sqlite',
    dialect: 'sqlite',
    logging: false
  },
  production: {
    storage: './database_prod.sqlite',
    dialect: 'sqlite',
    logging: false
  }
};