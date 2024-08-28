// pages/index.tsx
import React from "react";
import ProductCard from "./index";

const Home: React.FC = () => {
  const product = {
    image: "/path-to-your-image.jpg",
    name: "Название товара",
    composition: "Состав товара",
    weight: 500, // вес в граммах
    price: 499, // цена в рублях
  };

  return (
    <div style={styles.container}>
      <ProductCard
        image={product.image}
        name={product.name}
        composition={product.composition}
        weight={product.weight}
        price={product.price}
      />
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  },
};

export default Home;
