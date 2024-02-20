import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "./store";
import DashboardLayout from "./DashboardLayout";

test("renders dashboard layout with light mode by default", () => {
  const { container } = render(
    <Provider store={store}>
      <DashboardLayout />
    </Provider>
  );

  expect(container).toMatchSnapshot();
  expect(container.querySelector(".dark")).toBeNull(); 
});

test("toggles dark mode when dark mode button is clicked", () => {
  const { getByText, container } = render(
    <Provider store={store}>
      <DashboardLayout />
    </Provider>
  );

  fireEvent.click(getByText("Dark Mode"));

  expect(container).toMatchSnapshot();
  expect(container.querySelector(".dark")).toBeTruthy();
});
