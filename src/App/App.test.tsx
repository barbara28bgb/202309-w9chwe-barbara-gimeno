import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../styles/GlobalStyle";
import mainTheme from "../styles/mainTheme";
import App from "./App";

describe("Given an App component", () => {
  describe("When it render", () => {
    test("It should show a text 'SOCIAL FRENEMY' on a heading"),
      () => {
        const expectedText = "SOCIAL FRENEMY";

        render(
          <BrowserRouter>
            <ThemeProvider theme={mainTheme}>
              <GlobalStyle />
              <App />
            </ThemeProvider>
          </BrowserRouter>,
        );

        const headingElement = screen.getByRol("heading", {
          name: expectedText,
        });

        expect(headingElement).toBeInTheDocument();
      };
  });
});
