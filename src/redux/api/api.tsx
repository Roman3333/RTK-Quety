import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { IProduct } from '../../types/products';
const API_URL = 'http://localhost:3000/';

export const apiSlice = createApi({
  reducerPath: 'api',
  tagTypes: ['Products'],
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (builder) => ({
    getProducts: builder.query<IProduct[], null>({
      query: () => '/products',
      providesTags: ['Products'],
    }),
    getProduct: builder.query<IProduct, string>({
      query: (id) => `/products${id}`,
      providesTags: ['Products'],
    }),
    createProducts: builder.mutation<null, IProduct>({
      query: (product) => ({
        body: product,
        url: '/products',
        method: 'POST',
      }),
      invalidatesTags: ['Products'],
    }),
    updateProduct: builder.mutation<IProduct, IProduct>({
      query: (product) => ({
        url: `/products/${product.id}`,
        method: 'PUT',
        body: product,
      }),
      invalidatesTags: ['Products'],
    }),
    deleteProduct: builder.mutation<null, string>({
      query: (id) => ({
        url: `/products/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Products'],
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductQuery,
  useCreateProductsMutation,
  useUpdateProductMutation,
  useDeleteProductMutation,
} = apiSlice;
