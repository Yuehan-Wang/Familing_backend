const express = require("express");
const router = express.Router();
const Task = require("../models/Task");
const db = require("../db/database");

router.post("/", async (req, res) => {
  const taskData = req.body;
  const newTask = new Task(
    taskData.id,
    taskData.title,
    taskData.description,
    taskData.creatorId,
    taskData.assigneeIds,
    taskData.createTime,
    taskData.dueDate,
    taskData.status,
    taskData.priority,
    taskData.lastUpdatedTime,
    taskData.tags,
    taskData.completionTime,
    taskData.schedule
  );

  const taskRef = db.ref("tasks").push();
  try {
    await taskRef.set(newTask.toJSON());
    res.status(201).json({ id: taskRef.key });
  } catch (error) {
    console.error(
      "Error adding document to Firebase Realtime Database:",
      error
    );
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
