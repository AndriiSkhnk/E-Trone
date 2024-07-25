import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <header>
        <div className="container">
            <div className="header-content">
                <div className="header__logo">
                    <h1><Link className='logoLink' to="/E-Trone/">E-Tron</Link></h1>
                </div>
                <div className="header__search">
                    <input type="text" placeholder='What can we help you find today?' />
                    <div className="header__search-button">
                        <button className='search-button'>
                            <img src="./images/Header/search-btn.svg" alt="search-btn" />
                        </button>
                    </div>
                </div>
                <div className="header__btns">
                    <div className="cart">
                        <a href="#"><img src="./images/Header/cart-icon.svg" alt="cart" /></a>
                    </div>
                    <div className="account">
                        <a href="#"><img src="./images/Header/acc-icon.svg" alt="account" /></a>
                    </div>
                </div>
            </div>
        </div>
    </header>
  )
}
