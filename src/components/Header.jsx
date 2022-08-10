import React from 'react'
import logo from '../assets/img/logo.png'
import user from "../assets/img/icones/user.png"
import shoppingCart from "../assets/img/icones/shopping-cart.png"

export function Header() {
    return (
        <header className='navbar-expand-lg'>
            <div className='navbar flex-column'>

                <div className='top-nav d-flex align-items-center justify-content-center'>
                    <div>

                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <a href="index.css">
                            <img src={logo} className="logo-future" alt="logo Future" width="65" height="65" />
                        </a>

                    </div>
                    <div className='search-bar'>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                    <div className="d-flex">
                        <a href="index.css"><img src={user} alt="user" width="30" height="30" /></a>
                    </div>
                    <div className="d-flex">
                        <a href="index.css"><img src={shoppingCart} alt="cart" width="30" height="30" /></a>
                    </div>
                </div>

                <div className='bottom-nav d-flex justify-content-center'>
                    <div className="menu collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class=" navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="index.css">Produit</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="index.css">Promotions</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="index.css">Contact</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled" href="index.css">Aide</a>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        </header>
    )
}
