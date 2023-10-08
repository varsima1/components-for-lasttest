
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faPlus } from '@fortawesome/free-solid-svg-icons';
// import './scss/Market/market.scss';

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
        import React, { useState, useEffect } from 'react';
        import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
        import { faPlus } from '@fortawesome/free-solid-svg-icons';
        import AddProductModal from './AddProductModal';
        import axios from 'axios';
        
        function Market() {
          const [isSeller, setIsSeller] = useState(false);
          const [isModalOpen, setIsModalOpen] = useState(false);
          const [products, setProducts] = useState([]);
        
          const determineUserRole = async () => {
            try {
              const response = await axios.get('http://localhost:8181/users/current');
              const { isSeller } = response.data;
              console.log('Is Seller:', isSeller); // Log the value of isSeller
              setIsSeller(isSeller);
            } catch (error) {
              console.error(error);
            }
          };
          
        
          useEffect(() => {
            // Fetch products from the API when the component mounts
            const fetchProducts = async () => {
              try {
                const response = await axios.get('http://localhost:8181/products');
                setProducts(response.data);
              } catch (error) {
                console.error(error);
              }
            };
        
            fetchProducts();
            determineUserRole(); // Call the function to determine the user's role when the component mounts
          }, []); // Empty dependency array ensures that the effect runs once after the initial render
        
          const handleProductAdded = (newProduct) => {
            axios.post('http://localhost:8181/products', newProduct)
              .then((response) => {
                setProducts([...products, response.data]);
              })
              .catch((error) => {
                console.error(error);
              });
          };
        
          return (
            <div className="market-container">
              {isSeller && (
                <div className="add-product-button" onClick={() => setIsModalOpen(true)}>
                  <FontAwesomeIcon icon={faPlus} /> Add Product
                </div>
              )}
        
              {products.map((product) => (
                <div key={product.id} className="product-item">
                  <img src={product.imageURL} alt={product.imageALT} />
                  <h3>{product.productName}</h3>
                  <p>{product.description}</p>
                  <p>${product.price}</p>
                </div>
              ))}
        
              {isSeller && (
                <AddProductModal isOpen={isModalOpen} onRequestClose={() => setIsModalOpen(false)} onProductAdded={handleProductAdded} />
              )}
            </div>
          );
        }
        
        export default Market;
        
        