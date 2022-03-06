const AdminJS = require("adminjs");
const AdminJSExpress = require("@adminjs/express");
const AdminJSMongoose = require("@adminjs/mongoose");
AdminJS.registerAdapter(AdminJSMongoose);
const { resourceOptions } = require("../util/adminconfig");

const express = require("express");
const app = express();
const adminJS = new AdminJS({
  databases: [],
  rootPath: "/admin",
  resources: resourceOptions,
});
const router = AdminJSExpress.buildRouter(adminJS);
module.exports = { router, adminJS };
