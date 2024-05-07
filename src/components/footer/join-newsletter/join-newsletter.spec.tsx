import "@testing-library/jest-dom";
import { describe, test, expect, beforeAll, afterEach, afterAll } from "vitest";
import { render, fireEvent } from "@testing-library/react";
import { JoinNewsletter } from "./join-newsletter";
import { http, HttpResponse } from "msw";
import { setupServer } from "msw/node";

// mock (udawany) serwer do testów: https://testing-library.com/docs/react-testing-library/example-intro/#full-example
// ---- standardowy setup w plikach które korzystają z API:
const server = setupServer();

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
// ----

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
    expect(getByText("Wrong email address")).toBeInTheDocument();
  });

  test("'email has been sent' is displayed on screen when user inputs correct email", async () => {
    const { getByRole, getByTestId, findByText } = render(<JoinNewsletter />);

    // mock odpowiedzi z serwera z body null i status 200, OK:  https://mswjs.io/docs/basics/mocking-responses
    server.use(
      http.post(`/newsletter`, () => {
        return new HttpResponse(null, { status: 200 });
      })
    );

    const inputEmailAdress = getByRole("textbox");
    const newsletterBtn = getByTestId("newsletter-btn");
    fireEvent.input(inputEmailAdress, {
      target: { value: "abrakadabra@gmail.com" },
    });
    fireEvent.click(newsletterBtn);

    expect(await findByText("Email has been sent")).toBeInTheDocument();
  });

  test("'error sending email' is displayed on screen when server fails", async () => {
    const { getByRole, getByTestId, findByText } = render(<JoinNewsletter />);

    // mock errora z serwera https://mswjs.io/docs/basics/mocking-responses
    server.use(
      http.post(`/newsletter`, () => {
        return HttpResponse.error();
      })
    );

    const inputEmailAdress = getByRole("textbox");
    const newsletterBtn = getByTestId("newsletter-btn");
    fireEvent.input(inputEmailAdress, {
      target: { value: "abrakadabra@gmail.com" },
    });
    fireEvent.click(newsletterBtn);

    expect(await findByText("Error sending email")).toBeInTheDocument();
  });
});
