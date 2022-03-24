const path = require("path")
const swaggerPath = path.resolve(__dirname,'../swagger.yaml')
const router = require("express").Router();
const swaggerUi = require("swagger-ui-express");
const YAML = require("yamljs");

const swaggerDocument = YAML.load(swaggerPath);

router.use("/api-docs", swaggerUi.serve);
router.get("/api-docs", swaggerUi.setup(swaggerDocument));

module.exports = router;
