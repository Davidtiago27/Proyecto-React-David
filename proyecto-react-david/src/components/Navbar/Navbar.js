import React from 'react'
import CartWidget from "./CartWidget"
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { Link } from 'react-router-dom';
import { useContext } from 'react'
import { cartContext } from '../../Context/cartContext'
import { Row } from 'react-bootstrap'

const NavBar = () => {

    const {countCart} = useContext(cartContext)

    return (
        <div>
            <Navbar bg="light" expand="lg">
            <Container>
                <Link exact to = "/">
                    <Navbar.Brand id='logo' >Libreria Macondo</Navbar.Brand>
                </Link>
                
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto" >
                    <Nav.Link href="#Autores">Autores</Nav.Link>
                    <NavDropdown title="Categorias" id="basic-nav-dropdown">
                    <Container fluid>
                        <Row>
                            <Link exact to = '/categoria/ficcion' id='menu'>
                                Ficcion
                            </Link>
                            
                            <Link exact to = '/categoria/realismo' id='menu'>
                                Realismo Magico
                            </Link>
                            
                            <Link exact to = '/categoria/clasicos' id='menu'>
                                Clasicos
                            </Link>
                        

                            <NavDropdown.Divider />

                            <Link exact to = "" id='menu'>
                                Todos los libros
                            </Link>
                        </Row>
                    </Container>
                    </NavDropdown>
                </Nav>
                </Navbar.Collapse>
            </Container>
            <div>
                
            <Link exact to = "/cart">
                {countCart()}
                <CartWidget />
            </Link>
            </div>
            
            </Navbar>
            
        </div>
    )
}


export default NavBar