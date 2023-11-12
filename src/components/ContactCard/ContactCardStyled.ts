import styled from "styled-components";

const MovieCardStyled = styled.article`
  display: flex;
  padding: 20px;
  flex-direction: column;
  justify-content: center;
  color: ${({ theme }) => theme.color.mainFont};
  align-items: center;
  text-align: center;
  gap: 8px;

  .movie-container {
    &__image {
      border-radius: ${({ theme }) => theme.borderRadius};
      border: 5px solid #000;
      width: 100%;
      height: auto;
      max-width: fit-content;
    }

    &__name {
      font-size: 1.8rem;
      color: ${({ theme }) => theme.color.mainFont};
    }

    &__yearOfBirth {
      font-size: 1.2rem;
      color: ${({ theme }) => theme.color.mainFont};
    }
  }
`;
export default MovieCardStyled;
