import React from 'react';
import './Card.scss';
import { useNavigate } from 'react-router-dom';

const Card = ({ title, price, images, pro, addToCartHandler }) => {
  const navigate = useNavigate();

  const handleRouter = (pro) => {
    navigate(`/productPage/${pro.id}`);
  };

  return (
    <div className="card">
      <div className="card__image">
        <img
          onClick={() => handleRouter(pro.id)}
          className="image"
          src={images}
          alt={title}
        />
      </div>
      <div className="card__info">
        <h1>{title}</h1>
        <div className="card__info--price">
          <p>Price</p>
          <p>${price}</p>
        </div>
        <button onClick={() => addToCartHandler(pro)}>Add To Cart</button>
      </div>
    </div>
  );
};

export default Card;
