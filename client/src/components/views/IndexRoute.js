var React = require("react");
var Index = require("../Index");
var Nav = require("../Nav");
var Main = require("../Main");
var Footer = require("../Footer");
var Loading = require("../Loading");

const IndexRoute = props => {
  return (
    <div>
      <Nav />
      <Main createBookPath={props.createBookPath} />
      {props.showLoading ? (
        <Loading />
      ) : (
        <Index books={props.books} showBookOnClick={props.showBookOnClick} />
      )}
      <Footer />
    </div>
  );
};

module.exports = IndexRoute;
