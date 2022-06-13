import { configureStore } from '@reduxjs/toolkit';
import FontSizeSlice from '../features/FontSizeSlice'
import TextTestSlice from '../features/TextTestSlice'
import SearchByNameSlice from '../features/SearchByNameSlice'
export const store = configureStore({
  reducer: {
    FontSizeSlice,
    TextTestSlice,
    SearchByNameSlice
  },
});
