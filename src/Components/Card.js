import React, { useState } from 'react';
import './scss/card/card.scss';
import withLoader from './loader/withLoader';

function Card({ onCardUpload }) {
  const [imageUrl, setImageUrl] = useState('');
  const [itemName, setItemName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImageUrl(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUpload = () => {
    const card = {
      imageUrl,
      itemName,
      description,
      price,
    };

    if (typeof onCardUpload === 'function') {
      onCardUpload(card);
    }

  };

  return (
    <div className="Mcenter-container">
      <div className='Mcard'>
        <div className='Mimage'>
          <label htmlFor='imageUpload'>
            {imageUrl ? (
              <img src={imageUrl} alt='Product' />
            ) : (
              'Upload Image'
            )}
          </label>
          <input
            type='file'
            accept='image/*'
            id='imageUpload'
            className='Mhidden'
            onChange={handleImageUpload}
          />
        </div>
        <div className='MitemName'>
          <input
            type='text'
            placeholder='Item Name'
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
          />
        </div>
        <div className='Mdescription'>
        <textarea
    placeholder='Description'
    value={description}
    onChange={(e) => setDescription(e.target.value)}
  />
        </div>
        <div className='Mprice'>
          <input
            type='number'
            placeholder='Price'
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            step='0.01'
            style={{backgroundColor:'transparent',color:'#ccc'}}
            />
          <span className='Mcurrency'>$</span>
        </div>
        <button className='Mbutton' onClick={handleUpload}>
          Upload
        </button>
      </div>
    </div>
  );
}

export default withLoader(Card);
