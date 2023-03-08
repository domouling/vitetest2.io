import React, { useState } from 'react'

import logo from '../assets/img/logo-untanuts-crema_palabra.webp'
import { NavLink } from 'react-router-dom'

import Navbar from 'react-bootstrap/Navbar'

export const Navmenubar = () => {

    /* const [ dropmenu, setDropmenu ] = useState(false) */

    return (
        <Navbar
            className="navbar navbar-scss navbar-expand-xl"
        >
            <div
                className="container-fluid barra-nav"
            >
                <NavLink className="navbar-brand" to={"/"}>
                    <img 
                        src={ logo } 
                        alt="Logo" 
                        width="100px" 
                    />
                </NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink 
                                className={`${({isActive}) => isActive ? 'active' : undefined} nav-link`}
                                to="/item"
                            >
                                Productos
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink 
                                className={`${({isActive}) => isActive ? 'active' : undefined} nav-link`}
                                to="/packs"
                            >
                                Packs
                            </NavLink>
                        </li>
                        <li className="nav-item dropdown">
                            <NavLink
                                className={`${({isActive}) => isActive ? 'active' : ''} nav-link dropdown-toggle`} 
                                id='navbarDropdown'
                                role="button" 
                                data-bs-toggle="dropdown" 
                                aria-expanded="false"
                                aria-haspopup="true"
                                to='/options'
                            >
                                Opciones
                            </NavLink>

                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <NavLink 
                                    className={`${({isActive}) => isActive ? 'active' : undefined} nav-link dropdown-item`}
                                    to="/options/faqs"
                                >
                                    Preguntas Frecuentes
                                </NavLink>
                                <NavLink 
                                    className={`${({isActive}) => isActive ? 'active' : undefined} nav-link dropdown-item`}
                                    to="/options/recipet"
                                >
                                    Recetas
                                </NavLink>

                                <NavLink 
                                    className={`${({isActive}) => isActive ? 'active' : undefined} nav-link dropdown-item`}
                                    to="/options/contact"
                                >
                                    Contacto
                                </NavLink>
                            </div>
                        </li>
                    </ul>

                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="" aria-label="Search"/>
                        <button className="btn btn-outline-success btn-scss" type="submit">Buscar</button>
                    </form>
                </div>
            </div>
        </Navbar>
    )
}
