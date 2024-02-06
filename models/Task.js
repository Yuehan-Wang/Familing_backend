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
    return {
      id: this.id,
      title: this.title,
      description: this.description,
      creatorId: this.creatorId,
      assigneeIds: this.assigneeIds,
      createTime: this.createTime,
      dueDate: this.dueDate,
      status: this.status,
      priority: this.priority,
      lastUpdatedTime: this.lastUpdatedTime,
      tags: this.tags,
      completionTime: this.completionTime,
      schedule: this.schedule.toJSON(),
    };
  }
}
