import { NavLink } from "react-router-dom";
import NavBarStyled from "./NavBarStyled";

const NavBar = (): React.ReactElement => {
  return (
    <NavBarStyled>
      <ul className="navigation">
        <li>
          <NavLink
            aria-label="homepage"
            to="/homepage"
            className="navigation__bar"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            aria-label="contacts"
            to="/contacts"
            className="navigation__bar"
          >
            Contacts
          </NavLink>
        </li>
      </ul>
    </NavBarStyled>
  );
};

export default NavBar;
