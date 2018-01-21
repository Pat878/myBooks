module.exports = {
  getBooks() {
    return fetch("books").then(response => response.json());
  },

  deleteBook(index) {
    return fetch("books/" + index, {
      method: "delete"
    });
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
  }
};
