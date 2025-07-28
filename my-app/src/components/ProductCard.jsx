import React from "react";
import styles from "./ProductCard.module.css";

/**
 * ProductCard component styled to match the reference design.
 * @param {Object} product - The product object to display.
 */
const ProductCard = ({ product }) => {
  // Split on the first " - "
  const [brand, ...rest] = product.productTitle.split(" - ");
  const productName = rest.length > 0 ? rest.join(" - ") : "";

  // Check if brand is a single word
  const isSingleWordBrand = brand.trim().split(/\s+/).length === 1;

  return (
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
          <div className={styles.productBrand}>
            {brand || product.productTitle}
          </div>
          {productName && (
            <div className={styles.productName}>{productName}</div>
          )}
          <p className={styles.productPrice}>£{product.price}</p>
        </div>
        <div className={styles.shopNowWrapper}>
          <span className={styles.shopNow}>SHOP NOW</span>
        </div>
      </a>
    </div>
  );
};

export default ProductCard;