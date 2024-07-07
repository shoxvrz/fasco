// components/MainItems.js
import React from 'react';
import './MainItems.scss';
import useGetData from '../../hooks/useGetData';
import Card from '../Card/Card';
import { useSelector , useDispatch} from 'react-redux';
import { addToCart } from '../../toolkit/slice/cartSlice';
import useAddToCart from '../../hooks/useAddToCart';

const MainItems = () => {
  const { itemData, loading, error } = useGetData();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const minPrice = useSelector((state) => state.filterProducts.minPrice);
  const maxPrice = useSelector((state) => state.filterProducts.maxPrice);

  const {addToCartHandler} = useAddToCart()

  const filteredItems = itemData.filter(pro => pro.price >= minPrice && pro.price <= maxPrice);

  return (
    <div className="mainItems">
      <h1>All Items</h1>
      <div className="mainItems__products">
        {filteredItems.map((pro) => (
          <Card
            key={pro.id}
            title={pro.title}
            price={pro.price}
            images={pro.images}
            data={pro.data}
            pro={pro}
            addToCartHandler={addToCartHandler} 
          />
        ))}
      </div>
    </div>
  );
};

export default MainItems;
