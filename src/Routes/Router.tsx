import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Layout from "../Components/Layout/Layout";
import About from "../Components/About/About";
import Contact from "../Components/Contact/Contact";
import Portfolio from "../Components/Portfolio/Portfolio";
import Resume from "../Components/Resume/Resume";
export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        <Route index path="About" element={<About />} />
        <Route path="Resume" element={<Resume />} />
        <Route path="Portfolio" element={<Portfolio />} />
        <Route path="Contact" element={<Contact />} />
      </Route>
      <Route
        path="*"
        element={
          <h1 style={{ color: "white", fontSize: "96px" }}>Not found</h1>
        }
      />
    </>
  )
);
