import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Phone from "./Phone";

describe("Phone component", () => {
  test("renders the form correctly", () => {
    render(<Phone />);
    expect(screen.getByLabelText("Phone")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Enter your phone")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Login" })).toBeInTheDocument();
  });

  test("submits the form with valid phone number", () => {
    render(<Phone />);
    const validPhone = "1234567890";
    userEvent.type(screen.getByPlaceholderText("Enter your phone"), validPhone);
    userEvent.click(screen.getByRole("button", { name: "Login" }));
    expect(screen.queryByText("Phone is required")).toBeNull();
    expect(screen.queryByText("Phone is invalid")).toBeNull();
  });
});
