import { createSlice } from "@reduxjs/toolkit";

export const todosSlice = createSlice({
  name: "todos",
  initialState: {},
  reducers: {
    _: (state) => {
      console.log(state);
    },
  },
});

export const {} = todosSlice.actions;
