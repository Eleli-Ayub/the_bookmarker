const router = require("express").Router();
const {
  addActivity,
  deleteActivity,
  editActivity,
  deleteActivity,
} = require("../Controllers/Activitycontroller");

router.post("/addactivity", addActivity);
router.post("/deleteactivity", deleteActivity);
router.post("/editactivity", editActivity);
router.post("/deleteactivity", deleteActivity);
router.get("/getactivities", getActivities);

module.exports = router;
