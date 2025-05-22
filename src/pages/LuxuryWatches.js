// src/pages/LuxuryWatches.js
import React, { useState, useEffect, useMemo } from 'react';
import ProductCard from '../components/ProductCard';

import HL1 from '../images/HL1.jpeg';
import HL2 from '../images/HL2.jpeg';
import HL3 from '../images/HL3.jpeg';

const LuxuryWatches = ({ addToCart }) => {
  const [sortOption, setSortOption] = useState('default');
  const [currentPage, setCurrentPage] = useState(1);
  const [paginatedProducts, setPaginatedProducts] = useState([]);
  const productsPerPage = 3;

  const watchesData = useMemo(() => [
    {
      id: 1,
      name: 'Royal Elegance',
      shortDescription: '18k gold watch with hand-crafted detailing.',
      price: 1599,
      image: HL1
    },
    {
      id: 2,
      name: 'Prestige Timepiece',
      shortDescription: 'Polished rose-gold bezel and sapphire crystal face.',
      price: 1999,
      image: HL2
    },
    {
      id: 3,
      name: 'Midnight Luxe',
      shortDescription: 'Luxury black and gold design with diamond accents.',
      price: 2499,
      image: HL3
    }
  ], []);

  useEffect(() => {
    let sortedProducts = [...watchesData];

    if (sortOption === 'price-low') {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (sortOption === 'price-high') {
      sortedProducts.sort((a, b) => b.price - a.price);
    } else if (sortOption === 'name') {
      sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
    }

    const startIndex = (currentPage - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    setPaginatedProducts(sortedProducts.slice(startIndex, endIndex));
  }, [currentPage, sortOption, watchesData]);

  const totalPages = Math.ceil(watchesData.length / productsPerPage);

  return (
    <div className="category-page" style={{ paddingBottom: '6rem', paddingTop: '2rem' }}>
      {/* Centered Header */}
      <div
        className="category-header"
        style={{
          backgroundColor: '#f3e6d2',
          padding: '2rem 1rem',
          textAlign: 'center',
          borderRadius: '10px',
          marginBottom: '2rem'
        }}
      >
        <h1 style={{ fontSize: '2.5rem', color: '#2c2c2c' }}>Luxury Watches</h1>
        <p style={{ fontSize: '1.1rem', color: '#4a4a4a' }}>
          Timeless elegance and precision craftsmanship
        </p>
      </div>

      {/* Sorting Controls */}
      <div className="category-controls" style={{ marginBottom: '2rem', textAlign: 'center' }}>
        <div className="product-count">
          <span>{watchesData.length} products</span>
        </div>
        <div className="sort-options" style={{ marginTop: '0.5rem' }}>
          <label htmlFor="sort">Sort by: </label>
          <select
            id="sort"
            value={sortOption}
            onChange={(e) => {
              setSortOption(e.target.value);
              setCurrentPage(1);
            }}
          >
            <option value="default">Featured</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="name">Name: A to Z</option>
          </select>
        </div>
      </div>

      {/* Product Grid with Expanded Cards */}
      <div
        className="products-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2rem',
          marginBottom: '4rem'
        }}
      >
        {paginatedProducts.map((product) => (
          <div style={{ minHeight: '550px' }} key={product.id}>
            <ProductCard product={product} addToCart={addToCart} />
          </div>
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="pagination" style={{ marginBottom: '3rem', textAlign: 'center' }}>
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            style={{ marginRight: '1rem' }}
          >
            Previous
          </button>
          <span>Page {currentPage} of {totalPages}</span>
          <button
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            style={{ marginLeft: '1rem' }}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default LuxuryWatches;
