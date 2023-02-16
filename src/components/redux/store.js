import { configureStore } from '@reduxjs/toolkit';
import { pokemonApi } from './pokemon';
import { todosApi } from './todos';

export const store = configureStore({
  reducer: {
    [pokemonApi.reducerPath]: pokemonApi.reducer,
    [todosApi.reducerPath]: todosApi.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    pokemonApi.middleware,
    todosApi.middleware,
  ],
});
