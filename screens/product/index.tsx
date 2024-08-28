import classes from "./style.module.css";

import data from "../../public/product.json";
import ProductCard from "../../components/UI/ReusableCard";

export const ProductPage = () => {
  return (
    <div className={classes.container}>
      {data.map((item) => (
        <div key={item.tabId}>
          <h1>{item.title}</h1>
          {item.content.map((product) => (
            <div
              key={product.productId}
              style={{
                width: "300px",
                height: "400px",
                border: "1px solid orange",
              }}
            >
              <ProductCard />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
