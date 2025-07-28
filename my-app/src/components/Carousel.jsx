"use client"
import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import styles from "./Carousel.module.css";

/**
 * Carousel component for displaying product recommendations.
 * @param {Array} products - Array of product objects to display.
 * @param {string} [title] - Optional carousel title.
 */
const Carousel = ({ products, title }) => {
  const [startIdx, setStartIdx] = useState(0);
  const [itemsVisible, setItemsVisible] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 700) {
        setItemsVisible(1);
      } else if (window.innerWidth <= 900) {
        setItemsVisible(2);
      } else {
        setItemsVisible(3);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const visibleProducts = products.slice(startIdx, startIdx + itemsVisible);

  const canGoLeft = startIdx > 0;
  const canGoRight = startIdx + itemsVisible < products.length;

  const handleLeft = () => {
    if (canGoLeft) setStartIdx(startIdx - itemsVisible);
  };

  const handleRight = () => {
    if (canGoRight) setStartIdx(startIdx + itemsVisible);
  };

  return (
    <section className={styles.carousel}>
      {title && <h2>{title}</h2>}
      <div className={styles.carouselControls}>
        <button
          aria-label="Previous"
          className={styles.carouselBtn}
          onClick={handleLeft}
          disabled={!canGoLeft}
        >
          <img src="/left-arrow-svgrepo-com.svg" alt="Previous" width={48} height={48} />
        </button>
        <div className={styles.carouselItems}>
          {visibleProducts.map((product) => (
            <ProductCard key={product.productUrl} product={product} />
          ))}
        </div>
        <button
          aria-label="Next"
          className={styles.carouselBtn}
          onClick={handleRight}
          disabled={!canGoRight}
        >
          <img src="/right-arrow-svgrepo-com.svg" alt="Next" width={48} height={48} />
        </button>
      </div>
    </section>
  );
};

export default Carousel;