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
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [slideDirection, setSlideDirection] = useState('');
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const minSwipeDistance = 50;

  useEffect(() => {
    const handleResize = () => {
      const newItemsVisible = window.innerWidth <= 700 ? 1 : 
                             window.innerWidth <= 900 ? 2 : 3;
      
      setItemsVisible(newItemsVisible);
      
      // Reset startIdx to 0 when itemsVisible changes to avoid invalid states
      setStartIdx(0);
    };
    
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Calculate total pages (including partial pages)
  const totalPages = Math.ceil(products.length / itemsVisible);
  
  // Calculate current page with special handling for the last page
  const maxStartIdx = Math.max(0, products.length - itemsVisible);
  let currentPage = Math.floor(startIdx / itemsVisible);
  
  // If we're at the maximum start index (showing the last products), 
  // we're on the last page regardless of calculation
  if (startIdx >= maxStartIdx && maxStartIdx > 0) {
    currentPage = totalPages - 1;
  }

  // Show current products
  const currentProducts = products.slice(startIdx, startIdx + itemsVisible);
  
  const canGoLeft = startIdx > 0;
  const canGoRight = startIdx + itemsVisible < products.length;

  const handleTransition = (newIndex, direction) => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setSlideDirection(direction);
    
    setTimeout(() => {
      setStartIdx(newIndex);
    }, 50);
    
    setTimeout(() => {
      setIsTransitioning(false);
      setSlideDirection('');
    }, 350);
  };

  const handleLeft = () => {
    if (canGoLeft && !isTransitioning) {
      const newIndex = Math.max(0, startIdx - itemsVisible);
      handleTransition(newIndex, 'left');
    }
  };

  const handleRight = () => {
    if (canGoRight && !isTransitioning) {
      const newIndex = Math.min(products.length - itemsVisible, startIdx + itemsVisible);
      handleTransition(newIndex, 'right');
    }
  };

  const handleDotClick = (pageIndex) => {
    if (isTransitioning) return;
    
    // Calculate the start index for the clicked page
    let newIndex = pageIndex * itemsVisible;
    
    // For the last page, ensure we show the last products
    if (pageIndex === totalPages - 1) {
      newIndex = Math.max(0, products.length - itemsVisible);
    }
    
    const direction = newIndex > startIdx ? 'right' : 'left';
    handleTransition(newIndex, direction);
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current || isTransitioning) return;
    
    const distance = touchStartX.current - touchEndX.current;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe && canGoRight) {
      handleRight();
    }
    if (isRightSwipe && canGoLeft) {
      handleLeft();
    }

    touchStartX.current = 0;
    touchEndX.current = 0;
  };

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
          disabled={!canGoLeft || isTransitioning}
        >
          <img src="/left-arrow-svgrepo-com.svg" alt="Previous" />
        </button>
        
        <div className={styles.carouselWrapper}>
          <div 
            className={`${styles.carouselItems} ${isTransitioning ? styles.transitioning : ''} ${slideDirection ? styles[slideDirection] : ''}`}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {currentProducts.map((product, index) => (
              <ProductCard 
                key={`${product.productUrl}-${startIdx + index}`} 
                product={product} 
              />
            ))}
          </div>
        </div>
        
        <button
          aria-label="Next products"
          className={styles.carouselBtn}
          onClick={handleRight}
          disabled={!canGoRight || isTransitioning}
        >
          <img src="/right-arrow-svgrepo-com.svg" alt="Next" />
        </button>
      </div>
      
      {/* Dot Indicators */}
      {totalPages > 1 && (
        <div className={styles.carouselIndicators}>
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              className={`${styles.indicator} ${index === currentPage ? styles.active : ''}`}
              onClick={() => handleDotClick(index)}
              aria-label={`Go to page ${index + 1} of ${totalPages}`}
              disabled={isTransitioning}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default Carousel;