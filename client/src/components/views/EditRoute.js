var React = require("react");
var Edit = require("../Edit");

const EditRoute = props => {
  return (
    <div>
      <Edit
        fields={props.fields}
        goBack={props.goBack}
        submitUpdatedBook={props.submitUpdatedBook}
        updateForm={props.updateForm}
        handleDelete={props.handleDelete}
      />
    </div>
  );
};

module.exports = EditRoute;
