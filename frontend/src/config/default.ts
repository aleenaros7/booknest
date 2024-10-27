export const config = {
  api: {
    baseUrl: "http://localhost:5000",
    user: {},
    auth: {
      signIn: "/auth/sign-in",
      signUp: "/auth/sign-up",
    },
    books: {
      fetchBooks: "/books/",
      fetchBorrowInfo: "/books/borrow-info",
      fetchBorrowHistory: "/books/borrow-history",
      sendBorrowRequest: "/books/:bookId/borrow-request",
    },
    librarian: {},
  },
};
