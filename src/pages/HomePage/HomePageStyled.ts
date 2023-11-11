import styled from "styled-components";

const HomePageStyled = styled.div`
  display: flex;
  text-align: center;
  background-color: #deedde;
  align-items: center;
  flex-direction: column;
  background-color: ${({ theme }) => theme.color.background};

  .home-page {
    &__title {
      font-family: ${({ theme }) => theme.typography.mainFontFamily};
      font-size: ${({ theme }) => theme.typography.titleSize};
      color: ${({ theme }) => theme.color.mainFont};
      padding: 20px 0 20px 0;
      font-size: 2.4rem;
      text-align: center;
      margin-top: 20px;
    }
    &__text {
      font-family: ${({ theme }) => theme.typography.secondaryFontFamily};
      font-size: ${({ theme }) => theme.typography.textSize};
      color: ${({ theme }) => theme.color.secondaryFont};
      padding: 25px;
      margin-top: 30px;
      margin-bottom: 20px;
    }
  }
`;

export default HomePageStyled;
