// components/Filter/Filter.js

import React, { useState } from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import "./Filter.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  selectMinPrice,
  selectMaxPrice,
  setPriceRange,
  selectCategoryFilter,
  setCategoryFilter,
} from "../../toolkit/slice/filterSlice";

const Filter = () => {
  const dispatch = useDispatch();
  const minPrice = useSelector(selectMinPrice);
  const maxPrice = useSelector(selectMaxPrice);
  const categoryFilter = useSelector(selectCategoryFilter);
  const [value, setValue] = useState([minPrice, maxPrice]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleApplyFilter = () => {
    dispatch(setPriceRange({ minPrice: value[0], maxPrice: value[1] }));
  };

  const handleCategoryFilter = (category) => {
    dispatch(setCategoryFilter(category));
  };

  return (
    <div className="filter" style={{ width: "20%" }}>
      <h1>Filter By Categories</h1>
      <div className="filter__categories">
        <button
          onClick={() => handleCategoryFilter("all")}
          className={categoryFilter === "all" ? "activeBtn" : ""}
          value={'all'}
        >
          All
        </button>
        <button
          onClick={() => handleCategoryFilter("clothes")}
          className={categoryFilter === "clothes" ? "activeBtn" : ""}
          value={'all'}
        >
          Clothes
        </button>
        <button
          onClick={() => handleCategoryFilter("electronics")}
          className={categoryFilter === "electronics" ? "activeBtn" : ""}
          value={'all'}
        >
          Electronics
        </button>
        <button
          onClick={() => handleCategoryFilter("furniture")}
          className={categoryFilter === "furniture" ? "activeBtn" : ""}
          value={'all'}
        >
          Furniture
        </button>
        <button
          onClick={() => handleCategoryFilter("shoes")}
          className={categoryFilter === "shoes" ? "activeBtn" : ""}
        >
          Shoes
        </button>
        <button
          onClick={() => handleCategoryFilter("miscellaneous")}
          className={categoryFilter === "miscellaneous" ? "activeBtn" : ""}
        >
          Miscellaneous
        </button>
      </div>
      <div className="filter__price">
        <p>Price Range</p>
        <div className="filter__price--valuePrice">
          <div className="minPrice">
            <span>Min-price:</span>
            <span>{minPrice}</span>
          </div>
          <div className="maxPrice">
            <span>Max-price:</span>
            <span>{maxPrice}</span>
          </div>
        </div>
        <Box sx={{ width: 200 }}>
          <Slider
            value={value}
            onChange={handleChange}
            valueLabelDisplay="auto"
            min={0}
            max={97}
            color="gray"
          />
        </Box>
        <div>
          <button className="submitBtn" onClick={handleApplyFilter}>
            Apply Filters
          </button>
        </div>
      </div>
    </div>
  );
};

export default Filter;
