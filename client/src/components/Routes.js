var React = require("react");
var HashRouter = require("react-router-dom").HashRouter;
var Route = require("react-router-dom").Route;
var Switch = require("react-router-dom").Switch;
var PropTypes = require("prop-types");

var Edit = require("./Edit");
var Create = require("./Create");
var Nav = require("./Nav");
var Main = require("./Main");
var Footer = require("./Footer");
var IndexRoute = require("./views/IndexRoute");
var ShowRoute = require("./views/ShowRoute");
var EditRoute = require("./views/EditRoute");
var CreateRoute = require("./views/CreateRoute");

class Routes extends React.Component {
  render() {
    return (
      <div>
        <HashRouter>
          <div>
            <Switch>
              <Route
                exact
                path={"/"}
                render={props => (
                  <IndexRoute
                    createBookPath={this.props.createBookPath}
                    showLoading={this.props.showLoading}
                    books={this.props.books}
                    showBookOnClick={this.props.showBookOnClick}
                  />
                )}
              />
              <Route
                path="/books/:id"
                render={props => (
                  <ShowRoute
                    createBookPath={this.props.createBookPath}
                    showLoading={this.props.showLoading}
                    books={this.props.books}
                    fields={this.props.fields}
                    bookId={this.props.bookId}
                    goBack={this.props.goBack}
                    showDirectBook={this.props.showDirectBook}
                    showEditBookPath={this.props.showEditBookPath}
                    handleDelete={this.props.handleDelete}
                  />
                )}
              />
              <Route
                path="/edit/:id"
                render={props => (
                  <EditRoute
                    createBookPathprops={this.props.createBookPath}
                    fields={this.props.fields}
                    goBack={this.props.goBack}
                    submitUpdatedBook={this.props.submitUpdatedBook}
                    updateForm={this.props.updateForm}
                    handleDelete={this.props.handleDelete}
                  />
                )}
              />
              <Route
                path="/create"
                render={props => (
                  <CreateRoute
                    createBookPathprops={this.props.createBookPath}
                    fields={this.props.fields}
                    goBack={this.props.goBack}
                    updateForm={this.props.updateForm}
                    submitNewBook={this.props.submitNewBook}
                    fieldErrors={this.props.fieldErrors}
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
      </div>
    );
  }
}

Routes.propTypes = {
  fields: PropTypes.objectOf(PropTypes.string).isRequired,
  goBack: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
  showEditBookPath: PropTypes.func.isRequired,
  showDirectBook: PropTypes.func.isRequired,
  books: PropTypes.array.isRequired,
  bookId: PropTypes.number.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  submitNewBook: PropTypes.func.isRequired,
  removeBook: PropTypes.func.isRequired,
  showBookOnClick: PropTypes.func.isRequired,
  showLoading: PropTypes.bool.isRequired,
  submitUpdatedBook: PropTypes.func.isRequired,
  updateForm: PropTypes.func.isRequired,
  createBookPath: PropTypes.func.isRequired,
  fieldErrors: PropTypes.objectOf(PropTypes.string).isRequired
};

module.exports = Routes;
