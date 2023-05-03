import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const contentApi = createApi({
    reducerPath : 'contentApi',
    baseQuery : fetchBaseQuery({ baseUrl : 'https://contact-app.mmsdev.site/api/v1' }),
    tagTypes : ['contentApi'],
    endpoints : (builder) => ({
        register : builder.mutation({
            query:(user) => ({
                url : '/register',
                method : 'POST',
                body : user
            }),
            invalidatesTags : ['contentApi'] 
        }),
        login: builder.mutation({
            query:(userData) => ({
                url:'/login',
                method:'POST',
                body:userData
            }),
            invalidatesTags:['contentApi']
        }),
        logout: builder.mutation({
            query:(token) => ({
                url:'user-logout',
                method:'POST',
                headers : {authorization:`Bearer ${token}`}
            }),
            invalidatesTags:['contentApi']
        }),
        contact: builder.query({
            query:({token}) => ({
                url:'/contact',
                headers:{authorization:`Bearer ${token}`}
            }),
            providesTags:['contentApi']
        }),
        deleteContact : builder.mutation({
            query:({token,id}) => ({
                url : `contact/${id}`,
                method : 'DELETE',
                body : id,
                headers:{authorization:`Bearer ${token}`}
            }),
            invalidatesTags:['contentApi']
        }),
        createContact : builder.mutation({
            query:({token,contact}) => ({
                url : '/contact',
                method : 'POST',
                body : contact,
                headers:{authorization:`Bearer ${token}`}
            }),
            invalidatesTags : ['contentApi'] 
        }),
        updateContact : builder.mutation({
            query:({id,contact,token}) => ({
                url : `/contact/${id}`,
                method : 'PUT',
                body : contact,
                headers:{authorization:`Bearer ${token}`}
            }),
            invalidatesTags : ['contentApi'] 
        }),
       singleContact: builder.query({
            query:({token,id}) => ({
                url:`/contact/${id}`,
                headers:{authorization:`Bearer ${token}`}
            }),
            providesTags:['contentApi']
        }),
    }) 
})

export const {useRegisterMutation,
                useLoginMutation,
                useLogoutMutation,
                useContactQuery,
                useDeleteContactMutation,
                useCreateContactMutation,
                useSingleContactQuery,
                useUpdateContactMutation} = contentApi;