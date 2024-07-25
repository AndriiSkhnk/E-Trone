import React from 'react'
import './Footer.css'

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
                                <a href="#">Computers & Tablets</a>
                                <a href="#">Cell Phones</a>
                                <a href="#">Audio</a>
                            </div>
                            <div className="links_column-2">
                                <a href="#">Smartwatches</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="customer-service">
                    <div className="footer-title">Customer Service:</div>
                    <div className="footer-links">
                        <a href="#">Contact Us</a>
                        <a href="#">FAQs</a>
                        <a href="#">Return Policy</a>
                    </div>
                </div>
                <div className="about">
                    <div className="footer-title">About Us:</div>
                    <div className="footer-links">
                        <a href="#">Our Story</a>
                        <a href="#">Privacy Policy</a>
                    </div>
                </div>
                <div className="account">
                    <div className="footer-title">Account:</div>
                    <div className="footer-links">
                        <a href="#">Account Login</a>
                        <a href="#">Create Account</a>
                    </div>
                </div>
                <div className="connect">
                    <div className="footer-title">Connect With Us:</div>
                    <div className="footer-links">
                        <div className="social-links">
                            <a href="#"><img src="/src/images/Footer/facebook.svg" alt="facebook" /></a>
                            <a href="#"><img src="/src/images/Footer/twitter.svg" alt="twitter" /></a>
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
