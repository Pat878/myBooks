var React = require("react");

class Index extends React.Component {
  render() {
    const bookListing = this.props.books.map((book, i) => {
      return (
        <div className="col-md-4">
          <h2 key={book.title}>{book.title}</h2>
          <p>{book.summary}</p>
          <p>
            <a
              className="btn btn-secondary"
              role="button"
              onClick={this.props.showBook.bind(this, i)}
            >
              View details &raquo;
            </a>
          </p>
        </div>
      );
    });

    return (
      <div className="container">
        <div className="row">{bookListing}</div>
        <hr />
      </div>
    );
  }
}

module.exports = Index;
