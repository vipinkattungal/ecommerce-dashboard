
export const addFavoriteProduct = (product) => {
    return {
      type: "ADD_FAVORITE_PRODUCT",
      payload: product
    };
  };
  
  export const removeFavoriteProduct = (productId) => {
    return {
      type: "REMOVE_FAVORITE_PRODUCT",
      payload: productId
    };
  };
  export const toggleDarkMode = () => {
    return {
      type: 'TOGGLE_DARK_MODE'
    };
  };
  