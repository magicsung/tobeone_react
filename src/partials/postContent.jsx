var React = require('react');

var Post = React.createClass({
  render: function() {
    return (
      <div className="border-bottom-gray pd-20">
        <div className="row">
          <div className="col-md-1 col-sm-2">
            <div className="avatar mb-15">
              <div className="relative">
                <a href="#member" className="">
                  <img src="http://dummyimage.com/100x100/cccccc/fff&text=avatar" alt="" className="thumbnail-small" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-11 col-sm-10 custom-content mb-20">
            <a href="#" className="btn btn-sm btn-gray-light radius-5 pull-right">關注中</a>
            <div className="name fz-1p4em link-red">
              <a href="#">NAME</a>
            </div>
            <div className="fz-1p2em">
              <span className="title">title</span>
              <span className="time-ago fz-p8em"> - about 21 hour ago</span>
            </div>
            <div className="description mt-5">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
            <div className="more mt-5">
              <a href="#">展開全部...</a>
            </div>
            <div className="video mt-15 relative inline-block">
              <img src="http://dummyimage.com/640x360/cccccc/fff&text=video" alt="" />
              <div className="overlay">
                {/*
                  <iframe width="560" height="315" src="https://www.youtube.com/embed/b-JD5I_B6LY" frameBorder="0" allowFullScreen></iframe>
                */}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Post;
