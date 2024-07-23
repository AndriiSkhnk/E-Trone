import React from 'react'
import './CarElectronics.css'
import { CarElectronicsList } from '../../assets/CarElectronicsList'
import { Link } from 'react-router-dom'

export const CarElectronics = () => {
  return (
    <>
        <div className="container">
            <div className="CarElectronics">
                <div className="title">
                  <h1>Car Electronics</h1>
                </div>
                <div className="product-list">
                  {CarElectronicsList.map(product => (
                    <Link to={`/product/CarElectronics/${product.id}`}>
                      <div key={product.id} className="product">
                          <div className="product-image">
                          <img src={product.image} alt={product.description} />
                          </div>
                          <h2 className='description'>{product.description}</h2>
                          <p className='price'>${product.price}</p>
                          <a href="#"><button className='product-btn'>Add to Cart</button></a>
                      </div>
                  </Link>))}
                </div>
            </div>
        </div>
    </>
  )
}
