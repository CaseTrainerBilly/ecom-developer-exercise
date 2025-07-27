import React from "react";

/**
 * Carousel component for displaying product recommendations.
 * @param {Array} products - Array of product objects to display.
 * @param {string} [title] - Optional carousel title.
 */
const Carousel = ({ products, title }) => (
  <section className="carousel">
    {title && <h2>{title}</h2>}
    <div className="carousel-controls">
      <button aria-label="Previous" className="carousel-btn">
        &#8592;
      </button>
      <div className="carousel-items">
        {products.map((product) => (
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
      <button aria-label="Next" className="carousel-btn">
        &#8594;
      </button>
    </div>
  </section>
);

export default Carousel;