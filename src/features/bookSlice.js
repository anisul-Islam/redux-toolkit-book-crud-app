import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [
    { id: 1, title: 'X', author: 'anisul', price: 12, quantity: 15 },
    { id: 2, title: 'Y', author: 'mark', price: 15, quantity: 80 },
  ],
};

const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    deleteBook: (state, action) => {
      const id = action.payload;
      state.books = state.books.filter((book) => book.id !== id);
    },
    updateBook: (state, action) => {
      const { id, title, author, price, quantity } = action.payload;
      const exisitingBook = state.books.find((book) => book.id === id);
      if (exisitingBook) {
        exisitingBook.title = title;
        exisitingBook.author = author;
        exisitingBook.price = price;
        exisitingBook.quantity = quantity;
      }
    },
    addBook: (state, action) => {
      state.books.push(action.payload);
    },
  },
});

export const { deleteBook, addBook, updateBook } = bookSlice.actions;

export default bookSlice.reducer;
