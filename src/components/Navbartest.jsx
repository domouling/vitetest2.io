import React from 'react'
import { Nav, NavDropdown, Navbar } from 'react-bootstrap'

import logo from '../assets/img/logo-untanuts-crema_palabra.webp'
import { NavLink } from 'react-router-dom'

export const Navbartest = () => {
  return (
    <>
        <Navbar 
            collapseOnSelect expand="lg" bg="dark" variant="dark"
            className="navbar navbar-scss navbar-expand-xl"
        >
            <div className="container-fluid barra-nav">
                <Navbar.Brand href="/" eventkey="/">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        {/* <NavLink 
                            className={`${({isActive}) => isActive ? 'active' : undefined} nav-link`}
                            to="/home"
                        >
                            Productos
                        </NavLink>
                        <NavLink 
                            className={`${({isActive}) => isActive ? 'active' : undefined} nav-link`}
                            to="/packs"
                        >
                            Packs
                        </NavLink> */}
                        <Nav.Link href="/footer" activeclassname="active" eventKey="/">About</Nav.Link>
                        <Nav.Link href="/count" activeclassname="active" eventKey="/">Count</Nav.Link>

                        <NavDropdown title="Opciones" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    {/* <Nav>
                        <Nav.Link href="#deets">More deets</Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                            Dank memes
                        </Nav.Link>
                    </Nav> */}
                </Navbar.Collapse>
            </div>
        </Navbar>
    </>
  )
}
