import { render, screen } from "@testing-library/react";
import Carousel from "../Carousel";

test("renders Carousel component", () => {
  render(<Carousel />);
  expect(screen.getByText(/Carousel component placeholder/i)).toBeInTheDocument();
});