import { combineReducers } from "redux";
import favoriteProductsReducer from "./favoriteProducts";

const rootReducer = combineReducers({
  favoriteProducts: favoriteProductsReducer
});

export default rootReducer;
