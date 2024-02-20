const initialState = {
    favoriteProducts: [],
    darkMode: false

  };
  
  
  const favoriteProductsReducer = (state = initialState, action) => {
    switch (action.type) {
      case "ADD_FAVORITE_PRODUCT":
        return {
          ...state,
          favoriteProducts: [...state.favoriteProducts, action.payload]
        };
      case "REMOVE_FAVORITE_PRODUCT":
        return {
          ...state,
          favoriteProducts: state.favoriteProducts.filter(product => product.id !== action.payload)
        };
      
          case 'TOGGLE_DARK_MODE':
            return {
              ...state,
              darkMode: !state.darkMode
            };
      default:
        return state;
    }
    
  };
  
  export default favoriteProductsReducer;
  