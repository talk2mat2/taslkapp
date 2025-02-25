import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, it, expect, vi } from "vitest";
import { TaskListProvider } from "../../context/context";
import DashHome from ".";
import { mockTask } from "../../test/_mocks_/mockTask";

vi.mock("../../hooks/useTaskList", () => ({
  useTaskList: () => ({
    addTask: vi.fn(),
    deleteTask: vi.fn(),
    editTask: vi.fn(),
    tasksList: mockTask,
  }),
}));

describe("Home Page Test Suit", () => {
  it("Renders properly", async () => {
    render(
      <MemoryRouter>
        <TaskListProvider>
          <DashHome />
        </TaskListProvider>
      </MemoryRouter>
    );
    await waitFor(() => {});

    expect(
      screen.getByText("Resolve the bug preventing users from logging in.")
    ).toBeInTheDocument();
  });
});
