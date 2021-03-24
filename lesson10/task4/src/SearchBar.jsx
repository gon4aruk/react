import React from 'react';

const SearchBar = ({ filterText, handleChange, inStockOnly }) => {
  return (
    <form>
      <input 
        type="text" 
        placeholder="Search..." 
        value={filterText} 
        onChange={handleChange} 
      />
      <p>
        <input type="checkbox" checked={inStockOnly} onChange={handleChange} /> Only show products in stock
      </p>
    </form>
  );
};

export default SearchBar;
