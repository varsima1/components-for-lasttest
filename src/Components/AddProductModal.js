import React, { useState } from 'react';
import Modal from 'react-modal';
import axios from 'axios';

Modal.setAppElement('#root');

function AddProductModal({ isOpen, onRequestClose, onProductAdded }) {
  const [productInfo, setProductInfo] = useState({
    imageURL: '',
    imageALT: '',
    productName: '',
    description: '',
    price: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProductInfo({ ...productInfo, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send a POST request to your API endpoint to add the product
      await axios.post('http://localhost:8181/products', productInfo);

      // Clear the form and close the modal
      setProductInfo({
        imageURL: '',
        imageALT: '',
        productName: '',
        description: '',
        price: '',
      });

      // Notify the parent component that a new product has been added
      onProductAdded();
      onRequestClose();
    } catch (error) {
      // Handle errors (show error message to the user, etc.)
      console.error(error);
    }
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
      <h2>Add Product</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="imageURL" placeholder="Image URL" value={productInfo.imageURL} onChange={handleInputChange} required />
        <input type="text" name="imageALT" placeholder="Image ALT Text" value={productInfo.imageALT} onChange={handleInputChange} required />
        <input type="text" name="productName" placeholder="Product Name" value={productInfo.productName} onChange={handleInputChange} required />
        <textarea name="description" placeholder="Description" value={productInfo.description} onChange={handleInputChange} required />
        <input type="number" name="price" placeholder="Price (USD)" value={productInfo.price} onChange={handleInputChange} required />
        <button type="submit">Add Product</button>
      </form>
    </Modal>
  );
}

export default AddProductModal;


