var React = require("react");
var Index = require("../Index");
var Loading = require("../Loading");

const IndexRoute = props => {
  return (
    <div>
      {props.showLoading ? (
        <Loading />
      ) : (
        <Index books={props.books} showBookOnClick={props.showBookOnClick} />
      )}
    </div>
  );
};

module.exports = IndexRoute;
