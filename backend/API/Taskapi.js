const { verifyJwt } = require("../Controllers/Authcontroller");
const {
  addTask,
  deleteTask,
  editTask,
  completeTask,
  getTasks,
} = require("../Controllers/Taskcontroller");

const router = require("express").Router();

router.post("/addtask", addTask);
router.post("/deletetask", deleteTask);
router.post("/edittask", editTask);
router.post("/completetask", completeTask);
router.get("/gettasks", getTasks);

module.exports = router;
