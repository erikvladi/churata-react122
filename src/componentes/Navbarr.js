import React from 'react'
import { Container,Nav,Navbar,NavDropdown } from 'react-bootstrap';
import { useState,useEffect } from 'react';
const Navbarr = () => {
  return (
    <div id=''>
    <Navbar expand="lg" className="bg-body-tertiary fixed-top">
      <Container>
        <Navbar.Brand href="App.js"><img src="https://cdn-icons-png.flaticon.com/128/6235/6235196.png" alt="Logo" width="30" height="24" class="d-inline-block align-text-top"/>Costumbres Navidenas</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#creditoo">Creditos</Nav.Link>
            <Nav.Link href="#footer">Footer</Nav.Link>
            <Nav.Link href="#contact">Contactos</Nav.Link>
            <Nav.Link href="#seccion">Secciones</Nav.Link>
            <Nav.Link href="#formularioo">Formulario</Nav.Link>
            <Nav.Link href="#botoness">Botones</Nav.Link>
            
            
            

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Navbarr