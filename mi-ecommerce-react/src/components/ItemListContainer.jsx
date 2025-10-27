import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';
import { products as mockProducts } from '../data/products.js';
import './ItemListContainer.css';

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    const getProducts = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (categoryId) {
          const filteredProducts = mockProducts.filter(product => product.category === categoryId);
          resolve(filteredProducts);
        } else {
          resolve(mockProducts);
        }
      }, 500);
    });

    getProducts.then((data) => {
      setProducts(data);
    });

  }, [categoryId]);

  return (
    <div className="item-list-container">
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;