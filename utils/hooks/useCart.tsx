"use client";

import { useUuid } from "../../providers/UuiProvider";
import { IProductInner } from "../../store/common/basket.common";
import {
  useCreateBasketMutation,
  useDeleteBasketByProductIdMutation,
  useGetAllBasketQuery,
} from "../../store/services/basket";

export const useCart = () => {
  const { uuid = null } = useUuid();

  const { data = { products: [], totalQuantity: 0, totalSum: 0 } } =
    useGetAllBasketQuery(uuid, {
      skip: uuid === null,
    });

  const { products, totalQuantity, totalSum } = data;

  const isInCart = (productId: number) =>
    products.some((item) => item.productId === productId);

  const totalProductQuantity = (productId: number) =>
    products.filter((item) => item.productId === productId).length;

  const totalProductPrice = (productId: number) => {
    const productItems = products.filter(
      (item) => item.productId === productId
    );
    return productItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const [handleAddedProduct] = useCreateBasketMutation();
  const [handleDeleteProduct] = useDeleteBasketByProductIdMutation();

  const addBasket = async (body: IProductInner) => {
    try {
      await handleAddedProduct({ body, userId: uuid }).unwrap();
    } catch (error) {}
  };

  const deleteBasket = async (productId: number) => {
    try {
      await handleDeleteProduct({ productId, userId: uuid }).unwrap();
    } catch (error) {}
  };

  return {
    products,
    totalQuantity,
    totalSum,
    isInCart,
    addBasket,
    deleteBasket,
    totalProductQuantity,
    totalProductPrice,
  };
};
