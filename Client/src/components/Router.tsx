import { Routes, Route } from "react-router";
import Home from "../pages/Home";

const Router = () => {
  return (
    <Routes>
      <Route>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
};

export default Router;
