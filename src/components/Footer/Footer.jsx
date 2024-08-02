import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

export const Footer = () => {
  return (
    <footer>
        <div className="container">
            <div className="footer-info">
                <div className="quick-links">
                    <div className="footer-title">Quick Links:</div>
                    <div className="footer-links">
                        <div className="link-columns">
                            <div className="links_column-1">
                                <Link to={'/Computers&Tablets'}>Computers & Tablets</Link>
                                <Link to={'/CellPhones'}>Cell Phones</Link>
                                <Link to={'/Audio'}>Audio</Link>
                            </div>
                            <div className="links_column-2">
                                <Link to={'/Smartwatches'}>Smartwatches</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="customer-service">
                    <div className="footer-title">Customer Service:</div>
                    <div className="footer-links">
                        <Link to={'/Contact'}>Contact Us</Link>
                        <Link to={'/FAQs'}>FAQs</Link>
                        <Link to={'/Return'}>Return Policy</Link>
                    </div>
                </div>
                <div className="about">
                    <div className="footer-title">About Us:</div>
                    <div className="footer-links">
                        <Link to={'/Story'}>Our Story</Link>
                        <Link to={'/Privacy'}>Privacy Policy</Link>
                    </div>
                </div>
                <div className="account">
                    <div className="footer-title">Account:</div>
                    <div className="footer-links">
                        <Link to={'/Login'}>Account Login</Link>
                        <Link to={'/Create'}>Create Account</Link>
                    </div>
                </div>
                <div className="connect">
                    <div className="footer-title">Connect With Us:</div>
                    <div className="footer-links">
                        <div className="social-links">
                            <a href="#"><img src="./images/Footer/facebook.svg" alt="facebook" /></a>
                            <a href="#"><img src="./images/Footer/twitter.svg" alt="twitter" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='footer-rights'>
                <div className="h-line"></div>
                <p>© 2024 E-Trone. All rights reserved.</p>
        </div>
    </footer>
  )
}
