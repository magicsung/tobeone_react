var React = require('react');
var Header = require('../partials/header.jsx');
var Footer = require('../partials/footer.jsx');

var Layout = React.createClass ({
  render: function (){
    return (
      <div className="h100">
        <div id="main-content">
          <Header />
          <div className="container-fluid mt-15 mb-15 header-height">
            {this.props.children}
          </div>
        </div>
        <Footer />
      </div>
    );
  }
});

module.exports = Layout;
