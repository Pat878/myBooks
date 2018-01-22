module.exports = {
  getBooks(url) {
    return fetch(url).then(response => response.json());
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
  },

  getBook(url) {
    return fetch(url).then(response => response.json());
  }
};
