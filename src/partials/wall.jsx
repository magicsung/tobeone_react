var React = require('react');
var NewPost = require('../partials/newpost.jsx');
var Posts = require('../partials/posts.jsx');

var Wall = React.createClass({
  render: function() {
    return (
      <div className="col-sm-8 col-md-9 xs-pd-0">
        <NewPost />
        <Posts />
      </div>
    );
  }
});

module.exports = Wall;
