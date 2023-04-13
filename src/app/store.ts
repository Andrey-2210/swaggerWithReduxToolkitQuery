import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import {emptyApi} from "./api/emptyApi";

// конфигурация Redux store для хранения api
export const store = configureStore({
  reducer: {
    [emptyApi.reducerPath]: emptyApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(
          emptyApi.middleware,
      ),
  devTools: process.env.NODE_ENV !== "production",
});;

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
