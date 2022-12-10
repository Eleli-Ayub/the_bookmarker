const Activity = require("../Models/Activitiesmodel");
module.exports.addActivity = async (req, res) => {
  const { activity, subnotes, deadline, location, dateCreated } = req.body;

  const newActivity = new Activity({
    activity,
    subnotes,
    deadline,
    location,
    dateCreated,
  });
  try {
    const newactivity = newActivity.save();
    //  check if the activity has been saved successfully

    if (!newactivity) {
      res.json({
        message: `Activity ${activity} has been added successfully`,
        succes: true,
      });
    } else {
      res.json({
        message: `Error adding activity ${activity}`,
        succes: false,
      });
    }
  } catch (error) {
    console.log(error);
    const err = new Error("Error!! Something went wrong!");
    return err;
  }
};
module.exports.deleteActivity = async (req, res) => {
  const id = req.body.id;

  // try catch to delete the activity
  try {
    const remove = await Activity.findByIdAndDelete(id, (error, docs) => {
      if (error) {
        res.json({
          message: `Could not delete activity ${id}`,
          success: false,
        });
      } else {
        res.json({
          message: `Activity ${id} deleted successfully`,
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
module.exports.editActivity = async (req, res) => {
  const { id, activity, subnotes, deadline, location, dateCreated } = req.body;

  //   get data from user and edit the activity from the database
  try {
    const edit = await Activity.findByIdAndUpdate(
      id,
      {
        activity,
        subnotes,
        deadline,
        location,
      },
      (error) => {
        if (error) {
          console.log(error);
          const err = new Error("Error!! Something went wrong!");
          return err;
        } else {
          res.json({
            message: `Activity Edited to  "${activity}"`,
            success: true,
          });
        }
      }
    );
  } catch (error) {
    console.log(error);
    const err = new Error("Error!! Something went wrong!");
    return err;
  }
};
module.exports.deleteActivity = async (res, res) => {
  const id = req.body.id;

  try {
    const done = await Activity.findByIdAndDelete(id);
    if (!done) {
      res.json({
        message: `Could not delete activity ${id}`,
        success: false,
      });
    } else {
      res.json({
        message: `Activity ${id} deleted successfully`,
        success: true,
      });
    }
  } catch (error) {
    console.log(error);
    const err = new Error("Error!! Something went wrong!");
    return err;
  }
};
module.exports.getActivities = async (req, res) => {
  try {
    const activities = await Activity.find();
    res.json({
      message: "Tasks Fetched successfully",
      activities: activities,
      success: true,
    });
  } catch (error) {
    console.log(error);
    const err = new Error("Error!! Something went wrong!");
    return err;
  }
};
