import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    login: null,
    isLoggedIn: false,
}

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    addLogin (state, {payload}) {
        state.login = payload;
    },
    toggleLogin(state) {
        state.isLoggedIn = !state.isLoggedIn
    },
    logOut (state) {
        state.isLoggedIn = false;
    }
   
  },
});

export const { addLogin, toggleLogin ,logOut} = loginSlice.actions;

export const loginReducer = loginSlice.reducer;