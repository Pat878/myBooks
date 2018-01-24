var React = require("react");
var HashRouter = require("react-router-dom").HashRouter;
var Route = require("react-router-dom").Route;
var Switch = require("react-router-dom").Switch;

var Index = require("./Index");
var Show = require("./Show");
var Edit = require("./Edit");
var Nav = require("./Nav");
var Main = require("./Main");
var Footer = require("./Footer");
var Loading = require("./Loading");

class Routes extends React.Component {
  render() {
    const IndexRoute = props => {
      return (
        <div>
          <Nav history={this.props.history} />
          <Main />
          {this.props.showLoading ? (
            <Loading />
          ) : (
            <Index
              books={this.props.books}
              showBookOnClick={this.props.showBookOnClick}
            />
          )}
          <Footer />
        </div>
      );
    };

    const ShowRoute = props => {
      return (
        <div>
          <Nav />
          <Main />
          {this.props.showLoading ? (
            <Loading />
          ) : (
            <Show
              books={this.props.books}
              fields={this.props.fields}
              bookId={this.props.bookId}
              goBack={this.props.goBack}
              showloading={this.props.showLoading}
              showDirectBook={this.props.showDirectBook}
              editBook={this.props.editBook}
            />
          )}
          <Footer />
        </div>
      );
    };

    const EditRoute = props => {
      return (
        <div>
          <Nav />
          <Main />

          <Edit
            books={this.props.books}
            fields={this.props.fields}
            bookId={this.props.bookId}
            goBack={this.props.goBack}
            showloading={this.props.showLoading}
            showDirectBook={this.props.showDirectBook}
            submitUpdatedBook={this.props.submitUpdatedBook}
            updateForm={this.props.updateForm}
            fields={this.props.fields}
          />

          <Footer />
        </div>
      );
    };

    return (
      <div>
        <HashRouter>
          <div>
            <Switch>
              <Route exact path={"/"} render={IndexRoute} />
              <Route path="/books/:id" render={ShowRoute} />
              <Route path="/edit/:id" render={EditRoute} />
              <Route
                render={function() {
                  return <p>Not Found</p>;
                }}
              />
            </Switch>
          </div>
        </HashRouter>
      </div>
    );
  }
}

module.exports = Routes;
