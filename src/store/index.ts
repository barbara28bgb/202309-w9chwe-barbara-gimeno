import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { contactsReducer } from "./feature/contactSlice/contactSlice";

export const store = configureStore({
  reducer: {
    contactsState: contactsReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
