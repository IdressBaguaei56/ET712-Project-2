// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ cartCount }) => {
  const styles = {
    navbar: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '20px 40px',
      backgroundColor: '#fff',
      borderBottom: '1px solid #ddd',
      fontFamily: 'Segoe UI, sans-serif',
    },
    logoText: {
      fontSize: '1.6rem',
      fontWeight: 'bold',
      color: '#9b734c',
      textDecoration: 'none',
    },
    linksList: {
      listStyle: 'none',
      display: 'flex',
      gap: '30px',
      margin: 0,
      padding: 0,
    },
    link: {
      textDecoration: 'none',
      color: '#333',
      fontSize: '1rem',
    },
    linkHover: {
      color: '#9b734c',
    },
    cartWrapper: {
      position: 'relative',
    },
    cartIcon: {
      fontSize: '1.4rem',
      textDecoration: 'none',
      color: '#333',
      position: 'relative',
    },
    badge: {
      position: 'absolute',
      top: '-10px',
      right: '-10px',
      backgroundColor: '#9b734c',
      color: 'white',
      fontSize: '0.7rem',
      padding: '3px 6px',
      borderRadius: '50%',
    },
  };

  return (
    <nav style={styles.navbar}>
      <div className="navbar-logo">
        <Link to="/" style={styles.logoText}>
          ⏱️ WatchHaven
        </Link>
      </div>

      <ul style={styles.linksList}>
        <li><Link to="/" style={styles.link}>Home</Link></li>
        <li><Link to="/luxury-watches" style={styles.link}>Luxury Watches</Link></li>
        <li><Link to="/smart-watches" style={styles.link}>Smart Watches</Link></li>
      </ul>

      <div style={styles.cartWrapper}>
        <Link to="/cart" style={styles.cartIcon}>
          🛒
          {cartCount > 0 && <span style={styles.badge}>{cartCount}</span>}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
