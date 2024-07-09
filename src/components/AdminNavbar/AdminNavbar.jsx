import React, { useState } from "react";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import PeopleIcon from "@mui/icons-material/People";
import './AdminNavbar.scss'
import {useNavigate} from 'react-router-dom'

const AdminNavbar = () => {
  const [activeNav, setActiveNav] = useState('users');
const navigate = useNavigate()
  const handleNavClick = (nav) => {
    setActiveNav(nav);
  };

  return (
    <nav className="navbar">
      <h1>ADMIN PAGE</h1>
      <ul className="navbar__links">
        <div onClick={() => handleNavClick('users')}>
          <PeopleIcon />
          <li onClick={() => navigate('/adminPage')} className={activeNav === 'users' ? 'active' : ''}>Users Data</li>
        </div>
        <div onClick={() => handleNavClick('products')}>
          <ProductionQuantityLimitsIcon />
          <li onClick={() => navigate('/adminPage/productsDataPage')}  className={activeNav === 'products' ? 'active' : ''}>Products Data</li>
        </div>
      </ul>
    </nav>
  );
};

export default AdminNavbar;
