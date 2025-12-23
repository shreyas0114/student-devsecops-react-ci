import { render, screen, fireEvent } from "@testing-library/react";
import App from "../App";

test("renders dashboard title", () => {
  render(<App />);
  expect(
    screen.getByText(/Student Performance Dashboard/i)
  ).toBeInTheDocument();
});

test("adds a student and shows grade", () => {
  render(<App />);

  fireEvent.change(screen.getByPlaceholderText("Name"), {
    target: { value: "Amit" },
  });

  fireEvent.change(screen.getByPlaceholderText("Unit 1 Marks"), {
    target: { value: "18" },
  });

  fireEvent.change(screen.getByPlaceholderText("Unit 2 Marks"), {
    target: { value: "16" },
  });

  fireEvent.change(screen.getByPlaceholderText("Assignments Count"), {
    target: { value: "4" },
  });

  fireEvent.click(screen.getByText("Add Student"));

  expect(screen.getByText(/Amit/i)).toBeInTheDocument();
  expect(screen.getByText(/Grade:/i)).toBeInTheDocument();
});
