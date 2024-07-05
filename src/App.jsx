import React, { useState, useEffect } from "react";
import "./App.css";
import { Link, Outlet, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Container from "./layout/Container";
import Footer from "./components/Footer/Footer";

const App = () => {
  const location = useLocation();
  const [nav, setNav] = useState("");

  useEffect(() => {
    setNav(location.pathname.slice(1) || "home");
  }, [location.pathname]);

  return (
    <div className="app">
      <Navbar />
      <Container>
        <Outlet />
      </Container>
      <Footer className="footer" />
    </div>
  );
};

export default App;
