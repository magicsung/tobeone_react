var React = require('react');

var Header = React.createClass({
  render: function() {
    return (
      <header className="bg-primary-dark xs-fixed-header">
        <div className="container-fluid">
          <div className="row">
            
            <BrandImage />
            <SearchBox />
            <MobileHeader />
            <MemberFeatures />

          </div>
        </div>
      </header>
    );
  }
});
var BrandImage = React.createClass({
  render: function() {
    return (
      <div className="col-sm-4 col-xs-5 xs-pd-0 brand-logo ">
        <a href="/" className="ml-10 w100 block">
          <img src="/images/2be1_logo_white.svg" className="height-40" alt="" />
        </a>
      </div>
    );
  }
});
var SearchBox = React.createClass({
  render: function() {
    return (
      <div className="col-sm-4 xs-pd-0 clearfix hidden-xs" id="search">
        <form action="index.html" method="post" className="hidden-xs">
          <div className="row">
            <div className="col-sm-12">
              <div className="group">
                <input type="text" name="search" value="" placeholder="請輸入關鍵字搜尋" className="form-control border-none pl-20 radius-20" />
                <button className="inner-btn" type="submit"><i className="material-icons color-gray-light mt-5">&#xE8B6;</i></button>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
});
var MobileHeader = React.createClass({
  render: function() {
    return (
      <div className="display-xs pull-right">
        <a href="#search" className="xs-search">
          <button className="btn btn-gray height-45 bg-opacity hover-none" type="button">
            <i className="material-icons color-white fz-2em">&#xE8B6;</i>
          </button>
        </a>
        <label htmlFor="toggle-menu" className="btn btn-gray height-45 bg-opacity hover-none" id="xs-menu-action">
          <i className="material-icons color-white fz-2em">&#xE5D2;</i>
        </label>
      </div>
    );
  }
});
var MemberFeatures = React.createClass({
  render: function() {
    return (
      <div className="col-sm-4 clearfix hidden-xs">
        <ul className="inline-block link-white fz-1p1em lh-2em pull-right">
          <li className="ml-20">
            <a href="#" className="">
              <i className="material-icons fix-icon">&#xE8A6;</i>
              <span>會員專區</span>
            </a>
          </li>
          <li className="ml-20 hidden-xs relative notice">
            <a href="#">
              <i className="material-icons fix-icon">&#xE7F5;</i>
              <span className="badge bg-white color-primary-dark icon-badge">9</span>
              <span className="ml-5">通知</span>
            </a>
          </li>
        </ul>
      </div>
    );
  }
});


module.exports = Header;
