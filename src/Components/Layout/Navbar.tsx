import type { FC } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Navbar: FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <button
            className={`navbar-link ${
              location.pathname === "/About" ? "active" : ""
            }`}
            onClick={() => navigate("/About")}
          >
            About
          </button>
        </li>

        <li className="navbar-item">
          <button
            className={`navbar-link ${
              location.pathname === "/Resume" ? "active" : ""
            }`}
            onClick={() => navigate("/Resume")}
          >
            Resume
          </button>
        </li>

        <li className="navbar-item">
          <button
            className={`navbar-link ${
              location.pathname === "/Portfolio" ? "active" : ""
            }`}
            onClick={() => navigate("/Portfolio")}
          >
            Portfolio
          </button>
        </li>

        <li className="navbar-item">
          <button
            className={`navbar-link ${
              location.pathname === "/Contact" ? "active" : ""
            }`}
            onClick={() => navigate("/Contact")}
          >
            Contact
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
