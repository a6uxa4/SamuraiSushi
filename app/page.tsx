import { Button } from "@mantine/core";
import { CardsCarousel } from "../screens/banner";

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
        <Button variant="outline">КОРЗИНА</Button>
        <Button variant="primary">КОРЗИНА</Button>
        <Button variant="text">КОРЗИНА</Button>
      </div>
    </div>
  );
}
