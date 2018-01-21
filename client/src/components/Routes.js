var React = require("react");
var Router = require("react-router-dom").Router;
var Route = require("react-router-dom").Route;
var Switch = require("react-router-dom").Switch;

var Index = require("./Index");
var Show = require("./Show");
var Nav = require("./Nav");
var Main = require("./Main");
var Footer = require("./Footer");

class Routes extends React.Component {
  render() {
    const IndexRoute = props => {
      return (
        <div>
          <Nav />
          <Main />
          <Index books={this.props.books} showBook={this.props.showBook} />
          <Footer />
        </div>
      );
    };

    const ShowRoute = props => {
      return (
        <div>
          <Nav />
          <Main />
          <Show
            books={this.props.books}
            title={this.props.title}
            author={this.props.author}
            summary={this.props.summary}
            bookId={this.props.bookId} goBack={this.props.goBack}
          />
          <Footer />
        </div>
      );
    };

    return (
      <div>
        <Router history={this.props.history}>
          <div>
            <Switch>
              <Route exact path={"/"} render={IndexRoute} />
              <Route path="/books/:id" render={ShowRoute} />
              <Route
                render={function() {
                  return <p>Not Found</p>;
                }}
              />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

module.exports = Routes;
