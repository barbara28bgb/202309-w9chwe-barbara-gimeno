import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *,
  ::after,
  ::before {
    box-sizing: border-box;
  }

  h1,
  h2,
  body {
    margin: 0;
    padding:0;
  }
  a {
  text-decoration: none;
  color: inherit;
  }
  


  ul,
  li {
    list-style: none;
    padding: 0;
    margin: 0;    
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
  }

  body {
    font-family: ${({ theme }) => theme.typography.mainFontFamily};
    color: ${({ theme }) => theme.color.mainFont};
    background-color: ${({ theme }) => theme.color.background};
  }
`;

export default GlobalStyle;
