import React from 'react'
import './Navigation.css'
import { Link } from 'react-router-dom'

export const Navigation = () => {
  return (
    <nav>
        <div className="container">
            <ul className='navigation'>
                <li><Link to="/Computers&Tablets">Computers & Tablets</Link></li>
                <li><Link to="/CellPhones">Cell Phones</Link></li>
                <li><Link to="/Audio">Audio</Link></li>
                <li><Link to="/CarElectronics">Car Electronics</Link></li>
                <li><Link to="/Smartwatches">Smartwatches</Link></li>
            </ul>
        </div>
    </nav>
  )
}
