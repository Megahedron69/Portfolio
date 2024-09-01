import type { FC } from "react";
import { router } from "./Routes/Router";
import { RouterProvider } from "react-router-dom";
import "./assets/css/style.css";
const App: FC = () => {
  return (
    <>
      <div>
        <RouterProvider router={router} />
      </div>
    </>
  );
};

export default App;
