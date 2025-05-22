// src/pages/Cart.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Cart = ({ cartItems, updateQuantity, clearCart }) => {
  const navigate = useNavigate();

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const taxRate = 0.0816;
  const tax = subtotal * taxRate;
  const total = subtotal + tax;

  const handleCheckout = () => {
    clearCart();
    navigate('/thank-you');
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <table style={styles.table}>
          <thead>
            <tr style={styles.headerRow}>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <tr key={item.id} style={styles.row}>
                <td style={styles.productCell}>
                  <img src={item.image} alt={item.name} style={styles.image} />
                  <span>{item.name}</span>
                </td>
                <td>${item.price.toLocaleString()}</td>
                <td>
                  <input
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={(e) =>
                      updateQuantity(item.id, parseInt(e.target.value, 10))
                    }
                    style={styles.qtyInput}
                  />
                </td>
                <td>${(item.price * item.quantity).toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {cartItems.length > 0 && (
        <div style={styles.summary}>
          <p>Subtotal: ${subtotal.toFixed(2)}</p>
          <p>NY Tax (8.16%): ${tax.toFixed(2)}</p>
          <h3>Total: ${total.toFixed(2)}</h3>
          <button style={styles.checkoutBtn} onClick={handleCheckout}>
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    padding: '40px',
    maxWidth: '1000px',
    margin: '0 auto',
    fontFamily: 'Segoe UI, sans-serif',
  },
  heading: {
    fontSize: '2rem',
    marginBottom: '30px',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    marginBottom: '30px',
  },
  headerRow: {
    borderBottom: '2px solid #ccc',
    textAlign: 'left',
  },
  row: {
    borderBottom: '1px solid #eee',
    height: '80px',
  },
  productCell: {
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
  },
  image: {
    width: '60px',
    height: 'auto',
    borderRadius: '4px',
  },
  qtyInput: {
    width: '60px',
    padding: '6px',
    fontSize: '1rem',
  },
  summary: {
    textAlign: 'right',
    fontSize: '1.1rem',
  },
  checkoutBtn: {
    marginTop: '15px',
    padding: '10px 25px',
    backgroundColor: '#9b734c',
    color: '#fff',
    border: 'none',
    fontSize: '1rem',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default Cart;
