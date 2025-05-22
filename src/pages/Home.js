// src/pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import parallaxImg from '../images/parraleximg.jpeg';

const Home = () => {
  const heroStyles = {
    backgroundImage: `url(${parallaxImg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
    padding: '10rem 1rem',
    position: 'relative',
    textAlign: 'center',
  };

  const overlayStyles = {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // darkens background
    zIndex: 1,
  };

  const heroContentStyles = {
    position: 'relative',
    zIndex: 2,
    color: 'white',
  };

  const heroTitle = {
    fontSize: '3.5rem',
    marginBottom: '1rem',
    color: 'white', // Force white title
  };

  const heroSubtitle = {
    fontSize: '1.3rem',
    marginBottom: '1.5rem',
  };

  const linkContainer = {
    display: 'flex',
    justifyContent: 'center',
    gap: '1rem',
    marginTop: '1rem',
  };

  const navButton = {
    padding: '0.75rem 1.5rem',
    backgroundColor: '#a0763d',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    fontWeight: 'bold',
    textDecoration: 'none',
  };

  const introStyles = {
    maxWidth: '800px',
    margin: '3rem auto',
    padding: '0 1rem',
    textAlign: 'center',
  };

  const introTitle = {
    fontSize: '2rem',
    marginBottom: '1rem',
  };

  const introText = {
    fontSize: '1.1rem',
    color: '#444',
    lineHeight: '1.8',
  };

  return (
    <div className="home-container">
      {/* Hero Banner */}
      <section style={heroStyles}>
        <div style={overlayStyles}></div>
        <div style={heroContentStyles}>
          <h1 style={heroTitle}>Welcome to WatchHaven</h1>
          <p style={heroSubtitle}>Luxury and Smart Watches for the Modern Era</p>
          <div style={linkContainer}>
            <Link to="/luxury-watches" style={navButton}>Shop Luxury</Link>
            <Link to="/smart-watches" style={navButton}>Shop Smart</Link>
          </div>
        </div>
      </section>

      {/* Company Paragraph */}
      <section style={introStyles}>
        <h2 style={introTitle}>Our Commitment to Excellence</h2>
        <p style={introText}>
          At WatchHaven, we pride ourselves on delivering timepieces that embody sophistication, precision, and lasting craftsmanship.
          Whether you're seeking high-end luxury or cutting-edge smart technology, our curated collections ensure quality you can trust and style that stands out.
          Our legacy is built on customer satisfaction, world-class materials, and timeless elegance.
        </p>
      </section>
    </div>
  );
};

export default Home;
