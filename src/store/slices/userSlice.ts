import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type initialUserStateType = {
  user: any;
  isLoggedIn: boolean;
  isLoading: boolean;
};

const initialState: initialUserStateType = {
  user: {},
  isLoading: false,
  isLoggedIn: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setIsLoggedIn(state, action: PayloadAction<boolean>) {
      state.isLoggedIn = action.payload;
    },
    setUser(state, action) {
      state.user = action.payload;
    },
  },
});

export const { setIsLoggedIn, setUser } = userSlice.actions;
export default userSlice.reducer;
