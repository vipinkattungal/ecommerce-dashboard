import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "./store";
import FavoriteProducts from "./FavoriteProducts";

test("renders favorite products component correctly", () => {
  const favoriteProducts = [
    { id: 1, name: "Product 1" },
    { id: 2, name: "Product 2" },
  ];

  const { getByText } = render(
    <Provider store={store}>
      <FavoriteProducts />
    </Provider>
  );

  expect(getByText("Product 1")).toBeInTheDocument();
  expect(getByText("Product 2")).toBeInTheDocument();
});
