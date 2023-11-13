import { useDispatch } from "react-redux";
import HomePageStyled from "./HomePageStyled";
import useContactsApi from "../../hooks/useContactsApi";
import { loadContactsActionCreator } from "../../store/feature/contactSlice/contactSlice";
import { useEffect } from "react";
import NavBar from "../../components/NavBar/NavBar";

const HomePage = (): React.ReactElement => {
  const dispatch = useDispatch();
  const { getContacts } = useContactsApi();

  useEffect(() => {
    (async () => {
      const currentContacts = await getContacts();
      dispatch(loadContactsActionCreator(currentContacts));
    })();
  }, [dispatch, getContacts]);

  return (
    <>
      <NavBar />
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
    </>
  );
};

export default HomePage;
