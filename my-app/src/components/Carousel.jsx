import React from "react";

export default function Carousel({ products = [] }) {
  return (
    <div>
      {products.length === 0 ? (
        <p>Carousel component placeholder</p>
      ) : (
        products.map((product) => (
          <div key={product.productTitle}>
            <img src={product.imageSrc} alt={product.productTitle} />
            <a href={product.productUrl}>{product.productTitle}</a>
            <span>{product.price}</span>
          </div>
        ))
      )}
    </div>
  );
}