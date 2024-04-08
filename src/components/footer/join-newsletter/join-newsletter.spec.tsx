import "@testing-library/jest-dom";
import { describe, test, expect, vi } from "vitest";
import { render, fireEvent } from "@testing-library/react";
import { JoinNewsletter } from "./join-newsletter";

describe("newsletter sending", () => {
  test("newsletter component is rendering", () => {
    const { getByText } = render(<JoinNewsletter />);
    expect(getByText("Join Newsletter")).toBeInTheDocument();
  });

  test("error msg is being displayed when field is empty", () => {
    const { getByTestId, getByText } = render(<JoinNewsletter />);
    const newsletterBtn = getByTestId("newsletter-btn");
    fireEvent.click(newsletterBtn);
    expect(getByText("The field cannot be empty")).toBeInTheDocument();
  });

  test("'wrong email' is displayed on screen when user inputs incorrect email", () => {
    const { getByText, getByRole, getByTestId } = render(<JoinNewsletter />);
    const inputEmailAdress = getByRole("textbox");
    const newsletterBtn = getByTestId("newsletter-btn");
    fireEvent.input(inputEmailAdress, { target: { value: "abrakada" } });
    fireEvent.click(newsletterBtn);
    expect(getByText("Wrong email adress")).toBeInTheDocument();
  });

  test("'email has been sent' is displayed on screen when user inputs correct email", () => {
    const {} = render(<JoinNewsletter />);
  });
});
