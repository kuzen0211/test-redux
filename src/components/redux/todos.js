import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const todosApi = createApi({
  reducerPath: 'todosApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://63ea742c811db3d7ef0eb6e0.mockapi.io/',
  }),
  tagTypes: ['Todo'],
  endpoints: builder => ({
    fetchTodos: builder.query({
      query: () => `/contacts`,
      providesTags: ['Todo'],
    }),

    deleteTodos: builder.mutation({
      query: todosId => ({
        url: `/contacts/${todosId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Todo'],
    }),

    createTodos: builder.mutation({
      query: newTodo => ({
        url: '/contacts',
        method: 'POST',
        body: newTodo,
      }),
      invalidatesTags: ['Todo'],
    }),
  }),
});

export const {
  useFetchTodosQuery,
  useDeleteTodosMutation,
  useCreateTodosMutation,
} = todosApi;
