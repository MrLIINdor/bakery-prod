import React , { Component } from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap'
import { NavLink } from "react-router-dom"
import logo from '../../images/logo.svg'
import './Heders.css'



class Heder extends Component {
    render() {
        return (
            <Navbar className="Nav" expand="lg" sticky="top">
                <Container fluid="xxl">
                    <Navbar.Brand>
                        <NavLink className="Link" to='/'>
                            <img className="Logo" src={logo} alt=''/>
                        </NavLink>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll"/>
                    <Navbar.Collapse id="navbarScroll">
                        <Nav className="me-auto my-2 my-lg-0">
                        </Nav>
                        <Nav className="d-flex">
                            <Nav.Link as={NavLink} className="Link me-3" to='/'> Главное </Nav.Link>


                            <Nav.Link as={NavLink} className="Link me-3" to='/about'> О нас </Nav.Link>


                            <Nav.Link as={NavLink} className="Link" to='/contact'> Контакты </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        )
    }
}

export default Heder

