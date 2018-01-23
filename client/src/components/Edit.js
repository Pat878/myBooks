var React = require("react");

class Edit extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-centered">
            <div className="card">
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <label htmlFor="InputTitle">Title</label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      value={this.props.title}
                      onChange={this.props.createTitle}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="InputAuthor">Author</label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputPassword1"
                      value={this.props.author}
                      onChange={this.props.createAuthor}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="InputSummary">Summary</label>
                    <textarea
                      className="form-control"
                      id="exampleFormControlTextarea1"
                      rows="3"
                      value={this.props.summary}
                      onChange={this.props.createSummary}
                    />
                  </div>
                </form>
                <div class="btn-group" role="group">
                  <button
                    href=""
                    className="btn btn-success"
                    onClick={this.props.submitUpdatedBook}
                  >
                    Update
                  </button>
                  <button className="btn btn-danger">Delete</button>
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

module.exports = Edit;
