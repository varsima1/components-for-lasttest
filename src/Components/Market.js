
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faPlus } from '@fortawesome/free-solid-svg-icons';
// import './scss/Market/market.scss';
import withLoader from './loader/withLoader'

// function Market() {
//   const [uploadedCards, setUploadedCards] = useState([]);

//   const handleCardUpload = (cardData) => {
//     setUploadedCards([...uploadedCards, cardData]);
//   };

//   return (
//     <div>
//       <div className="MarketContainer">
//         <Link to='/card' className='MaddCard'>
//           <FontAwesomeIcon icon={faPlus} />
//         </Link>
//         <ul>
//           {uploadedCards.map((card, index) => (
//             <li key={index}>
//               <p>Item Name: {card.itemName}</p>
//               <p>Description: {card.description}</p>
//               <p>Price: {card.price}</p>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }

// export default withLoader(Market);
// src/components/Market.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

function Market() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    async function fetchCards() {
      try {
        const response = await axios.get('/api/cards');
        setCards(response.data);
      } catch (error) {
        console.error('Error:', error);
      }
    }
    fetchCards();
  }, []);

  return (
    <div>
      <Link to='/card' className='MaddCard'>
          <FontAwesomeIcon icon={faPlus}/>
        </Link>
      <div className="card-container">
        {cards.map((card, index) => (
          <div className="card" key={index}>
            <img src={card.pictureUrl} alt={card.itemName} />
            <h3>{card.itemName}</h3>
            <p>{card.description}</p>
            <p>Price: ${card.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default withLoader(Market);

