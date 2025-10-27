import React from 'react';
import './ItemDetail.css';

// Placeholder for ItemCount component
const ItemCount = ({ stock, onAdd }) => {
  // This will be implemented later
  return (
    <div className="item-count">
      <p>Stock disponible: {stock}</p>
      <button onClick={() => onAdd(1)}>Agregar al carrito</button>
    </div>
  );
};

const ItemDetail = ({ name, description, price, stock, image, category }) => {
  const handleAddToCart = (quantity) => {
    console.log(`Se agregaron ${quantity} unidades de ${name}`);
    // Here you would typically update the cart state
  };

  return (
    <div className="item-detail">
      <div className="item-detail-image-container">
        <img src={image} alt={name} className="item-detail-image" />
      </div>
      <div className="item-detail-info">
        <h2 className="item-detail-name">{name}</h2>
        <p className="item-detail-category">Categoría: {category}</p>
        <p className="item-detail-description">{description}</p>
        <p className="item-detail-price">${price}</p>
        <ItemCount stock={stock} onAdd={handleAddToCart} />
      </div>
    </div>
  );
};

export default ItemDetail;
