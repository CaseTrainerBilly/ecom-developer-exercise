"use client"
import React, { useState } from "react";

/**
 * Carousel component for displaying product recommendations.
 * @param {Array} products - Array of product objects to display.
 * @param {string} [title] - Optional carousel title.
 */
const ITEMS_VISIBLE = 3;

const Carousel = ({ products, title }) => {
  const [startIdx, setStartIdx] = useState(0);

  const canGoLeft = startIdx > 0;
  const canGoRight = startIdx + ITEMS_VISIBLE < products.length;

  const handleLeft = () => {
    if (canGoLeft) setStartIdx(startIdx - 1);
  };

  const handleRight = () => {
    if (canGoRight) setStartIdx(startIdx + 1);
  };

  const visibleProducts = products.slice(startIdx, startIdx + ITEMS_VISIBLE);

  return (
    <section className="carousel">
      {title && <h2>{title}</h2>}
      <div className="carousel-controls">
        <button
          aria-label="Previous"
          className="carousel-btn"
          onClick={handleLeft}
          disabled={!canGoLeft}
        >
          &#8592;
        </button>
        <div className="carousel-items">
          {visibleProducts.map((product) => (
            <a
              key={product.productUrl}
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
          ))}
        </div>
        <button
          aria-label="Next"
          className="carousel-btn"
          onClick={handleRight}
          disabled={!canGoRight}
        >
          &#8594;
        </button>
      </div>
    </section>
  );
};

export default Carousel;