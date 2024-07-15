import React, { useState } from "react";
import axios from "axios";
import './AddProduct.scss';

const AddProduct = ({ setProductToggle, onAddProduct }) => {
  const [productInfo, setProductInfo] = useState({
    title: "",
    price: "",
    description: "",
    images: [],
    creationAt: "",
    category: "",
    newArrival: false,
  });
  const close = () => {
    setProductToggle(false);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setProductInfo({
      ...productInfo,
      [name]: type === "checkbox" ? checked : value,
    });
  };
  const handleImageChange = (e) => {
    setProductInfo({
      ...productInfo,
      images: Array.from(e.target.files),
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("title", productInfo.title);
      formData.append("price", productInfo.price);
      formData.append("description", productInfo.description);
      productInfo.images.forEach((image, index) => {
        formData.append(`images[${index}]`, image);
      });
      formData.append("creationAt", productInfo.creationAt);
      formData.append("category", productInfo.category);
      formData.append("newArrival", productInfo.newArrival);
  
      const response = await axios.post("http://localhost:3000/data", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(response.data);
      alert("Product added successfully!");
      onAddProduct(response.data);
      setProductToggle(false);
    } catch (error) {
      console.error("Error adding product:", error);
      alert("Error adding product. Please check your inputs.");
    }
  };
  

  return (
    <div className="addProduct">
      <button onClick={close}>X</button>
      <div className="addProduct__title">
        <h1>Fill the inputs</h1>
      </div>
      <form className="addProduct__inputs" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Name</label>
          <input type="text" id="title" name="title" value={productInfo.title} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="price">Price</label>
          <input type="number" id="price" name="price" value={productInfo.price} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <textarea id="description" name="description" value={productInfo.description} onChange={handleChange}></textarea>
        </div>
        <div>
          <label htmlFor="images">Images</label>
          <input type="file" id="images" name="images" multiple onChange={handleImageChange} />
        </div>
        <div>
          <label htmlFor="creationAt">Created At</label>
          <input type="datetime-local" id="creationAt" name="creationAt" value={productInfo.creationAt} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="category">Category</label>
          <select id="category" name="category" value={productInfo.category} onChange={handleChange}>
            <option value="">Select a category</option>
            <option value="Shoes">Shoes</option>
            <option value="Clothes">Clothes</option>
            <option value="Furniture">Furniture</option>
            <option value="Miscellaneous">Miscellaneous</option>
          </select>
        </div>
        <div>
          <label>
            <input type="checkbox" name="newArrival" checked={productInfo.newArrival} onChange={handleChange} />
            New Arrival
          </label>
        </div>
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default AddProduct;
