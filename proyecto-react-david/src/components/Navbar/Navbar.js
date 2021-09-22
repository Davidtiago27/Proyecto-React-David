import React from 'react'
import CartWidget from "./CartWidget"
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
// import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div>
            <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">Libreria Macondo</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#home">Inicio</Nav.Link>
                    <Nav.Link href="#Autores">Autores</Nav.Link>
                    <NavDropdown title="Categorias" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#Ficcion">Ficcion</NavDropdown.Item>
                    <NavDropdown.Item href="#Realismo">Realismo Magico</NavDropdown.Item>
                    <NavDropdown.Item href="#Clasicos">Clasicos</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#Todos">Todos los libros</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                </Navbar.Collapse>
            </Container>
            <CartWidget />
            </Navbar>
            
        </div>
    )
}


export default NavBar