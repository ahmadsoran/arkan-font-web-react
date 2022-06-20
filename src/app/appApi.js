import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
// const ServerUrl = 'http://localhost:5000'
const ServerUrl = 'https://arkanback.vercel.app'
export const appApi = createApi({
    reducerPath: 'appApi',
    baseQuery: fetchBaseQuery({
        baseUrl: ServerUrl,
    }),
    endpoints: (builder) => ({
        getFontsData: builder.query({
            query: (sort) => `/getFonts?sort=${sort.sort}&category=${sort.category || 'all'}`,
        }),
        downloadFont: builder.mutation({
            query: (fontID) => ({
                url: "/downloadFont",
                method: "POST",
                body: fontID,
                credentials: 'include',
            })
        }),

        sendVisits: builder.query({
            query: (timezone) => `/visitors?location=${timezone}`,
        }),

    }),

})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
    useGetFontsDataQuery,
    useDownloadFontMutation,
    useSendVisitsQuery,
} = appApi