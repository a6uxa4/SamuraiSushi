import { FetchArgs, fetchBaseQuery } from "@reduxjs/toolkit/query";

export const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:8080",
});

export const baseQueryWithReauth = async (
  args: FetchArgs | string,
  api: any,
  extraOptions: any
) => {
  const result: any = await baseQuery(args, api, extraOptions);
  if (result?.error?.status === 403 || result?.response?.status === 403) {
    //===== some thing code
  } else if (result?.error?.status === 401 || result?.response?.status) {
    //===== some thing code
  }
  return result;
};
