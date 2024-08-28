"use client";

import { CardsCarousel } from "../screens/banner";
import { ProductPage } from "../screens/product";
import { useStore } from "../store/models/useStore";
import { Button } from "../theme/components";

export default function HomePage() {
  const { count, favorite, increaseCount, deleteCount } = useStore();
  return (
    <div
      style={{
        width: "100vw",
        maxWidth: "1440px",
        padding: "50px",
      }}
    >
      <CardsCarousel />
      <ProductPage />
      <div style={{ padding: "100px", display: "flex", gap: 10 }}>
        <Button variant="primary">корзина</Button>

        <Button onClick={deleteCount} variant="text">
          корзинаaaa
        </Button>

        <Button
          variant="outline"
          onClick={increaseCount}
          leftSection={count}
          rightSection={favorite}
        >
          корзина
        </Button>
      </div>
    </div>
  );
}
