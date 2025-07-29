import React, { useState } from "react";
import styles from "./ProductCard.module.css";

/**
 * ProductCard component styled to match the reference design.
 * @param {Object} product - The product object to display.
 */
const ProductCard = ({ product }) => {
  // Add basePath for production
  const basePath = process.env.NODE_ENV === 'production' ? '/ecom-developer-exercise' : '';
  
  const [brand, ...rest] = product.productTitle.split(" - ");
  
  // If no brand is found (no " - " separator), use "Unbranded"
  const displayBrand = rest.length > 0 ? brand : "Unbranded";
  const productName = rest.length > 0 ? rest.join(" - ") : product.productTitle;

  const placeholder = `${basePath}/No-Image-Placeholder.svg.png`;
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
            {displayBrand}
          </div>
          <div className={styles.productName}>{productName}</div>
          <p className={product.price ? styles.productPrice : styles.productPriceUnavailable}>
            {product.price ? `£${product.price}` : "Price unavailable"}
          </p>
        </div>
        <div className={styles.shopNowWrapper}>
          <span className={styles.shopNow}>
            <img 
              src={`${basePath}/cart-3-svgrepo-com.svg`}
              alt="Cart" 
              className={styles.cartIcon}
            />
            SHOP NOW
          </span>
        </div>
      </a>
    </div>
  );
};

export default ProductCard;