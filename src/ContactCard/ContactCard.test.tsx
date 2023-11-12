import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import contactsMock from "../mocks/contactsMock";
import mainTheme from "../styles/mainTheme";
import ContactCard from "./ContactCard";
import { BrowserRouter } from "react-router-dom";

describe("Given a ContactCard component", () => {
  describe("When it receives a 'Yastaqui Laguerra'", () => {
    test("Then it should return a 'Yastaqui Laguerra' ", () => {
      const expectedAltText = "Yastaqui Laguerra";

      render(
        <ThemeProvider theme={mainTheme}>
          <BrowserRouter>
            <ContactCard contact={contactsMock[0]} />
          </BrowserRouter>
        </ThemeProvider>,
      );

      const pictureImage = screen.getByAltText(expectedAltText);

      expect(pictureImage).toBeInTheDocument();
    });
  });
});
