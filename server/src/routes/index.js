const router = require("express").Router();
const { getDrivers } = require("../controllers/getDrivers");
const { getDriversById } = require("../controllers/getDriversById");
const { postDrivers } = require("../controllers/postDrivers");
const { getTeams } = require("../controllers/getTeams");

router.get("/drivers", getDrivers);
router.get("/drivers/:id", getDriversById);
router.post("/drivers", postDrivers);
router.get("/teams", getTeams);
module.exports = router;
