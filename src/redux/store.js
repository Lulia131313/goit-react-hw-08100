import { configureStore } from "@reduxjs/toolkit";

import { contactReducer } from "./contactsSlice";
import { filterReducer } from "./filtersSlice";
import { authReducer } from "./auth/slise";

export const store = configureStore({
  reducer: {
    contacts: contactReducer,
    filter: filterReducer,
    auth: authReducer,
  },
});
