module.exports = {
  getBooks(url) {
    return fetch(url).then(response => response.json());
  },

  deleteBook(bookToDelete) {
    return fetch("books/" + bookToDelete, {
      method: "delete"
    });
  },

  submitUpdatedBook(book, bookId) {
    return fetch("/books/" + bookId, {
      method: "put",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        book
      })
    }).then(response => response.json());
  },

  createBook(book) {
    return fetch("books", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        book
      })
    }).then(response => response.json());
  },

  getBook(url) {
    return fetch(url).then(response => response.json());
  }
};
