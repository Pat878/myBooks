var React = require("react");
var Nav = require("../Nav");
var Main = require("../Main");
var Create = require("../Create");
var Footer = require("../Footer");

const CreateRoute = props => {
  return (
    <div>
      <Nav />
      <Main createBookPath={props.createBookPath} />
      <Create
        fields={props.fields}
        goBack={props.goBack}
        updateForm={props.updateForm}
        submitNewBook={props.submitNewBook}
        fieldErrors={props.fieldErrors}
      />
      <Footer />
    </div>
  );
};

module.exports = CreateRoute;
