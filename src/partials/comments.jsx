var React = require('react');

var Comments = React.createClass({
  render: function() {
    return (
      <div>
        <Comment />
        <Comment />
        <NewComment />
      </div>
    );
  }
});
var Comment = React.createClass({
  render: function() {
    return (
      <div className="comments-major clearfix mt-20">
        <div className="avatar w10 xs-w20 pull-left">
          <div className="relative">
            <a href="#member" className="">
              <img src="http://dummyimage.com/100x100/cccccc/fff&text=avatar" alt="" className="thumbnail-small" />
            </a>
          </div>
        </div>
        <div className="w80 pd-lr-10 pull-left">
          <div className="comment-detail">
            <div className="name fz-1p2em color-primary">
              NAME
            </div>
            <div className="comments">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </div>
            <div className="reply-comment mt-5 link-red-dark">
              <a href="#">回覆</a> <span className="fz-p8em"> - <span className="time-ago">14小時前</span></span>
            </div>
          </div>

          <Reply />
          <NewReply />

        </div>
      </div>
    );
  }
});
var Reply = React.createClass({
  render: function() {
    return (
      <div className="comments-minor link-red-dark clearfix">
        <div className="mt-10">
          <div className="avatar w10 xs-w20 pull-left">
            <div className="relative">
              <a href="#member" className="">
                <img src="http://dummyimage.com/100x100/cccccc/fff&text=avatar" alt="" className="thumbnail-tiny" />
              </a>
            </div>
          </div>
          <div className="w80 pull-left pd-lr-5">
            <div className="name fz-1em color-primary">
              NAME
            </div>
            <div className="comments">
              <span comment>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</span>
              - <span className="time-ago fz-p8em">14小時前</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
});
var NewReply = React.createClass({
  render: function() {
    return (
      <div className="reply-minor mt-10 clearfix">
        <div className="avatar w10 xs-w20 pull-left">
          <div className="relative">
            <a href="#member" className="">
              <img src="http://dummyimage.com/100x100/cccccc/fff&text=avatar" alt="" className="thumbnail-tiny" />
            </a>
          </div>
        </div>
        <input type="text" name="name" placeholder="回覆..." className="pd-5 mt-5 radius-5 border-none w70" />
      </div>
    );
  }
});
var NewComment = React.createClass({
  render: function() {
    return (
      <div className="new-comments mt-15">
        <div className="w10 xs-w20 pull-left">
          <div className="avatar">
            <div className="relative">
              <a href="#member" className="">
                <img src="http://dummyimage.com/100x100/cccccc/fff&text=avatar" alt="" className="thumbnail-small" />
              </a>
            </div>
          </div>
        </div>
        <div className="w70 ml-10 pull-left">
          <form action="index.html" method="post" className="mt-5 clearfix">
            <div className="w80 pull-left">
              <input type="text" placeholder="留言......" className="form-control radius-5 w100" />
            </div>
            <div className="w20 pull-left">
              <button type="submit" name="button" className="btn btn-gray height-40 radius-5 ml-5">發送</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
});

module.exports = Comments;
