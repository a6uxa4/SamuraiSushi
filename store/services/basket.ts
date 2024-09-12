import { createApi } from "@reduxjs/toolkit/query/react";

import { baseQueryWithReauth } from "../interceptor";
import {
  IBasketCreate,
  IBasketGetAll,
  IBasketDelete,
} from "../common/basket.common";

export const basketApi = createApi({
  reducerPath: "basketApi",
  baseQuery: baseQueryWithReauth,
  tagTypes: ["basket"],
  endpoints: (builder) => ({
    createBasket: builder.mutation<void, IBasketCreate>({
      query: ({ body, userId }) => {
        return {
          url: `/basket?userId=${userId}`,
          method: "POST",
          body,
        };
      },
      invalidatesTags: ["basket"],
    }),
    getAllBasket: builder.query<IBasketGetAll, string | null>({
      query: (userId) => {
        return {
          url: `/basket?userId=${userId}`,
          method: "GET",
        };
      },
      providesTags: ["basket"],
    }),
    deleteBasketByProductId: builder.mutation<void, IBasketDelete>({
      query: ({ productId, userId }) => {
        return {
          url: `/basket/${productId}?userId=${userId}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["basket"],
    }),
  }),
});

export const {
  useCreateBasketMutation,
  useGetAllBasketQuery,
  useDeleteBasketByProductIdMutation,
} = basketApi;
