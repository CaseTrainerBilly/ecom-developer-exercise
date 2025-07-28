"use client"
import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import styles from "./Carousel.module.css";

/**
 * Carousel component for displaying product recommendations.
 * @param {Array} products - Array of product objects to display.
 * @param {string} [title] - Optional carousel title.
 */
const ITEMS_VISIBLE = 3;

const Carousel = ({ products, title }) => {
  const [startIdx, setStartIdx] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  // Preload all product images on mount
  useEffect(() => {
    let loadedCount = 0;
    products.forEach(product => {
      const img = new window.Image();
      img.src = product.imageSrc;
      img.onload = () => {
        loadedCount += 1;
        if (loadedCount === products.length) {
          setImagesLoaded(true);
        }
      };
      img.onerror = () => {
        loadedCount += 1;
        if (loadedCount === products.length) {
          setImagesLoaded(true);
        }
      };
    });
  }, [products]);

  const canGoLeft = startIdx > 0;
  const canGoRight = startIdx + ITEMS_VISIBLE < products.length;

  const handleLeft = () => {
    if (canGoLeft) setStartIdx(startIdx - ITEMS_VISIBLE);
  };

  const handleRight = () => {
    if (canGoRight) setStartIdx(startIdx + ITEMS_VISIBLE);
  };

  const visibleProducts = products.slice(startIdx, startIdx + ITEMS_VISIBLE);

  if (!imagesLoaded) {
    return (
      <section className={styles.carousel}>
        <div style={{ textAlign: "center", padding: "2rem" }}>Loading...</div>
      </section>
    );
  }

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
          <img src="./left-arrow-svgrepo-com.svg" alt="Previous" width={24} height={24} />
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
          <img src="./right-arrow-svgrepo-com.svg" alt="Next" width={24} height={24} />
        </button>
      </div>
    </section>
  );
};

export default Carousel;