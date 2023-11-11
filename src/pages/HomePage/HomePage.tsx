import HomePageStyled from "./HomePageStyled";

const HomePage = (): React.ReactElement => (
  <HomePageStyled>
    <h2 className="home-page__text">
      Welcome to your friend and enemy bookstore
    </h2>
    <img
      className="home-page__image"
      src="../../../image/frenemy.png"
      alt="Frenemy logo"
      width="80"
      height="120"
    />
    <h1 className="home-page__title">SOCIAL FRENEMY</h1>
  </HomePageStyled>
);

export default HomePage;
