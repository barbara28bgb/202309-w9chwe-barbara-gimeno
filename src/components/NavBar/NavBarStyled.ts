import styled from "styled-components";

const NavBarStyled = styled.nav`
  display: flex;
  color: ${({ theme }) => theme.color.mainFont};
  justify-content: space-around;
  top: 0;
  border-bottom: solid;
  width: 100%;
  height: 50px;
  position: fixed;

  .navigation-bar {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: row;
    align-content: flex-start;
    align-items: center;
    justify-content: space-around;
    gap: 30px;
    position: static;

    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 10px;
    gap: 1rem;
    background-color: ${({ theme }) => theme.color.background};
  }

  .active {
    border-bottom: 2px solid ${({ theme }) => theme.color.secondaryFont};
    border-radius: 3px;
  }
`;

export default NavBarStyled;
