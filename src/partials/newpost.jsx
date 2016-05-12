var React = require('react');

var iconStyle = {
  position: 'relative',
  top: '-2px'
};
var NewPost = React.createClass({
  render: function() {
    return (
      <div className="new-post bg-white pd-20 radius-5 xs-radius-0">
        <div className="row">
          <div className="col-md-1 col-sm-2 hidden-xs">
            <div className="avatar">
              <div className="relative">
                <a href="#member" className="">
                  <img src="http://dummyimage.com/100x100/cccccc/fff&text=avatar" alt="" className="thumbnail-small" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-11 col-sm-10 col-xs-12">
            <div className="row mt-5">
              <div className="col-xs-12">
                <a href="/upload">
                  <button type="submit" name="button" className="btn btn-red radius-5 width-300 xs-w100">
                    <i className="material-icons fix-icon-3px fz-1p5em">&#xE54D;</i>
                    <span className="" style={iconStyle}>
                      上傳影片
                    </span>
                  </button>
                </a>
                <span className="ml-20 bg-gray-lighter pd-5 left-arrow relative radius-right-5 hidden-xs hidden-sm">
                  想秀什麼？立馬上傳！
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = NewPost;
