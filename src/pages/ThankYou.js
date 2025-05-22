// src/pages/ThankYou.js
import React from 'react';
import { Link } from 'react-router-dom';

const ThankYou = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>🎉 Thank You for Your Purchase!</h1>
      <p style={styles.message}>
        We truly appreciate your business and hope you enjoy your new timepiece.
        If you have any questions, feel free to contact us. We’re always here to help!
      </p>
      <Link to="/" style={styles.link}>← Continue Shopping</Link>
    </div>
  );
};

const styles = {
  container: {
    padding: '60px',
    textAlign: 'center',
    fontFamily: 'Segoe UI, sans-serif',
  },
  title: {
    fontSize: '2.5rem',
    marginBottom: '20px',
    color: '#9b734c',
  },
  message: {
    fontSize: '1.2rem',
    marginBottom: '30px',
    color: '#333',
  },
  link: {
    fontSize: '1rem',
    padding: '10px 20px',
    backgroundColor: '#9b734c',
    color: '#fff',
    borderRadius: '5px',
    textDecoration: 'none',
  },
};

export default ThankYou;
