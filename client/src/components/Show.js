var React = require("react");

class Show extends React.Component {
  render() {
    let allBooks = this.props.books;
    let currentBook;

    for (var i = 0; i < allBooks.length; i++) {
      if (allBooks[i].id === this.props.bookId) {
        currentBook = allBooks[i];
      }
    }

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-centered">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{currentBook.title}</h5>
                <h6 className="card-subtitle mb-2 text-muted">
                  {currentBook.author}
                </h6>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="card-link">
                  Edit
                </a>
                <a href="#" className="card-link">
                  Delete
                </a>
              </div>

              <button className="btn btn-default" onClick={this.props.goBack}>
                Back
              </button>
            </div>
          </div>
        </div>
        <hr />
      </div>
    );
  }
}

module.exports = Show;
