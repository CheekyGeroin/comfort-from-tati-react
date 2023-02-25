import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const basketSlice = createSlice({
  name: 'item',
  initialState: [],
  reducers: {
    addItem: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(title, price) {
        return {
          payload: {
            id: nanoid(),
            title,
            price,
          },
        };
      },
    },
    deleteItem(state, action) {
      return [...state.filter(item => item.id !== action.payload)];
    },
  },
});

export const { addItem, deleteItem } = basketSlice.actions;

export const basketReducer = basketSlice.reducer;
