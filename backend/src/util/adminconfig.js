const User = require("../models/User");
const Car = require("../models/Car");

const resourceOptions = [{ resource: User }, { resource: Car }];
module.exports = { resourceOptions };
