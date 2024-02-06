const request = require("supertest");
const app = require("../app");

describe("POST /task/create", () => {
  it("should create a task and return 201 status", async () => {
    const newTask = {
      title: "Test Task",
      description: "This is a test task",
      creatorId: "user1",
      assigneeIds: ["user1", "user2"],
      createTime: "2021-08-01T12:00:00Z",
      dueDate: "2021-08-02T12:00:00Z",
      status: "incomplete",
      priority: "high",
      lastUpdatedTime: "2021-08-01T12:00:00Z",
      tags: ["test", "task"],
      completionTime: "",
      schedule: {
        frequency: "daily",
        interval: 1,
        daysOfWeek: [],
        daysOfMonth: [],
        customPattern: "",
        startTime: "2021-08-01T12:00:00Z",
        endDate: "2021-08-10T12:00:00Z",
      },
    };

    const response = await request(app)
      .post("/task/create")
      .send(newTask)
      .expect(201);

    //expect(response.body).toHaveProperty("id");
  });
});
