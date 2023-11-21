import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    login: null,
    isLoggedIn: false,
}

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    addLogin (state, action) {
        state.login = action.payload;
    },
    toggleLogin(state,action) {
        state.isLoggedIn = !state.isLoggedIn
    },
    logOut (state, action) {
        state.login = null;
        state.isLoggedIn = false;
    }
   
  },
});

export const { addLogin, toggleLogin ,logOut} = loginSlice.actions;

export const loginReducer = loginSlice.reducer;