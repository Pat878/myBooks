var React = require("react");
var HashRouter = require("react-router-dom").HashRouter;
var Route = require("react-router-dom").Route;
var Switch = require("react-router-dom").Switch;
var PropTypes = require("prop-types");

var Index = require("./Index");
var Show = require("./Show");
var Edit = require("./Edit");
var Create = require("./Create");
var Nav = require("./Nav");
var Main = require("./Main");
var Footer = require("./Footer");
var Loading = require("./Loading");

class Routes extends React.Component {
  render() {
    const IndexRoute = props => {
      return (
        <div>
          <Nav />
          <Main createBookPath={this.props.createBookPath} />
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
          <Main createBookPath={this.props.createBookPath} />
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
              showEditBookPath={this.props.showEditBookPath}
              handleDelete={this.props.handleDelete}
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
          <Main createBookPath={this.props.createBookPath} />

          <Edit
            fields={this.props.fields}
            goBack={this.props.goBack}
            submitUpdatedBook={this.props.submitUpdatedBook}
            updateForm={this.props.updateForm}
            handleDelete={this.props.handleDelete}
          />

          <Footer />
        </div>
      );
    };

    const CreateRoute = props => {
      return (
        <div>
          <Nav />
          <Main createBookPath={this.props.createBookPath} />
          <Create
            fields={this.props.fields}
            goBack={this.props.goBack}
            updateForm={this.props.updateForm}
            submitNewBook={this.props.submitNewBook}
            fieldErrors={this.props.fieldErrors}
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
              <Route path="/create" render={CreateRoute} />
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
