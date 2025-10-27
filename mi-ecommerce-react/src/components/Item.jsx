import React from 'react';
import { Link } from 'react-router-dom';
import './Item.css';

const Item = ({ id, name, image, price }) => {
  return (
    <div className="item-card">
      <img src={image} alt={name} className="item-image" />
      <h3 className="item-name">{name}</h3>
      <p className="item-price">${price}</p>
      <Link to={`/item/${id}`} className="item-detail-link">Ver detalle</Link>
    </div>
  );
};

export default Item;
