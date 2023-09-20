import React, { useState } from 'react';
import withLoader from './loader/withLoader';
import './scss/Apply/Apply.scss';

function Acard() {
  const [imageUrl, setImageUrl] = useState('');
  const [text, setText] = useState('');
  const [uploadedData, setUploadedData] = useState(null); // State for uploaded data

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

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleUpload = () => {
    // Create an object to store the uploaded data
    const uploadedDataObj = {
      imageUrl,
      text,
    };

    // Set the uploaded data in state
    setUploadedData(uploadedDataObj);
  };

  return (
    <div>
      <center>
        <div className='Aupload'>
          <div className='Aprofile'></div>
          <h1 className='Atext'>
            <textarea
              className='AtextInput'
              placeholder='Add your text here'
              value={text}
              onChange={handleTextChange}
            ></textarea>
          </h1>
          <div className='Aimage'>
            <label htmlFor='imageUpload'>
              {imageUrl ? (
                <img className='Aimg' src={imageUrl} alt='post' />
              ) : (
                'Upload Image'
              )}
            </label>
            <input
              className='Ainput'
              type='file'
              accept='image/*'
              id='imageUpload'
              onChange={handleImageUpload}
            />
          </div>
          <button onClick={handleUpload} className='Mbutton' style={{marginTop:'15px'}}>Upload</button>
          {uploadedData && (
            <div className='AuploadedData'>
              <h2>Uploaded Data</h2>
              <img src={uploadedData.imageUrl} alt='uploaded' />
              <p>{uploadedData.text}</p>
            </div>
          )}
        </div>
      </center>
    </div>
  );
}

export default withLoader(Acard);
