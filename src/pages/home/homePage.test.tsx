import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, it, expect } from "vitest";
import { TaskListProvider } from "../../context/context";
import HomePage from "./homePage";

describe("Home Page Test Suit", () => {
  it("Renders properly", async () => {
    render(
      <MemoryRouter>
        <TaskListProvider>
          <HomePage />
        </TaskListProvider>
      </MemoryRouter>
    );
    await waitFor(() => {});

    expect(
      screen.getByText("Dynamic and interactive task management application")
    ).toBeInTheDocument();
  });
  it("finds and clicks the 'Get Started' button", async () => {
    render(
      <MemoryRouter>
        <TaskListProvider>
          <HomePage />
        </TaskListProvider>
      </MemoryRouter>
    );
    const button = screen.getByRole("button", { name: /get started/i });
    expect(button).toBeInTheDocument();
    fireEvent.click(button);
    await waitFor(() => {});
  });
});
