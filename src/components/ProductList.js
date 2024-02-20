
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addFavoriteProduct, removeFavoriteProduct } from "../action/favoriteProducts";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [pageSize] = useState(12); 
  const [filters, setFilters] = useState({});
  const favoriteProducts = useSelector(state => state.favoriteProducts.favoriteProducts);
  const dispatch = useDispatch();
  
  useEffect(() => {
    console.log("Favorite Products Changed:", favoriteProducts);
  }, [favoriteProducts]); 


  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    applyFilters();
  }, [filters, products]);

  const fetchProducts = async () => {
    try {
      const response = await axios.get("https://jsonplaceholder.typicode.com/posts"); 
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const applyFilters = () => {
    let filtered = products;
    if (filters.category) {
      filtered = filtered.filter(product => product.category === filters.category);
    }
    if (filters.priceRange) {
      filtered = filtered.filter(product => product.price >= filters.priceRange.min && product.price <= filters.priceRange.max);
    }
    setFilteredProducts(filtered);
  };

  const handleFilterChange = (filterType, value) => {
    setFilters({ ...filters, [filterType]: value });
  };

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  const handleToggleFavorite = (productId) => {
    const isFavorite = favoriteProducts.some(product => product.id === productId);
    if (isFavorite) {
      dispatch(removeFavoriteProduct(productId));
    } else {
      const product = products.find(product => product.id === productId);
      dispatch(addFavoriteProduct(product));
    }
  };

  const renderProducts = () => {
    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const paginatedProducts = filteredProducts.slice(startIndex, endIndex);

    return paginatedProducts.map(product => (
      <div key={product.id} className="max-w-sm rounded overflow-hidden shadow-lg m-4">
        <img className="w-full" src="https://via.placeholder.com/150" alt="Product" loading="lazy" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{product.title}</div>
          <p className="text-gray-700 text-base">{product.body}</p>
          <button className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => handleToggleFavorite(product.id)}>
            {favoriteProducts.some(p => p.id === product.id) ? "Remove from Favorites" : "Add to Favorites"}
          </button>
        </div>
      </div>
    ));
  };

  return (
    <div>
      <div className="mb-4 p-4 border rounded-lg">
        <h2 className="text-xl font-semibold mb-2">Filters</h2>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="priceRange">Price Range:</label>
          <input type="range" min="0" max="1000" value={filters.priceRange} onChange={(e) => handleFilterChange('priceRange', e.target.value)} />
          <span>${filters.priceRange}</span>
        </div>
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="category">Category:</label>
          <select className="bg-white shadow-md rounded-md py-2 px-4" value={filters.category} onChange={(e) => handleFilterChange('category', e.target.value)}>
            <option value="">All Categories</option>
          </select>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {renderProducts()}
      </div>

      <div className="mt-4">
        <button disabled={page === 1} onClick={() => handlePageChange(page - 1)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Previous</button>
        <span className="mx-4">Page {page}</span>
        <button disabled={filteredProducts.length <= page * pageSize} onClick={() => handlePageChange(page + 1)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Next</button>
      </div>
    </div>
  );
};

export default ProductList;
