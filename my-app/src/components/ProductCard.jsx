import React, { useState } from "react";
import styles from "./ProductCard.module.css";

/**
 * ProductCard component styled to match the reference design.
 * @param {Object} product - The product object to display.
 */
const ProductCard = ({ product }) => {
  const [brand, ...rest] = product.productTitle.split(" - ");
  const productName = rest.length > 0 ? rest.join(" - ") : "";

  const placeholder = "/No-Image-Placeholder.svg.png";
  const [imgSrc, setImgSrc] = useState(
    product.imageSrc && product.imageSrc.trim() ? product.imageSrc : placeholder
  );

  return (
    <div className={styles.productCard}>
      <a
        href={product.productUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.productCardLink}
      >
        <img
          src={imgSrc}
          alt={product.productTitle}
          className={styles.productCardImage}
          onError={() => setImgSrc(placeholder)}
        />
        <div className={styles.productCardDetails}>
          <div className={styles.productBrand}>
            {brand || product.productTitle}
          </div>
          {productName && (
            <div className={styles.productName}>{productName}</div>
          )}
          <p className={product.price ? styles.productPrice : styles.productPriceUnavailable}>
            {product.price ? `£${product.price}` : "Price unavailable"}
          </p>
        </div>
        <div className={styles.shopNowWrapper}>
          <span className={styles.shopNow}>SHOP NOW</span>
        </div>
      </a>
    </div>
  );
};

export default ProductCard;