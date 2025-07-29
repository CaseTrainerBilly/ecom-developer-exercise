import { test, expect } from "vitest";
import React from "react";
import { render, screen } from "@testing-library/react";
import Carousel from "../Carousel";

const products = [
	{
		productUrl:
			"https://www.spacenk.com/uk/en_GB/skincare/cleansers/cleanser/soy-face-cleanser-MUK200025595.html",
		imageSrc:
			"https://www.spacenk.com/on/demandware.static/-/Sites-spacenkmastercatalog/default/dwc9059537/products/FRESH/UK200025595_FRESH.jpg",
		productTitle: "Fresh - Soy Face Cleanser",
		price: "30.00",
	},
];

test("renders product data in Carousel", () => {
	render(<Carousel products={products} />);

	// Test that brand is displayed (first part before " - ")
	expect(screen.getByText("Fresh")).toBeInTheDocument();

	// Test that product description is displayed (part after " - ")
	expect(screen.getByText("Soy Face Cleanser")).toBeInTheDocument();

	// Test that price is displayed with £ symbol
	expect(screen.getByText("£30.00")).toBeInTheDocument();

	// Test that image is rendered with correct alt text (full product title)
	expect(
		screen.getByRole("img", { name: "Fresh - Soy Face Cleanser" })
	).toBeInTheDocument();

	// Test that SHOP NOW button is present
	expect(screen.getByText("SHOP NOW")).toBeInTheDocument();
});

q// Test for product without " - " separator (should show "Unbranded")
test("renders product without brand separator", () => {
	const productWithoutBrand = [
		{
			productUrl: "https://example.com/product",
			imageSrc: "https://example.com/image.jpg",
			productTitle: "Single Product Name",
			price: "25.00",
		},
	];

	render(<Carousel products={productWithoutBrand} />);

	// Should show "Unbranded" as brand (matching your actual component)
	expect(screen.getByText("Unbranded")).toBeInTheDocument();

	// Should show full title as product name
	expect(screen.getByText("Single Product Name")).toBeInTheDocument();

	// Should show price with £ symbol
	expect(screen.getByText("£25.00")).toBeInTheDocument();
});

// Test for product without price
test("renders product without price", () => {
	const productWithoutPrice = [
		{
			productUrl: "https://example.com/product",
			imageSrc: "https://example.com/image.jpg",
			productTitle: "Brand - Product Name",
			price: null,
		},
	];

	render(<Carousel products={productWithoutPrice} />);

	// Should show "Price unavailable"
	expect(screen.getByText("Price unavailable")).toBeInTheDocument();
});