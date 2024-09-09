import { type FC, useMemo } from "react";
import { useLocation, NavLink } from "react-router-dom";
import { navItems } from "../../Utils/Constants";

const Navbar: FC = () => {
  const { pathname } = useLocation();

  const shouldHideNavbar = useMemo(() => {
    return pathname.startsWith("/Portfolio/") && pathname !== "/Portfolio";
  }, [pathname]);

  if (shouldHideNavbar) {
    return null;
  }

  return (
    <nav className="navbar">
      <ul className="navbar-list">
        {navItems.map((item) => (
          <li className="navbar-item" key={item.path}>
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                `navbar-link ${isActive ? "active" : ""}`
              }
            >
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
