var React = require('react');
var SideBar = require('../partials/sidebar.jsx');
var Wall = require('../partials/wall.jsx');

var IndexContent = React.createClass({
  render: function() {
    return (
      <div className="row">
        <SideBar />
        <Wall />
      </div>
    );
  }
});

module.exports = IndexContent;
