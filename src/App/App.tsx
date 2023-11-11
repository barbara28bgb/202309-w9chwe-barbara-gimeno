import { Route, Routes } from "react-router-dom";
import AppStyled from "./AppStyled";

const App = (): React.ReactElement => {
  return (
    <AppStyled>
      <div className="main-conatiner">
        <Routes>
          <Route path="/" />
        </Routes>
      </div>
    </AppStyled>
  );
};

export default App;
