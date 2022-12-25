import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
;

const ResponsiveNav = () => {
  return (
    <>
      {['false'].map((expand) => (
        <Navbar key={expand} bg="none" expand={expand} className="mb-3">
          <Container fluid>
            <Navbar.Brand href="#" className='mobileHeader m-auto' >Room</Navbar.Brand>
            <Navbar.Toggle outlined = "none" aria-controls={`offcanvasNavbar-expand-${expand}`}/>
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="top"
              style = {{width: "75vh"}}
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`} className = "mt-4" style = {{fontSize: "3rem", letterSpacing: '4px', color: 'grey'}}>
                  ROOM
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="*">Home</Nav.Link>
                  <Nav.Link href="*">Shop</Nav.Link>
                  <Nav.Link href="*">About</Nav.Link>
                  <Nav.Link href="*">Contact</Nav.Link>
                  
                </Nav>  
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );}

export default ResponsiveNav;
