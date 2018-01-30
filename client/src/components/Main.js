var React = require("react");
var PropTypes = require("prop-types");

const Main = props => {
  return (
    <main role="main">
      <div className="jumbotron">
        <div className="container">
          <center>
            <h1 className="display-3">
              <b>myBooks</b>
            </h1>

            <p>
              myBooks is a CRUD app created with Create-React-App and Ruby on
              Rails.
            </p>
            <p>
              <button
                className="btn btn-primary btn-lg"
                onClick={props.createBookPath}
              >
                Add Book &raquo;
              </button>
            </p>
          </center>
        </div>
      </div>
    </main>
  );
};

Main.propTypes = {
  createBookPath: PropTypes.func.isRequired
};

module.exports = Main;
