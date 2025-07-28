import React from "react";
import styles from "./ProductCard.module.css";

/**
 * ProductCard component for displaying a single product.
 * @param {Object} product - The product object to display.
 */
const ProductCard = ({ product }) => (
  <a
    href={product.productUrl}
    className={styles.productCard}
    target="_blank"
    rel="noopener noreferrer"
  >
    <img
      src={product.imageSrc}
      alt={product.productTitle}
      className={styles.productCardImage}
      width={120}
      height={120}
    />
    <div className={styles.productCardDetails}>
      <h3>{product.productTitle}</h3>
      <p>{product.price}</p>
    </div>
  </a>
);

export default ProductCard;