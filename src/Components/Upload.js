import React, { useState } from 'react'
import './scss/Upload/Upload.scss'

export default function Upload() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setSelectedImage(file);
  };

  const handleUpload = () => {
    if (selectedImage) {
      // Perform upload logic here
      console.log('Uploading image:', selectedImage.name);
      // Reset the selected image
      setSelectedImage(null);
    }
  };

  return (
    <div className='upload'>
      <h3>You can upload images</h3>
      <input type="file" accept="image/*" onChange={handleImageChange} />
      <button onClick={handleUpload}>Upload Image</button>
    </div>
  );
}

// // need backend to upload image
