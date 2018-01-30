var React = require("react");
var PropTypes = require("prop-types");

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
                <h5 className="card-title">{this.props.fields.title}</h5>
                <h6 className="card-subtitle mb-2 text-muted">
                  {this.props.fields.author}
                </h6>
                <p className="card-text">{this.props.fields.summary}</p>
                <div className="btn-group" role="group">
                  <button
                    className="btn btn-default"
                    onClick={this.props.editBook}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={this.props.handleDelete}
                  >
                    Delete
                  </button>
                </div>
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

Show.propTypes = {
  fields: PropTypes.objectOf(PropTypes.string).isRequired,
  goBack: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
  editBook: PropTypes.func.isRequired,
  showDirectBook: PropTypes.func.isRequired
};

module.exports = Show;
