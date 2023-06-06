import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const personsInfoApi = createApi({
    reducerPath: 'personsInfoApi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://jsonplaceholder.typicode.com/'}),
    endpoints: (build) => ({
        getPersonsInfo: build.query({
            query: () => ({
                url: '/users',
                method: 'GET'
            }),
            transformResponse: (res) => res
        }),
        getPersonsPhoto: build.query({
            query: () => ({
                url: '/photos',
                method: 'GET'
            }),
            transformResponse: (res) => res
        }),
    })
});

export const {
    useGetPersonsInfoQuery,
    useGetPersonsPhotoQuery,
} = personsInfoApi;