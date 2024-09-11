"use client";

import { useUuid } from "../../providers/UuiProvider";
import {
  useCreateBasketMutation,
  useGetAllBasketQuery,
} from "../../store/services/basket";

export const useCart = () => {
  const { uuid = null } = useUuid();

  const { data } = useGetAllBasketQuery(uuid, { skip: uuid === null });

  const [handleAddedProduct] = useCreateBasketMutation();

  return { data };
};
