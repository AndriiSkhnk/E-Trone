import React from 'react'
import { AudioList } from '../../assets/AudioList'
import './Audio.css'
import { Link } from 'react-router-dom'

export const Audio = () => {
  return (
    <>
       <div className="container">
            <div className="Audio">
                <div className="title">
                  <h1>Audio</h1>
                </div>
                <div className="product-list">
                  {AudioList.map(product => (
                    <Link to={`/product/Audio/${product.id}`}>
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
