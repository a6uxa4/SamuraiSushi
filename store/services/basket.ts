import { createApi } from "@reduxjs/toolkit/query/react";

import { baseQueryWithReauth } from "../interceptor";

export const basketApi = createApi({
  reducerPath: "basketApi",
  baseQuery: baseQueryWithReauth,
  tagTypes: ["basket"],
  endpoints: (builder) => ({}),
});

export const {} = basketApi;
