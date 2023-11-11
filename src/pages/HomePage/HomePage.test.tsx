import { ThemeProvider } from "styled-components";
import HomePage from "./HomePage";
import { render, screen } from "@testing-library/react";
import mainTheme from "../../styles/mainTheme";

describe("Given a HomePage component", () => {
  describe("When it is called", () => {
    test("Then it should show on a heading with the text 'Welcome to your friend and enemy bookstore'", () => {
      const expectedText = "Welcome to your friend and enemy bookstore";

      render(
        <ThemeProvider theme={mainTheme}>
          <HomePage />
        </ThemeProvider>,
      );

      const headindElement = screen.getByRole("heading", {
        name: expectedText,
      });

      expect(headindElement).toBeInTheDocument();
    });
  });
});
