import React from 'react';
import products from '../data/products';
import ProductCard from '../components/ProductCard';
import './Home.css'; // Lo vamos a crear ahora

const Home = () => {
  return (
    <div className="home-container">
      <h1 className="home-title">Bienvenida a Flor de Sombra</h1>
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            description={product.description}
            price={product.price}
            sku={product.sku}
            image={product.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
