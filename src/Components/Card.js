// import React, { useState } from 'react';
// import withLoader from './loader/withLoader';
// import './scss/card/card.scss';

// function Card({ onCardUpload }) {
  //   const [imageUrl, setImageUrl] = useState('');
  //   const [itemName, setItemName] = useState('');
  //   const [description, setDescription] = useState('');
  //   const [price, setPrice] = useState('');
  
  //   const handleImageUpload = (event) => {
    //     const file = event.target.files[0];
    //     if (file) {
      //       const reader = new FileReader();
      //       reader.onload = (e) => {
        //         setImageUrl(e.target.result);
        //       };
        //       reader.readAsDataURL(file);
        //     }
        //   };
        
        //   const handleUpload = () => {
          //     const card = {
            //       imageUrl,
            //       itemName,
            //       description,
            //       price,
            //     };
            
            //     if (typeof onCardUpload === 'function') {
              //       onCardUpload(card);
              //     }
              
              //   };
              
              //   return (
                //     <div className="Mcenter-container">
                //       <div className='Mcard'>
                //         <div className='Mimage'>
                //           <label htmlFor='imageUpload'>
                //             {imageUrl ? (
                  //               <img src={imageUrl} alt='Product' />
                  //             ) : (
                    //               'Upload Image'
                    //             )}
                    //           </label>
                    //           <input
                    //             type='file'
                    //             accept='image/*'
                    //             id='imageUpload'
                    //             className='Mhidden'
                    //             onChange={handleImageUpload}
                    //           />
                    //         </div>
                    //         <div className='MitemName'>
//           <input
//             type='text'
//             placeholder='Item Name'
//             value={itemName}
//             onChange={(e) => setItemName(e.target.value)}
//           />
//         </div>
//         <div className='Mdescription'>
//         <textarea
//     placeholder='Description'
//     value={description}
//     onChange={(e) => setDescription(e.target.value)}
//   />
//         </div>
//         <div className='Mprice'>
//           <input
//             type='number'
//             placeholder='Price'
//             value={price}
//             onChange={(e) => setPrice(e.target.value)}
//             step='0.01'
//             style={{backgroundColor:'transparent',color:'#ccc'}}
//             />
//           <span className='Mcurrency'>$</span>
//         </div>
//         <button className='Mbutton' onClick={handleUpload}>
//           Upload
//         </button>
//       </div>
//     </div>
//   );
// }

// export default withLoader(Card);
// src/components/CardForm.js
import React, { useState } from 'react';
import axios from 'axios';
import withLoader from './loader/withLoader';
import './scss/card/card.scss';


function Card({ onCardUpload }) {
  const [cardData, setCardData] = useState({
    pictureUrl: '',
    itemName: '',
    description: '',
    price: '',
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCardData({ ...cardData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/cards', cardData);
      setCardData({
        pictureUrl: '',
        itemName: '',
        description: '',
        price: '',
      });
      onCardUpload();
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className='Mcenter-container'>
    <div className='Mcard'>
      <form onSubmit={handleSubmit}>
          <input
          placeholder='Picture URL:'
          className='Mimage'
            type="text"
            name="pictureUrl"
            value={cardData.pictureUrl}
            onChange={handleChange}
          />
        <input
          placeholder='item Name'
            type="text"
            name="itemName"
            className='MitemName'
            value={cardData.itemName}
            onChange={handleChange}
          />
          <textarea
          placeholder='Description'
            name="description"
            className='Mdescription'
            value={cardData.description}
            onChange={handleChange}
          />
          <input
            placeholder='price'
            type="number"
            name="price"
            className="Mprice"
            value={cardData.price}
            onChange={handleChange}
          />
          <center>
        <button type="submit" className='Mbutton'>Upload</button>
        </center>
      </form>
    </div>
    </div>
  );
}

export default withLoader(Card);

