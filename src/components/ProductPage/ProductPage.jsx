// ProductPage.js
import React from 'react';
import { Link, useParams } from 'react-router-dom'; 
import { dealsList } from '../../assets/dealsList';
import { AudioList } from '../../assets/AudioList';
import { CarElectronicsList } from '../../assets/CarElectronicsList'; 
import { CellPhonesList } from '../../assets/CellPhonesList';
import { ComputersList } from '../../assets/ComputersList';
import { SmartwatchesList } from '../../assets/SmartwatchesList';
import './ProductPage.css'




export const ProductPage = () => {

    const { source, id } = useParams();

  let product;
  switch (source) {
    case 'deals':
      product = dealsList.find(product => product.id === parseInt(id));
      break;
    case 'Audio':
      product = AudioList.find(product => product.id === parseInt(id));
      break;
    case 'CarElectronics':
      product = CarElectronicsList.find(product => product.id === parseInt(id));
      break;
    case 'CellPhones':
      product = CellPhonesList.find(product => product.id === parseInt(id));
      break;
    case 'Computers':
      product = ComputersList.find(product => product.id === parseInt(id));
      break;
    case 'Smartwatches':
      product = SmartwatchesList.find(product => product.id === parseInt(id));
      break;
    default:
      product = null; 
  }

  if (!product) {
    return <h1>Product not found</h1>;
  }

  return (
    <div className="product-page">
        <div className="container">
            <div className="d-f">
                <div className="page-product-image">
                    <img src={product.image} alt={product.description} />
                </div>
                <div className="page-product-info">
                    <h2 className='info__description'>{product.description}</h2>
                    <div className="description__MS">
                        <p className="info__model">Model: {product.model}</p>
                        <p className="info__sku">SKU: {product.sku}</p>
                    </div>
                    <div className="info__price">
                        <p className='real-price'>${product.price}</p>
                        <p className='price__save'>Save ${product.was - product.price}</p>
                        <p className='price__was'>Was: ${product.was}</p>
                        <div className="shipping-method">
                            <button className="pickup">
                                <img src="./images/Shipping-method/pickup.svg" alt="pickup" />
                                <p className="method-title">Pickup</p>
                                <p className='ready-by'>Ready: <br/> <span>Sunday</span></p>
                            </button>
                            <button className="shipping">
                                <img src="./images/Shipping-method/shipping.svg" alt="shipping" />
                                <p className="method-title">Shipping</p>
                                <p className='ready-by'>Ready: <br/> <span>Tommorow</span></p>
                            </button>
                        </div>
                    </div>
                    <Link to={"/Cart"} className="addToCart-btn">
                        <img src="./images/Header/cart-icon.svg" alt="Add To Cart" />
                        <p>Add to Cart</p>
                    </Link>
                </div>
            </div>
        </div>
    </div>
  );
};

