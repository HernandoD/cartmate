/**
 * @jest-environment jsdom
 */
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import data from "../../mockData/data"
import Product from "./Product";

test("props are rendering", () => {
  const product = data[0];
  render(
    <Product
      price={product.price} 
      quantity={product.quantity} 
      pid={product._id}
      title={product.title} 
    />);
    
    const titleElement = screen.getByRole("heading", {name: product.title});
    const priceElement = screen.getByText("$" + String(product.price));
    const quantityElement = screen.getByText(String(product.quantity));
  
    expect(titleElement).toBeInTheDocument();
    expect(priceElement).toBeInTheDocument();
    expect(quantityElement).toBeInTheDocument();
});

test("can toggle edit mode", async () => {
  const product = data[0];

  render(
    <Product
      price={product.price} 
      quantity={product.quantity} 
      pid={product._id}
      title={product.title}
    />);

    const editBtn = screen.getByRole("button", {name: "Edit"})

    const user = userEvent.setup();
    await user.click(editBtn) 
    let editProduct = screen.getByRole("heading", {name: "Edit Product"})
    expect(editProduct).toBeInTheDocument()
});

test("can cancel edit mode", async () => {
  const product = data[0];

  render(
    <Product
      price={product.price} 
      quantity={product.quantity} 
      pid={product._id}
      title={product.title}
    />);

    const editBtn = screen.getByRole("button", {name: "Edit"})

    const user = userEvent.setup();
    await user.click(editBtn) 
    let editProduct = screen.getByRole("heading", {name: "Edit Product"})
    expect(editProduct).toBeInTheDocument()

    const cancelBtn = screen.getByRole("button", {name: "Cancel"})
    await user.click(cancelBtn)
    expect(editProduct).not.toBeInTheDocument()
})
