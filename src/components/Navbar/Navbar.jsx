import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { navRoutes } from "../../routes/navRoutes";
import "./Navbar.scss";

const Navbar = () => {
  const location = useLocation();
  const [activeNav, setActiveNav] = useState("Home");

  useEffect(() => {
    const pathname = location.pathname;
    const currentNav = navRoutes.find(route => pathname === route.link);
    setActiveNav(currentNav ? currentNav.name : "Home");
  }, [location.pathname]);

  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <h1>Fasco</h1>
      </div>
      <div className="navbar__navigation">
        <div className="navbar__navigation-navs">
          {navRoutes.map((navLink) => (
            <Link to={navLink.link} key={navLink.name}>
              <li className={activeNav === navLink.name ? "active" : ""}>
                {navLink.name}
              </li>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
