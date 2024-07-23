import React from 'react'
import './Smartwatches.css'
import { SmartwatchesList } from '../../../assets/SmartwatchesList'
import { Link } from 'react-router-dom'

export const Smartwatches = () => {

  const displayedProducts = SmartwatchesList.slice(0, 4);

  return (
    <>
        <div className="container">
            <div className="smartwatches">
                <div className="title">
                  <h1>Smartwatches</h1>
                </div>
                <div className="product-list">
                  {displayedProducts.map(product => (
                    <Link to={`/product/Smartwatches/${product.id}`}>
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
                <div className="list-button">
                  <Link to="/Smartwatches"><button className='more-btn'>More</button></Link>
                </div>
            </div>
        </div>
    </>
  )
}
