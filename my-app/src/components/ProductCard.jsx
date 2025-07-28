import React from "react";

/**
 * ProductCard component for displaying a single product.
 * @param {Object} product - The product object to display.
 */
const ProductCard = ({ product }) => (
  <a
    href={product.productUrl}
    className="carousel-item"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img
      src={product.imageSrc}
      alt={product.productTitle}
      className="carousel-image"
    />
    <div className="carousel-details">
      <h3>{product.productTitle}</h3>
      <p>{product.price}</p>
    </div>
  </a>
);

export default ProductCard;