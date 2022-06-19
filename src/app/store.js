import { configureStore } from '@reduxjs/toolkit';
import FontSizeSlice from '../features/FontSizeSlice'
import TextTestSlice from '../features/TextTestSlice'
import SearchByNameSlice from '../features/SearchByNameSlice'
import OpenFontsModal from '../features/OpenFontModalSlice'
import { appApi } from './appApi';
export const store = configureStore({
  reducer: {
    FontSizeSlice,
    TextTestSlice,
    SearchByNameSlice,
    [appApi.reducerPath]: appApi.reducer,
    OpenFontsModal,


  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(appApi.middleware),
});
