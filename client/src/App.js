import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route, Switch, HashRouter } from "react-router-dom";
import { createHashHistory } from "history";
import { PropTypes } from "prop-types";

var Index = require("./components/Index");
var Show = require("./components/Show");
var Edit = require("./components/Edit");
var Create = require("./components/Create");
var Main = require("./components/Main");
var Nav = require("./components/Nav");
var Footer = require("./components/Footer");
var Loading = require("./components/Loading");

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
    bookId: 0,
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
      showLoading: true
    });
    let submissionPath = "/books/" + bookId;
    history.push(submissionPath);
    this.showDirectBook();
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

  showEditBookPath = () => {
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
      fields: {}
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

  goBack = () => {
    let submissionPath = "/";
    history.push(submissionPath);
    this.setState({
      showLoading: false,
      fieldErrors: {}
    });
  };

  render() {
    return (
      <div>
        <Nav />
        <Main createBookPath={this.createBookPath} />
        <HashRouter>
          <div>
            <Switch>
              <Route
                exact
                path={"/"}
                render={props =>
                  this.state.showLoading ? (
                    <Loading />
                  ) : (
                    <Index
                      books={this.state.books}
                      showBookOnClick={this.showBookOnClick}
                    />
                  )
                }
              />
              <Route
                path="/books/:id"
                render={props =>
                  this.state.showLoading ? (
                    <Loading />
                  ) : (
                    <Show
                      books={this.state.books}
                      fields={this.state.fields}
                      bookId={this.state.bookId}
                      goBack={this.goBack}
                      showDirectBook={this.showDirectBook}
                      showEditBookPath={this.showEditBookPath}
                      handleDelete={this.handleDelete}
                    />
                  )
                }
              />
              <Route
                path="/edit/:id"
                render={props => (
                  <Edit
                    fields={this.state.fields}
                    goBack={this.goBack}
                    submitUpdatedBook={this.submitUpdatedBook}
                    updateForm={this.updateForm}
                    handleDelete={this.handleDelete}
                  />
                )}
              />
              <Route
                path="/create"
                render={props => (
                  <Create
                    createBookPathprops={this.createBookPath}
                    fields={this.state.fields}
                    goBack={this.goBack}
                    updateForm={this.updateForm}
                    submitNewBook={this.submitNewBook}
                    fieldErrors={this.state.fieldErrors}
                  />
                )}
              />
              <Route
                render={function() {
                  return <p>Not Found</p>;
                }}
              />
            </Switch>
          </div>
        </HashRouter>
        <Footer />
      </div>
    );
  }
}

App.propTypes = {
  books: PropTypes.array,
  fields: PropTypes.object,
  fieldErrors: PropTypes.object,
  bookId: PropTypes.number,
  showLoading: PropTypes.bool
};

export default App;
