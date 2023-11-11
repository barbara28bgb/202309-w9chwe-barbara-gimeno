import { Navigate, Route, Routes } from "react-router-dom";
import AppStyled from "./AppStyled";
import HomePage from "../pages/HomePage/HomePage";

const App = (): React.ReactElement => {
  return (
    <AppStyled>
      <main className="main-container">
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<HomePage />} />
        </Routes>
      </main>
    </AppStyled>
  );
};

export default App;
