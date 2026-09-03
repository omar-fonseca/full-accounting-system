const dotenv = require('dotenv');
const path = require('path');

const loadEnv = () => {
  dotenv.config({ path: path.resolve(__dirname, '..', '.env') });
};

module.exports = loadEnv;