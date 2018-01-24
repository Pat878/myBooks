var React = require("react");

const Main = () => {
  return (
    <main role="main">
      <div className="jumbotron">
        <div className="container">
          <center>
            <h1 className="display-3">
              <b>myBooks</b>
            </h1>

            <p>
              myBooks is a simple example of how Create-React-App and Ruby on
              Rails can work together.
            </p>
            <p>
              <a className="btn btn-primary btn-lg" href="" role="button">
                Add Book &raquo;
              </a>
            </p>
          </center>
        </div>
      </div>
    </main>
  );
};

module.exports = Main;
