import { ITask } from "./interface";
export const mockTasks: ITask[] = [
  {
    title: "Complete project documentation",
    description: "Write the README file and API documentation.",
    dueDate: new Date("2025-03-01"),
    priority: "high",
    status: "to-do",
  },
  {
    title: "Fix authentication bug",
    description: "Investigate and resolve the login issue for new users.",
    dueDate: new Date("2025-02-28"),
    priority: "medium",
    status: "in-progress",
  },
  {
    title: "Refactor dashboard component",
    description: "Improve performance and optimize API calls.",
    dueDate: new Date("2025-03-05"),
    priority: "low",
    status: "to-do",
  },
  {
    title: "Deploy new release",
    description: "Push the latest version to production and monitor logs.",
    dueDate: new Date("2025-03-02"),
    priority: "high",
    status: "done",
  },
  {
    title: "Schedule team meeting",
    description: "Discuss upcoming sprint tasks and roadblocks.",
    dueDate: new Date("2025-02-27"),
    priority: "medium",
    status: "to-do",
  },
];
