import React from "react";
import "./CartItem.scss";
import { useDispatch } from 'react-redux';
import { addToCart, decreaseCart, removeFromCart } from '../../toolkit/slice/cartSlice'; 

const CartItem = ({ images, title, category, price, cartQuantity, id }) => {
    const dispatch = useDispatch();

    const handleAddToCart = () => {
        dispatch(addToCart({ id, title, price }));
    };

    const removeHandler = () => {
        dispatch(removeFromCart(id)); 
    };

    const decreaseCartHandler = () => {
        dispatch(decreaseCart({ id, title, price }));
    };

    return (
        <div className="cartItem">
            <div className="cartItem__info">
                <div className="cartItem__info--img">
                    <img className="image" src={images[0]} alt={title} /> 
                </div>
                <div className="cartItem__info--title">
                    <h1>{title}</h1>
                    <button onClick={removeHandler} >Remove</button>
                </div>
            </div>
            <div className="cartItem__price">
                <span>${price}.00</span>
            </div>
            <div className="cartItem__quantity">
                <button onClick={decreaseCartHandler}>-</button>
                <span>{cartQuantity}</span>
                <button onClick={handleAddToCart}>+</button>
            </div>
            <div className="cartItem__total">
                <p>${price * cartQuantity}.00</p>
            </div>
        </div>
    );
};

export default CartItem;
