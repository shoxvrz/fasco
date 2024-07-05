import React from 'react';
import { useParams } from 'react-router-dom';
import useGetData from '../hooks/useGetData';

const ProductPage = () => {
  const { proId } = useParams();
  const { itemData } = useGetData();

  const product = itemData.find((pro) => pro.id === +proId);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <h1>{product.title}</h1>
      <img src={product.images[0]} alt={product.title} />
      <p>Price: ${product.price}</p>
      <p>Description: {product.description}</p>
    </div>
  );
};

export default ProductPage;
