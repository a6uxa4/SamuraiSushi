import classes from "./style.module.css";
import product from "../../public/product.json";
import ProductCard from "../../components/UI/ReusableCard";

export const ProductPage = () => {
  return (
    <div className={classes.container}>
      {product.map(({ tabId, title, content }) => (
        <div key={tabId}>
          <h1>{title}</h1>
          {content.map((product) => (
            <ProductCard key={product.productId} {...product} />
          ))}
        </div>
      ))}
    </div>
  );
};
