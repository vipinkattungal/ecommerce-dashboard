import React from 'react';
import { useSelector } from 'react-redux';

const FavProducts = () => {
  const favoriteProducts = useSelector(state => state.favoriteProducts.favoriteProducts);
  console.log(favoriteProducts,"fav");

  return (
    <div>
      <h2>Favorite Products</h2>
      <ul>
        {favoriteProducts.map(product => (
   <div key={product.id} className="max-w-sm rounded overflow-hidden shadow-lg m-4">
   <img className="w-full" src="https://via.placeholder.com/150" alt="Product" loading="lazy" />
   <div className="px-6 py-4">
     <div className="font-bold text-xl mb-2">{product.title}</div>
     <p className="text-gray-700 text-base">{product.body}</p>
    
   </div>
 </div>
))}
      </ul>
    </div>
  );
};

export default FavProducts;
