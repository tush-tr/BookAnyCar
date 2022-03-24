const crypto = require("crypto");
const util = require("util");
const scrypt = util.promisify(crypto.scrypt);

const hashPassword = async (password) => {
  const salt = crypto.randomBytes(8).toString("hex");
  const buf = await scrypt(password, salt, 64);
  const hashedPassword = `${buf.toString("hex")}.${salt}`;
  return hashedPassword;
};
const comparePasswords = async (savedPassword, suppliedPassword) => {
  const [hashed, salt] = savedPassword.split(".");
  const buf = await scrypt(suppliedPassword, salt, 64);
  const hashedSupplied = buf.toString("hex");
  if (hashedSupplied === hashed) {
    return true;
  }
  return false;
};
module.exports = { hashPassword, comparePasswords };
