// components/ProductCard.tsx
import React from "react";

type ProductCardProps = {
  image: string;
  name: string;
  composition: string;
  weight: number;
  price: number;
};

const ProductCard: React.FC<ProductCardProps> = ({
  image,
  name,
  composition,
  weight,
  price,
}) => {
  return (
    <div style={styles.card}>
      <img src={image} alt={name} style={styles.image} />
      <h2 style={styles.name}>{name}</h2>
      <p style={styles.composition}>Состав: {composition}</p>
      <p style={styles.weight}>Вес: {weight} г</p>
      <p style={styles.price}>{price}₽</p>
    </div>
  );
};

const styles = {
  card: {
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "16px",
    maxWidth: "300px",
    textAlign: "center" as const,
  },
  image: {
    width: "100%",
    height: "auto",
    borderRadius: "8px",
  },
  name: {
    fontSize: "1.5rem",
    margin: "16px 0",
  },
  composition: {
    fontSize: "1rem",
    color: "#555",
  },
  weight: {
    fontSize: "1rem",
    color: "#555",
  },
  price: {
    fontSize: "1.2rem",
    color: "#000",
    fontWeight: "bold" as const,
  },
};

export default ProductCard;
