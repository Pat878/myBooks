import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Router, Route, Switch, HashRouter } from "react-router-dom";
import { createHashHistory } from "history";
import PropTypes from "prop-types";

var Routes = require("./components/Routes");
var history = createHashHistory();
var api = require("./utils/api");

class App extends Component {
  state = {
    books: [],
    fields: {
      title: "",
      author: "",
      summary: ""
    },
    fieldErrors: {},
    bookId: "",
    history: createHashHistory(),
    showLoading: true
  };

  componentDidMount = () => {
    api
      .getBooks("books")
      .then(books => this.setState({ books: books, showLoading: false }));
  };

  handleDelete = () => {
    let stateArray = this.state.books;
    let currentBookIndex;
    for (let i = 0; i < stateArray.length; i++) {
      if (stateArray[i].id === this.state.bookId) {
        currentBookIndex = i;
      }
    }
    let bookToDelete = stateArray[currentBookIndex].id;
    api.deleteBook(bookToDelete).then(this.removeBook(currentBookIndex));
  };

  removeBook = i => {
    let stateArray = this.state.books;

    this.setState({
      books: this.state.books.filter(function(book) {
        return book !== stateArray[i];
      })
    });
    this.goBack();
  };

  submitNewBook = () => {
    let book = this.state.fields;
    let fieldErrors = this.validate(book);
    this.setState({ fieldErrors });
    if (Object.keys(fieldErrors).length) return;

    api
      .createBook(book)
      .then(responseJson => {
        this.handleSubmit(responseJson);
      })
      .catch(error => {
        console.log(error);
      });
  };

  handleSubmit = book => {
    let newState = this.state.books.concat(book);
    this.setState({
      books: newState,
      fields: {
        title: "",
        author: "",
        summary: ""
      }
    });
    let submissionPath = "/";
    history.push(submissionPath);
  };

  showBookOnClick = i => {
    let allBooks = this.state.books;
    let bookId = allBooks[i].id;
    this.setState({
      bookId: bookId,
      showLoading: true,
      history: history
    });
    let submissionPath = "/books/" + bookId;
    history.push(submissionPath);
    this.showDirectBook();
  };

  goBack = () => {
    let submissionPath = "/";
    history.push(submissionPath);
    this.setState({
      history: history,
      showLoading: false,
      fieldErrors: {}
    });
  };

  showDirectBook = () => {
    let url = window.location.href;
    let regex = /\d+/g;
    api
      .getBook("books/" + url.match(regex)[1])
      .then(responseJson => this.setBook(responseJson));
  };

  setBook = responseJson => {
    this.setState({
      fields: {
        author: responseJson.author,
        title: responseJson.title,
        summary: responseJson.summary
      },
      bookId: responseJson.id,
      showLoading: false
    });
  };

  updateForm = e => {
    const fields = this.state.fields;
    fields[e.target.name] = e.target.value;
    this.setState({ fields });
  };

  editBook = () => {
    this.showDirectBook();
    let bookId = this.state.bookId;
    let submissionPath = "/edit/" + bookId;
    history.push(submissionPath);
  };

  setBookObject = () => {
    let book = this.state.fields;
    return book;
  };

  submitUpdatedBook = () => {
    api
      .submitUpdatedBook(this.setBookObject(), this.state.bookId)
      .then(responseJson => {
        this.handleUpdate(responseJson);
      })
      .catch(error => {
        console.log(error);
      });
    let submissionPath = "/";
    history.push(submissionPath);
  };

  handleUpdate = book => {
    let newState = this.state.books;

    for (let i = 0; i < newState.length; i++) {
      if (newState[i].id === book.id) {
        newState[i] = book;
      }
    }

    this.setState({
      books: newState,
      fields: {},
      history: history
    });
  };

  createBookPath = () => {
    let submissionPath = "/create";
    history.push(submissionPath);
    this.setState({
      fields: {
        title: "",
        author: "",
        summary: ""
      }
    });
  };

  validate = book => {
    const errors = {};
    if (!book.title) errors.title = "Title Required";
    if (!book.author) errors.author = "Author Required";
    if (!book.summary) errors.summary = "Summary Required";
    return errors;
  };

  render() {
    return (
      <div>
        <Routes
          books={this.state.books}
          fields={this.state.fields}
          bookId={this.state.bookId}
          history={this.state.history}
          handleSubmit={this.handleSubmit}
          handleDelete={this.handleDelete}
          submitNewBook={this.submitNewBook}
          removeBook={this.removeBook}
          showBookOnClick={this.showBookOnClick.bind(this)}
          goBack={this.goBack}
          showLoading={this.state.showLoading}
          showDirectBook={this.showDirectBook}
          editBook={this.editBook}
          submitUpdatedBook={this.submitUpdatedBook}
          updateForm={this.updateForm}
          createBookPath={this.createBookPath}
          fieldErrors={this.state.fieldErrors}
        />
      </div>
    );
  }
}

App.propTypes = {
  books: PropTypes.array,
  title: PropTypes.string,
  author: PropTypes.string,
  summary: PropTypes.string,
  bookId: PropTypes.string,
  history: PropTypes.func
};

export default App;
