var React = require("react");
var Show = require("../Show");
var Nav = require("../Nav");
var Main = require("../Main");
var Footer = require("../Footer");
var Loading = require("../Loading");

const ShowRoute = props => {
  return (
    <div>
      <Nav />
      <Main createBookPath={props.createBookPath} />
      {props.showLoading ? (
        <Loading />
      ) : (
        <Show
          books={props.books}
          fields={props.fields}
          bookId={props.bookId}
          goBack={props.goBack}
          showloading={props.showLoading}
          showDirectBook={props.showDirectBook}
          showEditBookPath={props.showEditBookPath}
          handleDelete={props.handleDelete}
        />
      )}
      <Footer />
    </div>
  );
};

module.exports = ShowRoute;
