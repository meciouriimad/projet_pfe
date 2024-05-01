import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useLocation } from 'react-router-dom'; 
import './Navigationbar.css';
import NavDropdown from 'react-bootstrap/NavDropdown';
import download from './icons/download.svg';

function NavigationbarAdmin() {
  
  const location = useLocation(); 
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const fixedPages = ['/', '', '']; 
  const handleMouseEnter = () => {
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setDropdownOpen(false);
  };
  
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
              <Nav.Link href="/ListeOuvrage">Ouvrage</Nav.Link>
              <Nav.Link href="/ListeNorme">Fonds Normes</Nav.Link>
              <Nav.Link href="/FormConsultOuv">Consultation</Nav.Link>
              <Nav.Link href="/">Demande</Nav.Link>
    
              <NavDropdown 
                title="gestion des lecteurs" 
                id="basic-nav-dropdown"  
                show={dropdownOpen} 
                onMouseEnter={handleMouseEnter} 
                onMouseLeave={handleMouseLeave}>

                <NavDropdown.Item href="/FormStagiaire">Stagière</NavDropdown.Item>
                <NavDropdown.Item href="/FormDemandeNor">Lecteur</NavDropdown.Item>

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

export default NavigationbarAdmin;