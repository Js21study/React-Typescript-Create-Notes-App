import { configureStore } from '@reduxjs/toolkit';
import note from './slices/noteSlice';
import archive from './slices/archiveSlice';
import { useDispatch } from 'react-redux';

export const store = configureStore({
  reducer: {
    note,
    archive,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
