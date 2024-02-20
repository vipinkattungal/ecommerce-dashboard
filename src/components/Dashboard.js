import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleDarkMode } from "../action/favoriteProducts";
import classNames from "classnames";

const DashboardLayout = () => {
  const darkMode = useSelector(state => state.favoriteProducts.darkMode);
  const dispatch = useDispatch();

  const toggleDarkModeHandler = () => {
    dispatch(toggleDarkMode());
  };

  return (
    <div className={classNames("h-screen", { "bg-gray-400 dark:bg-gray-900": !darkMode })}>
      <div className="container mx-auto h-full">
        <header className="py-4">
          <h1 className={classNames("text-2xl font-bold", { "text-white": darkMode })}>Dashboard</h1>
          <button
            className={classNames("px-3 py-1 rounded-md", {
              "bg-gray-300": !darkMode,
              "bg-gray-700 text-white": darkMode,
            })}
            onClick={toggleDarkModeHandler}
          >
            {darkMode ? "Dark Mode" : "Light Mode"}
          </button>
        </header>
        <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
