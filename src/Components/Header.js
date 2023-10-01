
// import React, { useState, useEffect, } from 'react';
// import { Navbar, Container, Nav, Form, FormControl, Button, InputGroup } from 'react-bootstrap'; // Import InputGroup
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { Link } from 'react-router-dom';
// import { faBars, faSearch } from '@fortawesome/free-solid-svg-icons';
// import './scss/header/header.scss';
// import DarkMode from './DarkMode'


// function Header() {
  //   const [isMobile, setIsMobile] = useState(window.innerWidth <= 1000);
  //   const [showMobileMenu, setShowMobileMenu] = useState(false);
  //   const [isSearchActive, setIsSearchActive] = useState(false);
  
  //   const toggleMobileMenu = () => {
    //     setShowMobileMenu(!showMobileMenu);
    //   };

//   const toggleSearchBar = () => {
//     setIsSearchActive(!isSearchActive);
//   };

//   const handleResize = () => {
//     setIsMobile(window.innerWidth <= 1000);
//   };

//   useEffect(() => {
//     window.addEventListener('resize', handleResize);
//     return () => {
//       window.removeEventListener('resize', handleResize);
//     };
//   }, []);
  

//   return (
//     <header>
//       <Navbar expand="lg" bg="primary" variant="dark">
//         <Container>
//           <Navbar.Brand as={Link} to="/" className='Logo'><h1 className='logo'></h1></Navbar.Brand>
//         <DarkMode/>
//           {isMobile ? (
//             <Navbar.Toggle
//               onClick={toggleMobileMenu}
//               aria-controls="responsive-navbar-nav"
//             >
//               <FontAwesomeIcon icon={faBars} />
//             </Navbar.Toggle>
//           ) : null}
//           <Navbar.Collapse id="responsive-navbar-nav">
//             <Nav className={`mr-auto ${isMobile && showMobileMenu ? 'mobile-menu' : ''}`}>
//               <Nav.Link as={Link} to="/">About</Nav.Link>
//               <Nav.Link as={Link} to="/market">Market</Nav.Link>
//               <Nav.Link as={Link} to="/apply">Apply</Nav.Link>
//               <Nav.Link as={Link} to="/scroll">Scroll</Nav.Link>
//               <Nav.Link as={Link} to="/message">Message</Nav.Link>
//             </Nav>
//       </Navbar.Collapse>

//           <div className="search-bar">
//       <button className="search-icon" onClick={toggleSearchBar}>
//         <FontAwesomeIcon icon={faSearch} style={{height:'20px'}}/>
//       </button>
//       {isSearchActive && (
//         <input
//         type="text"
//         className="search-input"
//         placeholder="Search..."
//         />
//         )}
//     </div>
//     <Navbar.Collapse id="responsive-navbar-nav">
//     <Nav className={`mr-auto ${isMobile && showMobileMenu ? 'mobile-menu' : ''}`}>
//         <Link className='HLogin' to="/login">Login</Link>
//         <Link className='HSignup' to="/signup">Signup</Link>
//         </Nav>
//         </Navbar.Collapse>
//         </Container>
//       </Navbar>
//     </header>
//   );
// }

// export default Header;

// ///////////////////////////////////////////////////////////
import React, { useState,useEffect } from 'react';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { faBars, faSearch } from '@fortawesome/free-solid-svg-icons';
import './scss/header/header.scss';
import DarkMode from './DarkMode';

function Header() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1000);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  const toggleSearchBar = () => {
    setIsSearchActive(!isSearchActive);
  };

  const toggleUserMenu = () => {
    setIsUserMenuOpen(!isUserMenuOpen);
  };

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 1000);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <header>
      <Navbar expand="lg" bg="primary" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/" className='Logo'><h1 className='logo'></h1></Navbar.Brand>
          <DarkMode/>
          {isMobile ? (
            <Navbar.Toggle
              onClick={toggleMobileMenu}
              aria-controls="responsive-navbar-nav"
            >
              <FontAwesomeIcon icon={faBars} />
            </Navbar.Toggle>
          ) : null}
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className={`mr-auto ${isMobile && showMobileMenu ? 'mobile-menu' : ''}`}>
              <Nav.Link as={Link} to="/">About</Nav.Link>
              <Nav.Link as={Link} to="/market">Market</Nav.Link>
              <Nav.Link as={Link} to="/apply">Apply</Nav.Link>
              <Nav.Link as={Link} to="/scroll">Scroll</Nav.Link>
              <Nav.Link as={Link} to="/message">Message</Nav.Link>
            </Nav>
          </Navbar.Collapse>

          <div className="search-bar">
            <button className="search-icon" onClick={toggleSearchBar}>
              <FontAwesomeIcon icon={faSearch} style={{height:'20px'}}/>
            </button>
            {isSearchActive && (
              <input
                type="text"
                className="search-input"
                placeholder="Search..."
              />
            )}
          </div>
          <Nav className={`mr-auto ${isMobile && showMobileMenu ? 'mobile-menu' : ''}`}>
            <Link to="/login" className='HLogin' onClick={toggleUserMenu}>Login</Link>
            {isUserMenuOpen && (
              <div className="user-dropdown">
                <ul>
                  <li>Profile</li>
                  <li>Account</li>
                  <li>Dashboard</li>
                  <li>Logout</li>
                </ul>
              </div>
            )}
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;

// ///////////////////////////////////////////////////////////
