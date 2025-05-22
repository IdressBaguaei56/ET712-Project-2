import React from 'react';
import PropTypes from 'prop-types';

const ModalWindow = ({ product, onClose, addToCart }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h2>{product.name}</h2>
          <button className="close-modal" onClick={onClose}>×</button>
        </div>
        <div className="modal-body">
          <div className="modal-image">
            <img src={product.image} alt={product.name} />
          </div>
          <div className="modal-details">
            <h3 className="modal-price">${product.price.toLocaleString()}</h3>
            <p className="modal-description">{product.description}</p>
            
            {product.features && product.features.length > 0 && (
              <div className="modal-features">
                <h4>Features:</h4>
                <ul>
                  {product.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
            )}
            
            <button className="modal-add-btn" onClick={addToCart}>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

ModalWindow.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    features: PropTypes.arrayOf(PropTypes.string)
  }).isRequired,
  onClose: PropTypes.func.isRequired,
  addToCart: PropTypes.func.isRequired
};

export default ModalWindow;