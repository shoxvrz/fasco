import React, { useState } from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import "./Filter.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  selectMinPrice,
  selectMaxPrice,
  setPriceRange,
} from "../../toolkit/slice/filterSlice";

const Filter = () => {
  const dispatch = useDispatch();
  const minPrice = useSelector(selectMinPrice);
  const maxPrice = useSelector(selectMaxPrice);
  const [value, setValue] = useState([minPrice, maxPrice]);
  const [clickedBtn, setClickedBtn] = useState('all')

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleApplyFilter = () => {
    dispatch(setPriceRange({ minPrice: value[0], maxPrice: value[1] }));
  };

  return (
    <div className="filter" style={{ width: "20%" }}>
      <h1>Filter By Categories</h1>
      <div className="filter__categories">
      <div className="filter__categories">
                  <button
                    onClick={() => setClickedBtn("all")}
                    className={clickedBtn === "all" ? "activeBtn" : ""}
                  >
                    All
                  </button>
                  <button
                    onClick={() => setClickedBtn("clothes")}
                    className={clickedBtn === "clothes" ? "activeBtn" : ""}
                  >
                    Clothes
                  </button>
                  <button
                    onClick={() => setClickedBtn("electronics")}
                    className={clickedBtn === "electronics" ? "activeBtn" : ""}
                  >
                    Electronics
                  </button>
                  <button
                    onClick={() => setClickedBtn("furniture")}
                    className={clickedBtn === "furniture" ? "activeBtn" : ""}
                  >
                    Furniture
                  </button>
                  <button
                    onClick={() => setClickedBtn("shoes")}
                    className={clickedBtn === "shoes" ? "activeBtn" : ""}
                  >
                    Shoes
                  </button>
                  <button
                    onClick={() => setClickedBtn("miscellaneous")}
                    className={clickedBtn === "miscellaneous" ? "activeBtn" : ""}
                  >
                    Miscellaneous
                  </button>
                </div>
      </div>
      <div className="filter__price">
        <p>Price Range</p>
        <div className="filter__price--valuePrice">
          <div className="minPrice">
            <span>Min-price:</span>
            <span>{minPrice}</span>
            <div className="maxPrice">
              <span>Max-price:</span>
              <span>{maxPrice}</span>
            </div>
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
          <button className="submitBtn" onClick={handleApplyFilter}>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default Filter;


               