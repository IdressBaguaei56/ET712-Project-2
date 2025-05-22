// src/pages/LuxuryWatches.js
import React, { useState, useEffect, useMemo } from 'react';
import ProductCard from '../components/ProductCard';

import HL1 from '../images/HL1.jpeg';
import HL2 from '../images/HL2.jpeg';
import HL3 from '../images/HL3.jpeg';
import HL4 from '../images/HL4.jpeg';
import HL5 from '../images/HL5.jpeg';
import HL6 from '../images/HL6.jpeg';
import HL7 from '../images/HL7.jpeg';
import HL8 from '../images/HL8.jpeg';
import HL9 from '../images/HL9.jpeg';

const LuxuryWatches = ({ addToCart }) => {
  const [sortOption, setSortOption] = useState('default');
  const [currentPage, setCurrentPage] = useState(1);
  const [paginatedProducts, setPaginatedProducts] = useState([]);
  const productsPerPage = 9;

  const watchesData = useMemo(() => [
    { id: 1, name: 'Royal Elegance', shortDescription: '18k gold watch with hand-crafted detailing.', price: 1599, image: HL1 },
    { id: 2, name: 'Prestige Timepiece', shortDescription: 'Polished rose-gold bezel and sapphire crystal face.', price: 1999, image: HL2 },
    { id: 3, name: 'Midnight Luxe', shortDescription: 'Luxury black and gold design with diamond accents.', price: 2499, image: HL3 },
    { id: 4, name: 'Imperial Chrome', shortDescription: 'Silver-toned body with platinum engraving.', price: 1799, image: HL4 },
    { id: 5, name: 'Vintage Royale', shortDescription: 'Classic design from the 1920s revived.', price: 1899, image: HL5 },
    { id: 6, name: 'Celestial Elite', shortDescription: 'Star map dial under a moonlight-tinted crystal.', price: 2899, image: HL6 },
    { id: 7, name: 'Opulence Noir', shortDescription: 'Minimal black design, gold markers, full class.', price: 2099, image: HL7 },
    { id: 8, name: 'Regal Timekeeper', shortDescription: 'Royal navy dial with chronograph feature.', price: 1995, image: HL8 },
    { id: 9, name: 'Gilded Horizon', shortDescription: 'Dual-tone band with sunrise color spectrum.', price: 2250, image: HL9 },
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
      <div className="category-header" style={{ backgroundColor: '#f3e6d2', padding: '2rem 1rem', textAlign: 'center', borderRadius: '10px', marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '2.5rem', color: '#2c2c2c' }}>Luxury Watches</h1>
        <p style={{ fontSize: '1.1rem', color: '#4a4a4a' }}>
          Timeless elegance and precision craftsmanship
        </p>
      </div>

      <div className="category-controls" style={{ marginBottom: '2rem', textAlign: 'center' }}>
        <div className="product-count">
          <span>{watchesData.length} products</span>
        </div>
        <div className="sort-options" style={{ marginTop: '0.5rem' }}>
          <label htmlFor="sort">Sort by: </label>
          <select id="sort" value={sortOption} onChange={(e) => { setSortOption(e.target.value); setCurrentPage(1); }}>
            <option value="default">Featured</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="name">Name: A to Z</option>
          </select>
        </div>
      </div>

      <div className="products-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem', marginBottom: '4rem' }}>
        {paginatedProducts.map((product) => (
          <div style={{ minHeight: '550px' }} key={product.id}>
            <ProductCard product={product} addToCart={addToCart} />
          </div>
        ))}
      </div>

      {totalPages > 1 && (
        <div className="pagination" style={{ marginBottom: '3rem', textAlign: 'center' }}>
          <button onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))} disabled={currentPage === 1} style={{ marginRight: '1rem' }}>
            Previous
          </button>
          <span>Page {currentPage} of {totalPages}</span>
          <button onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))} disabled={currentPage === totalPages} style={{ marginLeft: '1rem' }}>
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default LuxuryWatches;
