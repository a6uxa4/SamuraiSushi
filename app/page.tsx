"use client";

import { CardsCarousel } from "../screens/banner";
import { Button } from "../theme/components";

export default function HomePage() {
  return (
    <div
      style={{
        width: "100vw",
        maxWidth: "1440px",
        padding: "50px",
      }}
    >
      <CardsCarousel />
      <div style={{ padding: "100px", display: "flex", gap: 10 }}>
        <Button variant="primary">корзина</Button>
        
        <Button variant="text">корзина</Button>
        <Button variant="outline">корзина</Button>
      </div>
    </div>
  );
}
