import React from "react";
import "./ProductPackageCard.css";
import { IoIosArrowForward } from "react-icons/io";
import { IoArrowForward } from "react-icons/io5";
import Necessarie from '../../../../assets/Necessarie.avif'
import Mario from '../../../../assets/Mario.jpg'
import Evion from '../../../../assets/Evion.jpg'


const products = [
  {
    id: 1,
    name: "Neces 100ml",
    price: "$27.60",
    oldPrice: "$34.7",
    image: Necessarie,
  },
  {
    id: 2,
    name: "Mario 118ml",
    price: "$25.70",
    oldPrice: "$32.7",
    image: Mario,
  },
  {
    id: 3,
    name: "Evion 250m1",
    price: "$25.70",
    oldPrice: "$32.7",
    image: Evion ,
  },
];

const ProductPackageCard = () => {
  return (
    <div className="product-card-container">
      <div className="product-card-header">
        <h3>Popular Product</h3>
        <a href="#">View all <IoIosArrowForward size={10} className="arrow-icon"/></a>
      </div>
      {products.map((product) => (
        <div className="product-card" key={product.id}>
          <img src={product.image} alt={product.name} className="product-image" />
          <div className="product-info">
            <p className="product-name">{product.name}</p>
            <div className="product-price-info">
              <span className="product-price">{product.price}</span>
              <span className="product-old-price">{product.oldPrice}</span>
            </div>
            <span className="product-arrow"><IoArrowForward /></span>
          </div>
         
        </div>
      ))}
    </div>
  );
};

export default ProductPackageCard ;
