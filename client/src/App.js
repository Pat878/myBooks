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
  constructor() {
    super();
    this.state = {
      books: [],
      title: "",
      author: "",
      summary: "",
      bookId: "",
      history: createHashHistory(),
      showLoading: true
    };
  }

  componentDidMount = () => {
    api
      .getBooks("books")
      .then(books => this.setState({ books: books, showLoading: false }));
  };

  handleDelete = (i, e) => {
    var array = this.state.books;
    var index = array[i].id;
    api.deleteBook(index).then(this.removeBook(i, e));
  };

  removeBook = (i, e) => {
    var array = this.state.books;

    this.setState({
      books: this.state.books.filter(function(book) {
        return book !== array[i];
      })
    });
  };

  addTitle = e => {
    this.setState({ title: e.target.value });
  };

  addAuthor = e => {
    this.setState({ author: e.target.value });
  };

  addBook = () => {
    let book = { author: this.state.author, title: this.state.title };
    api
      .createBook()
      .then(responseJson => {
        this.handleSubmit(responseJson);
      })
      .catch(error => {
        console.log(error);
      });
  };

  handleSubmit = book => {
    var newState = this.state.books.concat(book);
    this.setState({ books: newState, title: "", author: "" });
  };

  showBookOnClick = i => {
    let allBooks = this.state.books;
    let bookId = allBooks[i].id;
    this.setState({
      bookId: bookId,
      history: history
    });
    let submissionPath = "/books/" + bookId;
    history.push(submissionPath);
    this.showDirectBook()
  };

  goBack = () => {
    let submissionPath = "/";
    history.push(submissionPath);
    this.setState({
      title: "",
      author: "",
      summary: "",
      history: history,
      showLoading: true
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
      author: responseJson.author,
      title: responseJson.title,
      summary: responseJson.summary,
      showLoading: false
    });
  };

  render() {
    return (
      <div>
        <Routes
          books={this.state.books}
          title={this.state.title}
          author={this.state.author}
          bookId={this.state.bookId}
          history={this.state.history}
          handleSubmit={this.handleSubmit}
          handleDelete={this.handleDelete}
          addBook={this.addBook}
          createBook={this.createBook}
          addAuthor={this.addAuthor}
          addTitle={this.addTitle}
          removeBook={this.removeBook}
          showBookOnClick={this.showBookOnClick.bind(this)}
          goBack={this.goBack}
          showLoading={this.state.showLoading}
          showDirectBook={this.showDirectBook}
        />
      </div>
    );
  }
}

App.propTypes = {
  books: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  bookId: PropTypes.string.isRequired,
  history: PropTypes.func.isRequired
};

export default App;
