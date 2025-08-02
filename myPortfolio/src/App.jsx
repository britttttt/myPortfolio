import { Route, Routes } from "react-router-dom";
import "./App.css";
import { ApplicationViews } from "./views/ApplicationViews";


export const App = () => {

  return (
    <Routes>
      <Route
        path="*"
        element={
          <Authorized>
            <ApplicationViews/>
          </Authorized>
        }
      />
    </Routes>
  );
};
