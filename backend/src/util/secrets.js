require("dotenv").config();
const config = {
  mongoAdmin: process.env.MONGO_ADMIN,
  mongoPassword: process.env.MONGO_PASSWORD,
  dropboxToken: process.env.DROPBOX_TOKEN,
};

console.log(config.dropboxToken)

module.exports = config;
