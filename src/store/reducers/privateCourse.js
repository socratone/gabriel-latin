import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'privateCourse',
  initialState: {
    title: '',
    items: [],
    image: '',
    courses: [],
  },
  reducers: {
    setPrivateCourse: (state, action) => action.payload
  }
});

export const { setPrivateCourse } = slice.actions;
export default slice.reducer;