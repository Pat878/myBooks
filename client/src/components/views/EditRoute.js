var React = require("react");
var Nav = require("../Nav");
var Main = require("../Main");
var Edit = require("../Edit");
var Footer = require("../Footer");

const EditRoute = props => {
  return (
    <div>
      <Nav />
      <Main createBookPath={props.createBookPath} />
      <Edit
        fields={props.fields}
        goBack={props.goBack}
        submitUpdatedBook={props.submitUpdatedBook}
        updateForm={props.updateForm}
        handleDelete={props.handleDelete}
      />
      <Footer />
    </div>
  );
};

module.exports = EditRoute;
