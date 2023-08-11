// import React, { useState } from 'react';
// import { Navbar, Container, InputGroup, FormControl, Button } from 'react-bootstrap';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSearch, faArrowLeft, faStar } from '@fortawesome/free-solid-svg-icons';
// import Darkmode from './DarkMode';
// import { Link } from "react-router-dom";

// export const Header = () => {
//   const [showSearchBar, setShowSearchBar] = useState(false);

//   const toggleSearchBar = () => {
//     setShowSearchBar(!showSearchBar);
//   };

//   return (
//     <header>
//       <Navbar className="navbar navbar-expand navbar-light bg-primary">
//         <Darkmode />
//         <Container>
//           <Navbar.Brand href="#home" className='text-light'>
//             <FontAwesomeIcon icon={faStar} size="lg" />
//           </Navbar.Brand>
//           <Navbar.Toggle />
//           <Navbar.Collapse className="justify-content-end">
//       <Navbar bg="primary" variant="dark" className={`searchBar ${showSearchBar ? 'active' : ''}`}>
//         <Container>
//           <InputGroup>
//             {showSearchBar ? (
//               <>
//                 <FormControl
//                   placeholder="Search..."
//                   aria-label="Search"
//                 />
//                 <Button variant="outline-light">
//                   <FontAwesomeIcon icon={faSearch} />
//                 </Button>
//                 <Button  variant="outline-light" onClick={toggleSearchBar}>
//                   <FontAwesomeIcon icon={faArrowLeft} />
//                 </Button>
//               </>
//             ) : (
//               <Button variant="outline-light" onClick={toggleSearchBar}>
//                 <FontAwesomeIcon icon={faSearch} />
//               </Button>
//             )}
//           </InputGroup>
//         </Container>
//       </Navbar>
//             <Navbar.Text className='text-light'>
//               Signed in as: <a href="#login" className='text-light'>Mark Otto</a>
//             </Navbar.Text>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>
//     </header>
//   )
// }
import React, { useState } from 'react';
import { Navbar, Container, InputGroup, FormControl, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faArrowLeft, faStar } from '@fortawesome/free-solid-svg-icons';
import Darkmode from './DarkMode';
import { Link } from "react-router-dom";
import './scss/header/header.scss';

export const Header = () => {
  const [showSearchBar, setShowSearchBar] = useState(false);

  const toggleSearchBar = () => {
    setShowSearchBar(!showSearchBar);
  };

  return (
    <header>
      <Navbar className="navbar navbar-expand navbar-light bg-primary">
        <Darkmode />
        <Container className="header-container">
          <div className="col-sm">
            <Navbar.Brand href="#home" className='text-light'>
              <FontAwesomeIcon icon={faStar} size="lg" />
              <img src="./image/logo.png" alt="logo" class="logo" />
            </Navbar.Brand>
            <Navbar.Text className='text-light' id='navBar'>
              <Link to="/market" className='text-light'>Market</Link>
            </Navbar.Text>
            <Navbar.Text className='text-light'  id='navBar'>
              <Link to="/apply" className='text-light'>Apply</Link>
            </Navbar.Text>
            <Navbar.Text className='text-light'  id='navBar'>
              <Link to="/scroll" className='text-light'>Scroll</Link>
            </Navbar.Text>
            <Navbar.Text className='text-light'  id='navBar'>
              <Link to="/message" className='text-light'>Message</Link>
            </Navbar.Text>
          </div>
          <div className="right-section">
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
              <Navbar bg="primary" variant="dark" className={`searchBar ${showSearchBar ? 'active' : ''}`}>
                <Container>
                  <InputGroup >
                    {showSearchBar ? (
                      <>
                        <FormControl
                          placeholder="Search..."
                          aria-label="Search"
                        />
                        <Button variant="outline-light">
                          <FontAwesomeIcon icon={faSearch} />
                        </Button>
                        <Button variant="outline-light" onClick={toggleSearchBar}>
                          <FontAwesomeIcon icon={faArrowLeft} />
                        </Button>
                      </>
                    ) : (
                      <Button variant="outline-light" onClick={toggleSearchBar}>
                        <FontAwesomeIcon icon={faSearch} />
                      </Button>
                    )}
                  </InputGroup>
                </Container>
              </Navbar>
            </Navbar.Collapse>
          </div>
          <Button
            class="navbar-toggler text-warning"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarColor01"
            aria-controls="navbarColor01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </Button>
        </Container>
      </Navbar>
    </header>
  );
};
