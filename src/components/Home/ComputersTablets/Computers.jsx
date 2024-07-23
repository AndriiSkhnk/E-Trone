import React from 'react'
import { ComputersList } from '../../../assets/ComputersList'
import './Computers.css'
import { Link } from 'react-router-dom';

export const Computers = () => {

  const displayedProducts = ComputersList.slice(0, 4);


  return (
    <>
        <div className="container">
            <div className="computers">
                <div className="title">
                  <h1>Computers & Tablets</h1>
                </div>
                <div className="product-list">
                  {displayedProducts.map(product => (
                    <Link to={`/product/Computers/${product.id}`}>
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
                  <Link to="/Computers&Tablets" className='more-btn'>More</Link>
                </div>
            </div>
        </div>
    </>
  )
}
