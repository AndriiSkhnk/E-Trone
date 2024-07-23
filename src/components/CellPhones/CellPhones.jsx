import React from 'react'
import './CellPhones.css'
import { CellPhonesList } from '../../assets/CellPhonesList'
import { Link } from 'react-router-dom'




export const CellPhones = () => {
  return (
    <>
        <div className="container">
            <div className="CellPhones">
                <div className="title">
                  <h1>Cell Phones</h1>
                </div>
                <div className="product-list">
                  {CellPhonesList.map(product => (
                    <Link to={`/product/CellPhones/${product.id}`}>
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
