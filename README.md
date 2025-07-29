# Space NK Developer Exercise

In this exercise we would like you to build a recommendations carousel component. The carousel should look similar to this [screenshot](recommendations-screenshot.png) using the recommendations [JSON](data/recommendations.json) provided. The carousel component you build should display the product title, image, brand name, price and should link to the website product detail page. Creativity is accepted but do not alter the JSON provided.

### Requirements
* Responsive
* Clean, reusable code

Please fork this repository and commit your changes for review.

Amend this Readme in your forked repo and use your commits to outline the component you have created and the decisions that you have made, including any information required for how to run your component. When complete please raise a Pull Request back into master branch for review.

## 🎯 Enhanced Carousel Component Solution

This repository contains a fully responsive, accessible product recommendations carousel built with React and Next.js. The solution provides an intuitive shopping experience across all device sizes with smooth animations and modern UX patterns.

## 🛠️ Components Built

### 📦 **Carousel Component** (`/components/Carousel.jsx`)
A flexible, responsive carousel that adapts to different screen sizes:

**Desktop (>900px):** Shows 3 products per slide
**Tablet (700-900px):** Shows 2 products per slide  
**Mobile (<700px):** Shows 1 product per slide with vertical slide transitions

**Key Features:**
- **Smart Pagination:** Dot indicators show actual slide positions (no extra dots for partial pages)
- **Touch Swipe Support:** Native mobile gestures with 50px minimum swipe distance
- **Keyboard Accessible:** Arrow navigation with proper ARIA labels
- **Responsive Arrows:** Auto-sizing navigation buttons with hover effects
- **Smooth Transitions:** CSS-based animations with cubic-bezier easing
- **Edge Case Handling:** Proper behavior when reaching first/last slides

### 🃏 **ProductCard Component** (`/components/ProductCard.jsx`)
Clean, consistent product display cards with smart content handling:

**Features:**
- **Brand Extraction:** Automatically splits product titles on " - " separator
- **Fallback Handling:** Shows "Unbranded" when no brand detected
- **Image Error Handling:** Graceful fallback to placeholder image
- **Price Display:** Shows "Price unavailable" for missing prices
- **Single-line Descriptions:** Text truncation with ellipsis for long product names
- **Shop Now CTA:** Prominent call-to-action with cart icon

## 🎨 Design Decisions

### **Responsive Strategy**
- **Mobile-First Approach:** Optimized for small screens, enhanced for larger ones
- **Flexible Grid:** Uses CSS Grid and Flexbox for reliable cross-browser layout
- **Adaptive Sizing:** Typography and spacing scale appropriately across breakpoints

### **User Experience**
- **Visual Feedback:** Hover states, loading transitions, and disabled button states
- **Intuitive Navigation:** Familiar carousel patterns with clear visual indicators
- **Performance Optimized:** Efficient re-renders and smooth 60fps animations

### **Accessibility**
- **Screen Reader Support:** Proper ARIA labels and semantic HTML structure
- **Keyboard Navigation:** Full functionality without mouse/touch
- **Focus Management:** Clear focus indicators and logical tab order

### **Code Architecture**
- **Modular CSS:** Separate `.module.css` files for component isolation
- **React Hooks:** `useState` and `useEffect` for state management and side effects
- **Responsive Logic:** Dynamic breakpoint handling with window resize listeners

## 🚀 How to Run

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone [your-repo-url]
   cd ecom-developer-exercise
   ```

2. **Navigate to the app directory:**
   ```bash
   cd my-app
   ```

3. **Install dependencies:**
   ```bash
   npm install
   ```

4. **Start the development server:**
   ```bash
   npm run dev
   ```

5. **View in browser:**
   Open [http://localhost:3000](http://localhost:3000)

## 📱 Responsive Breakpoints

| Device | Screen Width | Products Shown | Transition |
|--------|-------------|----------------|------------|
| Desktop | >900px | 3 per slide | Horizontal |
| Tablet | 700-900px | 2 per slide | Horizontal |
| Mobile | <700px | 1 per slide | Vertical |
| Small Mobile | <360px | 1 per slide | Optimized spacing |

## 🔧 Technical Implementation

### **State Management**
- `startIdx`: Current slide position
- `itemsVisible`: Dynamic based on screen size
- `isTransitioning`: Prevents rapid navigation during animations

### **Performance Features**
- **Efficient Re-renders:** Only updates when necessary
- **Smooth Animations:** Hardware-accelerated CSS transitions
- **Touch Optimization:** `touch-action` properties for better mobile performance

### **Browser Support**
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- CSS Grid and Flexbox support required

## 📂 File Structure

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

## ✨ Future Enhancements

- **Auto-play functionality** with pause on hover
- **Lazy loading** for improved performance
- **Wishlist integration** with heart icons
- **Quick view modals** for product details
- **Accessibility improvements** with focus trapping