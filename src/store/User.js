import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    name: "",
    email: "",
    password: "",
    isLoggedIn: false,
  },
  reducers: {
    setUser: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.password = action.payload.password;
      state.isLoggedIn = action.payload.isLoggedIn;
    },
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
