import React, { useState, useEffect } from "react";
import axios from "axios";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./NewArrival.scss";
import Container from "../../layout/Container";
import useAddToCart from "../../hooks/useAddToCart";

const NewArrival = () => {
  const [newArrival, setNewArrival] = useState([]);
  const [loading, setLoading] = useState(true);

  const {addToCartHandler} = useAddToCart()

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:3000/data");
      setNewArrival(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };

  return (
    <Container>
      <div className="newArrivals">
        <div className="newArrivals__title">
          <h1>New Arrivals</h1>
        </div>
        <div className="newArrivals__newCards">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <Swiper
              className="newArrivals__newCards--cards"
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={40}
              slidesPerView={5}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log("slide change")}
            >
              {newArrival
                .filter((item) => item.newArrival === true)
                .map((newItem) => (
                  <SwiperSlide className="card" key={newItem.id}>
                    <div className="card__image">
                      <img className="image" src={newItem.images[0]} alt="" />
                    </div>
                    <div className="card__info">
                      <h1>{newItem.title}</h1>
                      <div className="card__info--price">
                        <p>Price</p>
                        <p>${newItem.price}</p>
                      </div>
                      <button onClick={() => addToCartHandler(newItem)}>Add To Cart</button>
                    </div>
                  </SwiperSlide>
                ))}
            </Swiper>
          )}
        </div>
      </div>
    </Container>
  );
};

export default NewArrival;
