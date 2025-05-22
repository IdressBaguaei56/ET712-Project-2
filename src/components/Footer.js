// src/components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer
      className="site-footer"
      style={{
        backgroundColor: '#8a6b44',
        color: '#fff',
        padding: '4rem 2rem 2rem',
        fontSize: '0.95rem',
      }}
    >
      <div
        className="footer-container"
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          gap: '2rem',
          lineHeight: '1.7',
        }}
      >
        <div style={{ flex: '1 1 200px', minWidth: '220px' }}>
          <h3 style={{ marginBottom: '1rem', color: '#fff' }}>
            ⏱️ <span style={{ color: '#fddc9b' }}>OClock</span>
          </h3>
          <p>
            The place for luxurious watches just for you.
            <br /> For microcredential: Project 2
          </p>
        </div>

        <div style={{ flex: '1 1 150px', minWidth: '150px' }}>
          <h4 style={{ color: '#fff', marginBottom: '1rem' }}>Quick Links</h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            <li><a href="/" style={{ color: '#fff', textDecoration: 'none' }}>Home</a></li>
            <li><a href="/luxury-watches" style={{ color: '#fff', textDecoration: 'none' }}>Luxury</a></li>
            <li><a href="/smart-watches" style={{ color: '#fff', textDecoration: 'none' }}>Smart</a></li>
            <li><a href="/cart" style={{ color: '#fff', textDecoration: 'none' }}>Cart</a></li>
          </ul>
        </div>

        <div style={{ flex: '1 1 200px', minWidth: '200px' }}>
          <h4 style={{ color: '#fff', marginBottom: '1rem' }}>Contact Info</h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            <li>📍 Lorem Street, Ipsum, JCH</li>
            <li>📞 +1 123 456 7890</li>
            <li>📧 123@email.com</li>
          </ul>
        </div>

        <div style={{ flex: '1 1 200px', minWidth: '200px' }}>
          <h4 style={{ color: '#fff', marginBottom: '1rem' }}>Stay Connected</h4>
          <p>Thank you for visiting WatchHaven!</p>
        </div>
      </div>

      <hr style={{ border: 'none', borderTop: '1px solid #c7a67a', margin: '2rem 0' }} />

      <div
        className="footer-bottom"
        style={{ textAlign: 'center', fontSize: '0.9rem', color: '#eee' }}
      >
        <p>© Design by Idress Baguaei | All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
