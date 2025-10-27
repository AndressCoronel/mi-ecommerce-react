import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import { products as mockProducts } from '../data/products.js';

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const { itemId } = useParams();

  useEffect(() => {
    const getProduct = new Promise((resolve) => {
      setTimeout(() => {
        const foundProduct = mockProducts.find(p => p.id === itemId);
        resolve(foundProduct);
      }, 500);
    });

    getProduct.then((data) => {
      setProduct(data);
    });

  }, [itemId]);

  if (!product) {
    return <div>Cargando...</div>;
  }

  return <ItemDetail {...product} />;
};

export default ItemDetailContainer;
