import { ITask } from "../../interface";

export const mockTask: ITask[] = [
  {
    title: "Complete project report",
    description: "Finalize the report and submit it to the manager.",
    dueDate: "2025-03-01",
    priority: "high",
    status: "in-progress",
    id: "task-123",
  },
  {
    title: "Fix login issue",
    description: "Resolve the bug preventing users from logging in.",
    dueDate: "2025-02-28",
    priority: "medium",
    status: "to-do",
    id: "task-124",
  },
  {
    title: "Refactor dashboard component",
    description: "Improve the code structure and optimize performance.",
    dueDate: "2025-03-05",
    priority: "low",
    status: "done",
    id: "task-125",
  },
];
