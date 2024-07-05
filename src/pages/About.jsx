import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import CartItem from "../components/CartItem/CartItem";
import { calculateTotals } from "../toolkit/slice/cartSlice";

const About = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const cartTotalAmount = useSelector((state) => state.cart.cartTotalAmount);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems, dispatch]);

  return (
    <div className="cartPage">
      <div className="cartPage__title">
        <h1>Shopping Cart</h1>
      </div>
      {cartItems.length === 0 ? (
        <div className="cartPage__empty">
          <span>Cart is empty</span>
        </div>
      ) : (
        <div>
          <div className="cartPage__info">
            <p className="p a1">Product</p>
            <p className="p a2">Price</p>
            <p className="p a3">Quantity</p>
            <p className="p a4">Total</p>
          </div>
          <div className="cartPage__itemList">
            {cartItems.map((item) => (
              <CartItem key={item.id} {...item} />
            ))}
          </div>
          <p className="total-summary">Total: ${cartTotalAmount.toFixed(2)}</p>
          <button className="check-button">Check Out</button>
        </div>
      )}
    </div>
  );
};

export default About;
