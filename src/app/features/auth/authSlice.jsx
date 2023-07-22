import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    userId: "",
    email: "",
    role: ""
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, {payload}) => {
            state.userId = payload._id;
            state.email = payload.email;
            state.role = payload.role;
        },
        logout: (state)=>{
            state.email = "";
            state.role = "";
            state.userId = "";
        }
    }
})



export const {login, logout} = authSlice.actions;

export default authSlice.reducer;