import React, { useState } from "react";
import useGetData from "../hooks/useGetData";
import AddProduct from "../components/AddProduct/AddProduct";
import ChangeInfo from "../components/ChangeInfo/ChangeInfo";
import axios from "axios";
import "./style/PagesStyle.scss";

const ProductsDataPage = () => {
  const { setItemData, itemData } = useGetData();
  const [productToggle, setProductToggle] = useState(false);
  const [changeInfo, setChangeInfo] = useState({ visible: false, productId: null, initialData: {} });

  const toggleHandler = () => {
    setProductToggle(prev => !prev);
  };

  const toggleChangeInfo = (product) => {
    setChangeInfo({
      visible: !changeInfo.visible,
      productId: product.id,
      initialData: {
        title: product.title,
        price: product.price,
        category: product.category.name,  // Ensure category name is passed as a string
        newArrival: product.newArrival,
        extraInput: product.extraInput || ''
      }
    });
  };

  const closeChangeInfo = () => {
    setChangeInfo({ visible: false, productId: null, initialData: {} });
  };

  const deleteProduct = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/data/${id}`);
      setItemData(prevItems => prevItems.filter(pro => pro.id !== id));
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  const addProductHandler = (newProduct) => {
    setItemData(prevItems => [...prevItems, newProduct]);
    setProductToggle(false); 
  };

  const updateProductHandler = (updatedProduct) => {
    setItemData(prevItems => prevItems.map(item => 
      item.id === updatedProduct.id ? updatedProduct : item
    ));
  };

  return (
    <div className="productsData">
      {changeInfo.visible && (
        <ChangeInfo
          productId={changeInfo.productId}
          initialData={changeInfo.initialData}
          onClose={closeChangeInfo}
          onUpdate={updateProductHandler}  // Pass the update handler to ChangeInfo
        />
      )}
      {productToggle && (
        <AddProduct setProductToggle={setProductToggle} onAddProduct={addProductHandler} />
      )}
      <div className="productsData__top">
        <h1 className="productsData__title">Products in the store</h1>
        <button onClick={toggleHandler}>Add Product</button>
      </div>
      <div className="productsData__productsDiv">
        {itemData &&
          itemData.map((product, i) => (
            <div key={i} className="productsData__productsDiv--productCard">
              <div className="productsData__productsDiv--productCard--image">
                <img src={product.images[0]} alt="" />
              </div>
              <div className="productsData__productsDiv--productCard--info">
                <p>Category: {product.category.name}</p> {/* Access category name */}
                <p>Name: {product.title}</p>
                <p>Price: ${product.price}</p>
              </div>
              <div className="productsData__productsDiv--productCard--buttons">
                <button onClick={() => deleteProduct(product.id)}>Delete</button>
                <button onClick={() => toggleChangeInfo(product)}>Change Info</button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ProductsDataPage;
