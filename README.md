# Space NK Developer Exercise

In this exercise we would like you to build a recommendations carousel component. The carousel should look similar to this [screenshot](recommendations-screenshot.png) using the recommendations [JSON](data/recommendations.json) provided. The carousel component you build should display the product title, image, brand name, price and should link to the website product detail page. Creativity is accepted but do not alter the JSON provided.

### Requirements
* Responsive
* Clean, reusable code

Please fork this repository and commit your changes for review.

Amend this Readme in your forked repo and use your commits to outline the component you have created and the decisions that you have made, including any information required for how to run your component. When complete please raise a Pull Request back into master branch for review.

---

# Responsive Product Carousel (Next.js + React)

This project features a responsive product carousel built with **React** and **Next.js**, designed to enhance the ecommerce browsing experience across all devices with modern UX patterns and accessibility in mind.

## Live Demo

**View the carousel in action:** [https://casetrainerbilly.github.io/ecom-developer-exercise/]

---

## Research-Informed Design

- **Built with Mobile in Mind:** With over **75% of ecommerce purchases** occurring on mobile or tablets, the carousel includes touch gestures, responsive layout adjustments, and vertical transitions for smaller screens to provide an optimal experience.
- **Effective CTA Placement:** Each product card includes a prominent **"Shop Now"** button. Based on ecommerce research, strong call-to-action buttons drive higher engagement and conversions.
- **Graceful Degradation:** Missing images or prices are handled with fallbacks to ensure visual consistency and maintain user trust.

---

## Components Overview

### Carousel (`/components/Carousel.jsx`)
- Responsive layout: shows 1–3 items depending on screen size
- Touch swipe navigation for mobile and tablet users
- Accessible keyboard navigation with ARIA labels
- Smooth CSS transitions and edge case handling

### ProductCard (`/components/ProductCard.jsx`)
- Displays product image, title, and price
- Includes "Shop Now" CTA
- Fallback placeholder image on load error
- Handles missing price or brand gracefully

---

## Tech Stack

- **Next.js (App Router)**
- **React**
- **Modular CSS** for component styling
- **Vitest** + **React Testing Library**
- **GitHub Pages Ready** (includes `.nojekyll` and `basePath` support)

---

## Getting Started

### Prerequisites

- Node.js v14 or higher
- npm or yarn

### Setup Instructions

```bash
git clone [your-repo-url]
cd ecom-developer-exercise/my-app
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the carousel in your browser.

## Responsive Breakpoints

| Device | Screen Width | Products Shown | Transition |
|--------|-------------|----------------|------------|
| Desktop | >900px | 3 per slide | Horizontal |
| Tablet | 700-900px | 2 per slide | Horizontal |
| Mobile | <700px | 1 per slide | Vertical |
| Small Mobile | <360px | 1 per slide | Optimized spacing |

## Technical Implementation

### State Management
- `startIdx`: Current slide position
- `itemsVisible`: Dynamic based on screen size
- `isTransitioning`: Prevents rapid navigation during animations

### Performance Features
- **Efficient Re-renders:** Only updates when necessary
- **Smooth Animations:** Hardware-accelerated CSS transitions
- **Touch Optimization:** `touch-action` properties for better mobile performance

### Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- CSS Grid and Flexbox support required

## File Structure

```
my-app/
├── src/
│   ├── components/
│   │   ├── Carousel.jsx
│   │   ├── Carousel.module.css
│   │   ├── ProductCard.jsx
│   │   └── ProductCard.module.css
│   ├── app/
│   │   ├── page.js
│   │   └── globals.css
│   └── data/
│       └── recommendations.json
└── public/
    ├── cart-3-svgrepo-com.svg
    ├── left-arrow-svgrepo-com.svg
    ├── right-arrow-svgrepo-com.svg
    └── No-Image-Placeholder.svg.png
```

## Deployment

### Build for Production
```bash
npm run export
```

### Deploy to GitHub Pages
```bash
npm run deploy
```

## Future Enhancements

- **Auto-play functionality** with pause on hover
- **Lazy loading** for improved performance
- **Wishlist integration** with heart icons
- **Quick view modals** for product details
- **Accessibility improvements** with ARIA attributes and keyboard navigation
