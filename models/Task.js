class Task {
  constructor(
    id,
    title,
    description,
    creatorId,
    assigneeIds,
    createTime,
    dueDate,
    status,
    priority,
    lastUpdatedTime,
    tags,
    completionTime,
    schedule
  ) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.creatorId = creatorId;
    this.assigneeIds = assigneeIds;
    this.createTime = createTime; // Date object or a string
    this.dueDate = dueDate; // Date object or a string
    this.status = status;
    this.priority = priority;
    this.lastUpdatedTime = lastUpdatedTime; // Date object or a string
    this.tags = tags;
    this.completionTime = completionTime; // Date object or a string
    this.schedule = schedule; // instance of RepeatSchedule
  }
  toJSON() {
    const cleanObject = Object.entries(this).reduce((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = value;
      }
      return acc;
    }, {});

    if (this.schedule && typeof this.schedule.toJSON === "function") {
      cleanObject.schedule = this.schedule.toJSON();
    } else {
      cleanObject.schedule = null;
    }

    return cleanObject;
  }
}
module.exports = Task;
