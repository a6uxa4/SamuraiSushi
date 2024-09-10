import { configureStore } from "@reduxjs/toolkit";
import { basketApi } from "./services/basket";

const store = configureStore({
  reducer: {
    [basketApi.reducerPath]: basketApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({}).concat([basketApi.middleware]),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
