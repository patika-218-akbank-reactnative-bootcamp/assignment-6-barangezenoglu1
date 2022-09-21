import {createSlice} from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
  },
  reducers: {
    setUser: (state, action) => {
      return {
        theme: action.payload,
      };
    },
  },
});
export const {setUser} = userSlice.actions;
export default userSlice.reducer;