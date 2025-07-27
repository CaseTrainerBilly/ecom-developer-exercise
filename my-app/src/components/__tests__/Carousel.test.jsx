import "@testing-library/jest-dom";
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
	expect(screen.getByText("Fresh - Soy Face Cleanser")).toBeInTheDocument();
	expect(screen.getByText("30.00")).toBeInTheDocument();
	expect(
		screen.getByRole("img", { name: "Fresh - Soy Face Cleanser" })
	).toBeInTheDocument();
});