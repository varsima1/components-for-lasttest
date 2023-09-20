
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import './scss/Market/market.scss';
import withLoader from './loader/withLoader'

function Apply() {
  const [uploadedCards, setUploadedCards] = useState([]);

  const handleCardUpload = (cardData) => {
    setUploadedCards([...uploadedCards, cardData]);
  };

  return (
    <div>
      <div className="MarketContainer">
        <Link to='/Acard' className='MaddCard'>
          <FontAwesomeIcon icon={faPlus} />
        </Link>
        <ul>
          {uploadedCards.map((card, index) => (
            <li key={index}>
              <p>Item Name: {card.itemName}</p>
              <p>Description: {card.description}</p>
              <p>Price: {card.price}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default withLoader(Apply);

