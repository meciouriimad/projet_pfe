// import React, {useState} from 'react'
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import './Navigationbar.css'; // Importer le fichier CSS séparé 
// import  NavDropdown  from 'react-bootstrap/NavDropdown';
// import download from './icons/download.svg';


// function Navigationbar() {

//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const handleMouseEnter = () => {
//     setDropdownOpen(true);
//   };
//   const handleMouseLeave = () => {
//     setDropdownOpen(false);
//   };

//   return (
//     <div className='navBAr'>
//       <Navbar variant='dark' bg='dark' expand="lg" sticky='top'>
//         <Container>
//           <Navbar.Brand href="/" className="brand">
//             <div>
//               <span>BIBLIOTHEQUE</span>
//               <small className="brand-subtitle">LABORATOIRE-IAP-RECHERCHE</small>
//             </div>
//           </Navbar.Brand>

//           <Navbar.Toggle aria-controls="basic-navbar-nav" />
//           <Navbar.Collapse className='icons' style={{ justifyContent: 'center' }}>
//             <Nav className="me-auto nav-links">
//               <Nav.Link href="/">Home</Nav.Link>
//               <Nav.Link href="/FormNorme">Ouvrage</Nav.Link>
//               <Nav.Link href="/FormOuvrage">Fonds Normes</Nav.Link>
    
//               <NavDropdown 
//                 title="Demande" 
//                 id="basic-nav-dropdown"  
//                 show={dropdownOpen} 
//                 onMouseEnter={handleMouseEnter} 
//                 onMouseLeave={handleMouseLeave}>

//                 <NavDropdown.Item href="/FormDemandeOuv">Demande pret ouvrages</NavDropdown.Item>
//                 <NavDropdown.Item href="/FormDemandeNor">Demande distibution norme</NavDropdown.Item>

//               </NavDropdown>
//             </Nav>
//             <Nav className="social-icons nav-links">
//              <Nav.Link href='/Login'><img src={download} alt='git'/></Nav.Link> 
//             </Nav>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>
//     </div>
//   )
// }

// export default Navigationbar;

import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useLocation } from 'react-router-dom'; 
import './Navigationbar.css';
import NavDropdown from 'react-bootstrap/NavDropdown';
import download from './icons/download.svg';

function Navigationbar() {
  const location = useLocation(); 
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleMouseEnter = () => {
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setDropdownOpen(false);
  };


  const fixedPages = ['/', '', '']; 

  
  const isFixedPage = fixedPages.includes(location.pathname);

  return (
    <div className={`navBAr ${isFixedPage ? 'navbar-fixed' : ''}`}>
      <Navbar variant='dark' bg='dark' expand="lg" sticky='top'>
        <Container>
          <Navbar.Brand href="/" className="brand">
            <div>
              <span>BIBLIOTHEQUE</span>
              <small className="brand-subtitle">LABORATOIRE-IAP-RECHERCHE</small>
            </div>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className='icons' style={{ justifyContent: 'center' }}>
            <Nav className="me-auto nav-links">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/FormOuvrage">Ouvrage</Nav.Link>
              <Nav.Link href="/ListeOuvrage">Fonds Normes</Nav.Link>
    
              <NavDropdown 
                title="Demande" 
                id="basic-nav-dropdown"  
                show={dropdownOpen} 
                onMouseEnter={handleMouseEnter} 
                onMouseLeave={handleMouseLeave}>

                <NavDropdown.Item href="/FormDemandeOuv">Demande pret ouvrages</NavDropdown.Item>
                <NavDropdown.Item href="/FormDemandeNor">Demande distibution norme</NavDropdown.Item>

              </NavDropdown>
            </Nav>
            <Nav className="social-icons nav-links">
             <Nav.Link href='/Login'><img src={download} alt='git'/></Nav.Link> 
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navigationbar;

