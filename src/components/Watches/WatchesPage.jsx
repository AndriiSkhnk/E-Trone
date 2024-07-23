import React from 'react'
import { SmartwatchesList } from '../../assets/SmartwatchesList'
import './WatchesPage.css'
import { Link } from 'react-router-dom'

export const WatchesPage = () => {
  return (
    <>
        <div className="container">
            <div className="Smartwatches">
                <div className="title">
                  <h1>Smartwatches</h1>
                </div>
                <div className="product-list">
                  {SmartwatchesList.map(product => (
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
            </div>
        </div>
    </>
  )
}
