import React, { useState } from 'react';
import axios from 'axios';

const ChangeInfo = ({ productId, initialData, onClose, onUpdate }) => {
  const [formData, setFormData] = useState(initialData);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`http://localhost:3000/data/${productId}`, {
        ...formData,
        category: { name: formData.category }  // Ensure category is correctly formatted
      });
      onUpdate(response.data);  // Update the parent component with the new data
      onClose();
    } catch (error) {
      console.error('Error updating product:', error);
    }
  };

  return (
    <div className='changeInfo'>
      <button className='closeModal' onClick={onClose}>X</button>
      <form onSubmit={handleSubmit}>
        <div className="changeInfo__input">
          <label htmlFor="title">Title</label>
          <input 
            type="text" 
            id="title" 
            name="title" 
            value={formData.title} 
            onChange={handleChange} 
          />
        </div>
        <div className='changeInfo__input'>
          <label htmlFor="price">Price</label>
          <input 
            type="text" 
            id="price" 
            name="price" 
            value={formData.price} 
            onChange={handleChange} 
          />
        </div>
        <div className="changeInfo__input">
          <label htmlFor="category">Category</label>
          <select 
            id="category" 
            name="category" 
            value={formData.category} 
            onChange={handleChange}
          >
            <option value="">Select a category</option>
            <option value="Shoes">Shoes</option>
            <option value="Clothes">Clothes</option>
            <option value="Furniture">Furniture</option>
            <option value="Miscellaneous">Miscellaneous</option>
          </select>
        </div>
        <div className="changeInfo__input">
          <label htmlFor="newArrival">New Arrival</label>
          <input 
            type="checkbox" 
            id="newArrival" 
            name="newArrival" 
            checked={formData.newArrival} 
            onChange={handleChange} 
          />
        </div>
        <div className="changeInfo__input">
          <label htmlFor="extraInput">Extra Input</label>
          <input 
            type="text" 
            id="extraInput" 
            name="extraInput" 
            value={formData.extraInput} 
            onChange={handleChange} 
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ChangeInfo;
