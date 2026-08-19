const router = require("express").Router();

// Service router
const servicesRouter = require("./services");

router.use("/", servicesRouter);

module.exports = router;
