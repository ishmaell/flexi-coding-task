import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from '../features/repository/repositoryApiSlice';
import collabReducer from '../features/collaborators/collaboratorsSlice';

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    collaborators: collabReducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(apiSlice.middleware);
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
