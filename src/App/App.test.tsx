import { render, screen } from "@testing-library/react";
import HomePage from "../pages/HomePage/HomePage";
import { MemoryRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import mainTheme from "../styles/mainTheme";
import AppStyled from "./AppStyled";

describe("Given an App component", () => {
  describe("When it render a route to HomePage", () => {
    test("Then it should show a heading with title 'SOCIAL FRENEMY'", () => {
      const route = "/home";
      const expectedText = "SOCIAL FRENEMY";

      render(
        <ThemeProvider theme={mainTheme}>
          <MemoryRouter initialEntries={[route]}>
            <AppStyled />
            <HomePage />
          </MemoryRouter>
        </ThemeProvider>,
      );
      expect(
        screen.getByRole("heading", { name: expectedText }),
      ).toBeInTheDocument();
    });
  });
});
