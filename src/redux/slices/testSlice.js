import { createSlice } from "@reduxjs/toolkit";

export const testSlice = createSlice({
  name: "test",
  initialState: {
    test: [],
  },

  reducers: {
    addTodo: (state, action) => {
      state.test.push(action.payload);
    },
    addQuestion: (state, action) => {
      const currentTest = state.test.find((item) => item.id === action.payload);

      currentTest.questions.push(action.payload.mainId);
    },
    // addVariant: (state, action) => {

      
    // }
  },
});

export const { addTodo, addQuestion } = testSlice.actions;
