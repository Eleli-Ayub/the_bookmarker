const Task = require("../Models/Taskmodel");

module.exports.addTask = async (req, res) => {
  const { title, deadline, dateCreated } = req.body;

  const newTask = new Task({
    title,
    deadline,
    dateCreated,
    isDone: false,
  });

  try {
    try {
      const task = await newTask.save();
      res.json({
        message: `Task " ${title} added successfully`,
        success: true,
      });
    } catch (error) {
      console.log(error);
      const err = new Error("Error!! Something went wrong!");
      return next(err);
    }
  } catch (error) {
    console.log(error);
    const err = new Error("Error!! Something went wrong!");
    return err;
  }
};

module.exports.deleteTask = async (req, res) => {
  const id = req.body.id;
  try {
    const remove = await Task.findByIdAndDelete(id, (error, docs) => {
      if (error) {
        res.json({
          message: `Could not delete Task ${id}`,
          success: false,
        });
      } else {
        res.json({
          message: `Task ${id} deleted successfully`,
          success: true,
        });
      }
    });
  } catch (error) {
    console.log(error);
    const err = new Error("Error!! Something went wrong!");
    return err;
  }
};
module.exports.editTask = async (req, res) => {
  const { id, text } = req.body;

  try {
    const edit = await Task.findByIdAndUpdate(id, { title: text }, (error) => {
      if (error) {
        console.log(error);
        const err = new Error("Error!! Something went wrong!");
        return err;
      } else {
        res.json({
          message: `Task Edited to  "${text}"`,
          success: true,
        });
      }
    });
  } catch (error) {
    console.log(error);
    const err = new Error("Error!! Something went wrong!");
    return err;
  }
};
module.exports.completeTask = (req, res) => {
  const id = req.body.id;

  try {
    const edit = Task.findByIdAndUpdate(id, { isDone: true }, (error) => {
      if (error) {
        console.log(error);
        const err = new Error("Error!! Something went wrong!");
        return next(err);
      } else {
        res.json({
          message: `Task ${id} was done`,
          success: true,
        });
      }
    });
  } catch (error) {
    console.log(error);
    const err = new Error("Error!! Something went wrong!");
    return next(err);
  }
};
module.exports.getTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json({
      message: "Tasks Fetched successfully",
      tasks: tasks,
      success: true,
    });
  } catch (error) {
    console.log(error);
    const err = new Error("Error!! Something went wrong!");
    return err;
  }
};
