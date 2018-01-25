var React = require("react");

const Edit = props => {
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
                    name="title"
                    id="InputTitle"
                    aria-describedby="emailHelp"
                    value={props.fields.title}
                    onChange={props.updateForm}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="InputAuthor">Author</label>
                  <input
                    type="text"
                    className="form-control"
                    name="author"
                    id="InputAuthor"
                    value={props.fields.author}
                    onChange={props.updateForm}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="InputSummary">Summary</label>
                  <textarea
                    className="form-control"
                    name="summary"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    value={props.fields.summary}
                    onChange={props.updateForm}
                  />
                </div>
              </form>
              <div className="btn-group" role="group">
                <button
                  className="btn btn-success"
                  onClick={props.submitUpdatedBook}
                >
                  Update
                </button>
                <button className="btn btn-danger" onClick={props.handleDelete}>
                  Delete
                </button>
              </div>
            </div>

            <button className="btn btn-default" onClick={props.goBack}>
              Back
            </button>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};

module.exports = Edit;
