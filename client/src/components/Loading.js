var React = require("react");

const Loading = props => {
  return (
    <div>
      <center>
        <hr />
        <i className="fa fa-spinner fa-spin fa-3x fa-fw" />
        <h1>Loading...</h1>
      </center>
    </div>
  );
};

module.exports = Loading;
