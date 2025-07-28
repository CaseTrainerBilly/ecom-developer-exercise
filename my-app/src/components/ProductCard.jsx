import React from "react";
import styles from "./ProductCard.module.css";

/**
 * ProductCard component styled to match the reference design.
 * @param {Object} product - The product object to display.
 */
const ProductCard = ({ product }) => (
  <div className={styles.productCard}>
    <a
      href={product.productUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.productCardLink}
    >
      <img
        src={product.imageSrc}
        alt={product.productTitle}
        className={styles.productCardImage}
      />
      <div className={styles.productCardDetails}>
        {product.brand && (
          <div className={styles.productBrand}>{product.brand}</div>
        )}
        <h3 className={styles.productTitle}>{product.productTitle}</h3>
        <p className={styles.productPrice}>£{product.price}</p>
      </div>
      <div className={styles.shopNowWrapper}>
        <span className={styles.shopNow}>SHOP NOW</span>
      </div>
    </a>
  </div>
);

export default ProductCard;