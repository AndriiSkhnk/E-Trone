import React from 'react'
import './Deals.css'
import { dealsList } from '../../../assets/dealsList'
import { Link } from 'react-router-dom'

export const Deals = () => {
  return (
    <>
        <div className="container">
            <div className="deals">
                <div className="title">
                  <h1>Top Deals</h1>
                </div>
                <div className="product-list">
                  {dealsList.map(product => (
                  <Link to={`/product/deals/${product.id}`}><div key={product.id} className="product">
                      <div className="product-image">
                      <img src={product.image} alt={product.description} />
                      </div>
                      <h2 className='description'>{product.description}</h2>
                      <p className='price'>${product.price}</p>
                      <button className='product-btn'>Add to Cart</button>
                  </div></Link>
                  ))}
                </div>
            </div>
        </div>
    </>
  )
}
