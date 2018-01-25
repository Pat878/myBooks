var React = require("react");
var PropTypes = require("prop-types");

const Index = props => {
  const bookListing = props.books.map((book, i) => {
    return (
      <div className="col-md-4" key={book.title}>
        <h2>{book.title}</h2>
        <p>
          <a
            className="btn btn-secondary"
            role="button"
            onClick={props.showBookOnClick.bind(this, i)}
          >
            View details &raquo;
          </a>
        </p>
      </div>
    );
  });

  return (
    <div className="container">
      <center>
        <div className="row">{bookListing}</div>
        <hr />
      </center>
    </div>
  );
};

Index.propTypes = {
  books: PropTypes.array.isRequired,
  showBookOnClick: PropTypes.func.isRequired
};

module.exports = Index;
