import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    user:null,
    token:null
}
export const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{
        addUser:(state,{payload}) => {
            state.user = payload.user
            state.token = payload.token
            localStorage.setItem('user',JSON.stringify(state.user))
            localStorage.setItem('token',state.token)
        },
        removeUser:(state) => {
            state.user = null,
            state.token = null,
            localStorage.removeItem('user')
            localStorage.removeItem('token')
        }
    }
});

export const {addUser,removeUser} = authSlice.actions;
export default authSlice.reducer