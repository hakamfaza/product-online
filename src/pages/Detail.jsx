import React from 'react';
import { useParams } from 'react-router-dom';
import { Carousel } from 'antd';
import Navbar from '../components/navbar/navbar';
import product from '../database/product.json';

import '../assets/styles/detail.css';

export default function Detail() {
  const { id } = useParams();
  const getDetailProduct = product.find((i) => i.id === Number(id));

  return (
    <>
      <Navbar />
      <div className="detail">
        <div className="container">
          <div className="boxOfTitle">
            <h1>{getDetailProduct.title}</h1>
            <p className="rating">
              (
              {getDetailProduct.rating}
              )
            </p>
          </div>
          <p className="textCategory">
            category
            {' '}
            {'>'}
            {' '}
            {getDetailProduct.category}
          </p>
          <div className="mainBox">
            <div>
              <Carousel autoplay className="carousel">
                {
          getDetailProduct.images.length >= 0 ? getDetailProduct.images.map((item) => (

            <div>
              <img src={`${item}`} alt="product" className="img" />
            </div>

          )) : null
        }
              </Carousel>
            </div>
            <div className="secondBox">
              <h2>Brand</h2>
              <p className="text">{getDetailProduct.brand}</p>
              <h4>Stock</h4>
              <p className="stock">{getDetailProduct.stock }</p>
              <hr />
              <div className="priceBox">
                <div>
                  <h4>Price</h4>
                  <p className="text">{getDetailProduct.price}</p>
                </div>
                <div>
                  <h4>Discount</h4>
                  <p className="text">
                    {getDetailProduct.discountPercentage}
                    {' '}
                    %
                  </p>
                </div>
              </div>
              <hr />
              <h2>
                Description
              </h2>
              <p className="text">{getDetailProduct.description }</p>
            </div>
          </div>
        </div>

      </div>
    </>
  );
}
