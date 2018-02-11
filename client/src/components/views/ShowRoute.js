var React = require("react");
var Show = require("../Show");
var Loading = require("../Loading");

const ShowRoute = props => {
  return (
    <div>
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
    </div>
  );
};

module.exports = ShowRoute;
