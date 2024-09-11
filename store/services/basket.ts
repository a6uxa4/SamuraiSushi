import { createApi } from "@reduxjs/toolkit/query/react";

import { baseQueryWithReauth } from "../interceptor";
import { IBasketCreate, IBasketGetAll } from "../common/basket.common";

export const basketApi = createApi({
  reducerPath: "basketApi",
  baseQuery: baseQueryWithReauth,
  tagTypes: ["basket"],
  endpoints: (builder) => ({
    createBasket: builder.mutation<void, IBasketCreate>({
      query: (body) => {
        return {
          url: "/basket",
          method: "POST",
          body,
        };
      },
      invalidatesTags: ["basket"],
    }),
    getAllBasket: builder.query<IBasketGetAll, number>({
      query: (userId) => {
        return {
          url: `/basket?userId=${userId}`,
          method: "GET",
        };
      },
      providesTags: ["basket"],
    }),
  }),
});

export const { useCreateBasketMutation, useGetAllBasketQuery } = basketApi;
