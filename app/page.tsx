import { CardsCarousel } from "../screens/banner";
import { ProductPage } from "../screens/product";

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
      <ProductPage />
    </div>
  );
}
