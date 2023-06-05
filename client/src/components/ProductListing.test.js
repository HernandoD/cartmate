/**
 * @jest-environment jsdom
 */
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import ProductListing from "./ProductListing";
import data from "../../mockData/data";

test("render correct number of products", () => {
  render(<ProductListing products={data} />);
  
  const products = screen.getAllByTestId("product");

  expect(products.length).toBe(4);
})

test("check product details rendering", () => {
  render(<ProductListing products={data} />);
  
  const product = screen.getByText("Amazon Kindle E-reader");

  expect(product).toBeInTheDocument();
});
