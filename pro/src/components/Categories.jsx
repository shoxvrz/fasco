import React, { useState } from "react";
import categories from "../routes/categories";
import { Link } from "react-router-dom";
import './Categories.css';

const Categories = () => {
  const [activeButton, setActiveButton] = useState(null);

  const handleClick = (id) => {
    setActiveButton(id);
  };

  return (
    <div className="categories">
      <ul>
        {categories.map((nav) => (
          <li
          key={nav.id}>
            <Link
              to={nav.link}
              
              onClick={() => handleClick(nav.id)}
            >
              {nav.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
