var React = require("react");

class Show extends React.Component {
  componentDidMount() {
    this.props.showDirectBook();
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-centered">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{this.props.title}</h5>
                <h6 className="card-subtitle mb-2 text-muted">
                  {this.props.author}
                </h6>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="" className="card-link">
                  Edit
                </a>
                <a href="" className="card-link">
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
