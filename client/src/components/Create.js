var React = require("react");
var PropTypes = require("prop-types");

const Create = props => {
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
                    placeholder="New Title"
                    value={props.fields.title}
                    onChange={props.updateForm}
                  />
                  <span style={{ color: "red" }}>
                    {props.fieldErrors.title}
                  </span>
                </div>
                <div className="form-group">
                  <label htmlFor="InputAuthor">Author</label>
                  <input
                    type="text"
                    className="form-control"
                    name="author"
                    id="InputAuthor"
                    placeholder="New Author"
                    value={props.fields.author}
                    onChange={props.updateForm}
                  />
                  <span style={{ color: "red" }}>
                    {props.fieldErrors.author}
                  </span>
                </div>
                <div className="form-group">
                  <label htmlFor="InputSummary">Summary</label>
                  <textarea
                    className="form-control"
                    name="summary"
                    placeholder="New Summary"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    value={props.fields.summary}
                    onChange={props.updateForm}
                  />
                  <span style={{ color: "red" }}>
                    {props.fieldErrors.summary}
                  </span>
                </div>
              </form>
              <button
                className="btn btn-success"
                onClick={props.submitNewBook}
              >
                Create
              </button>
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

Create.propTypes = {
  fields: PropTypes.objectOf(PropTypes.string),
  fieldErrors: PropTypes.objectOf(PropTypes.string),
  goBack: PropTypes.func.isRequired,
  submitNewBook: PropTypes.func.isRequired,
  updateForm: PropTypes.func.isRequired
};

module.exports = Create;
