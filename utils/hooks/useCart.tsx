import { useState, useCallback, useEffect } from "react";
import Cookies from "js-cookie";
import { IProductContent } from "../../store/common/product.common";

export const useCart = () => {
  const [cart, setCart] = useState<IProductContent[]>(() => {
    if (typeof window !== "undefined") {
      const savedCart = Cookies.get("cart");
      return savedCart ? JSON.parse(savedCart) : [];
    }
    return [];
  });

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const savedCart = Cookies.get("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  const saveCartToCookies = useCallback((updatedCart: IProductContent[]) => {
    if (typeof window !== "undefined") {
      Cookies.set("cart", JSON.stringify(updatedCart));
    }
  }, []);

  const isInCart = useCallback(
    (id: number) => cart.some((item) => item.productId === id),
    [cart]
  );

  const toggleCartItem = useCallback(
    (product: IProductContent) => {
      setCart((prevCart) => {
        const updatedCart = isInCart(product.productId)
          ? prevCart.filter((item) => item.productId !== product.productId)
          : [...prevCart, { ...product, quantity: 1 }];

        saveCartToCookies(updatedCart);
        return updatedCart;
      });
    },
    [isInCart, saveCartToCookies]
  );

  const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
  const totalProductQuantity = (productId: number) =>
    cart.filter((item) => item.productId === productId).length;

  return {
    cart,
    totalQuantity,
    isInCart,
    toggleCartItem,
    isClient,
    totalProductQuantity,
  };
};
