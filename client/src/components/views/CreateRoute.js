var React = require("react");
var Create = require("../Create");

const CreateRoute = props => {
  return (
    <div>
      <Create
        fields={props.fields}
        goBack={props.goBack}
        updateForm={props.updateForm}
        submitNewBook={props.submitNewBook}
        fieldErrors={props.fieldErrors}
      />
    </div>
  );
};

module.exports = CreateRoute;
