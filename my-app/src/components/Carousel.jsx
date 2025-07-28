"use client"
import React, { useState, useEffect, useRef } from "react";
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
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const minSwipeDistance = 50; // Minimum distance for a swipe

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
    if (canGoLeft) {
      setStartIdx(Math.max(0, startIdx - itemsVisible));
    }
  };

  const handleRight = () => {
    if (canGoRight) {
      setStartIdx(Math.min(products.length - itemsVisible, startIdx + itemsVisible));
    }
  };

  // Touch event handlers for swipe functionality
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    
    const distance = touchStartX.current - touchEndX.current;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe && canGoRight) {
      handleRight();
    }
    if (isRightSwipe && canGoLeft) {
      handleLeft();
    }

    // Reset touch positions
    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  // Don't render if no products
  if (!products || products.length === 0) {
    return null;
  }

  return (
    <section className={styles.carousel}>
      {title && <h2>{title}</h2>}
      <div className={styles.carouselControls}>
        <button
          aria-label="Previous products"
          className={styles.carouselBtn}
          onClick={handleLeft}
          disabled={!canGoLeft}
        >
          <img src="/left-arrow-svgrepo-com.svg" alt="Previous" />
        </button>
        
        <div 
          className={styles.carouselItems}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {visibleProducts.map((product, index) => (
            <ProductCard 
              key={`${product.productUrl}-${startIdx + index}`} 
              product={product} 
            />
          ))}
        </div>
        
        <button
          aria-label="Next products"
          className={styles.carouselBtn}
          onClick={handleRight}
          disabled={!canGoRight}
        >
          <img src="/right-arrow-svgrepo-com.svg" alt="Next" />
        </button>
      </div>
    </section>
  );
};

export default Carousel;