import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Инициализация апи с необходимыми настройками
export const emptyApi = createApi({
    reducerPath: 'emptyApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://petstore3.swagger.io/api/v3/' }),
    endpoints: () => ({}),
})
