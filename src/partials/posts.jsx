var React = require('react');
var PostContent = require('../partials/postContent.jsx');
var Comments = require('../partials/comments.jsx');

var Posts = React.createClass({
  render: function() {
    return (
      <div className="posts">
        <Post />
        <Post />
      </div>
    );
  }
});
var Post = React.createClass({
  render: function() {
    return (
      <div className="content bg-white radius-5 mt-15 xs-radius-0">
        <PostContent />
        <div className="bg-white clearfix radius-5">
          <PostActions />
          <PostComments />
        </div>
      </div>
    );
  }
});
var PostActions = React.createClass({
  render: function() {
    return (
      <div className="post-action col-xs-12 pd-10 border-bottom-gray clearfix pd-10">
        <div className="social-action">
          <ul className="inline-block pd-lr-10">
            <li className="">
              <a href="#">
                <i className="material-icons fix-icon-3px fz-1p2em">&#xE87E;</i>
                <span>喜歡</span>
              </a>
            </li>
            <li className="ml-35">
              <a href="#">
                <i className="material-icons fix-icon-3px fz-1p2em">&#xE0B7;</i>
                <span>留言</span>
              </a>
            </li>
            <li className="ml-35 popover share-link">
              <a href="#" className="">
                <i className="material-icons fix-icon-3px fz-1p2em">&#xE80D;</i>
                <span>分享</span>
              </a>
              <ul>
                <li><a href="#">分享到 Facebook</a></li>
                <li><a href="#">分享到 Weibo</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    );
  }
});
var PostComments = React.createClass({
  render: function() {
    return (
      <div className="post-comments col-xs-12 pd-20 bg-light pt-10">
        <div className="post-info fz-1em lh-1p5em border-bottom-gray pb-10">
          <a href="#">
            <span className="likes-count">1.2萬</span>人喜歡
          </a>
          <span>｜</span>
          <a href="#">
            <span className="comments-count">100</span>則留言
          </a>
        </div>
        <div className="link-red-dark">
          <a href="#" className="">
            查看全部<span className="reply-count">6</span>則回覆
            <i className="material-icons fix-icon">&#xE5C5;</i>
          </a>
        </div>

        <div classNameName="comments">
          <Comments />
        </div>

      </div>
    );
  }
});

module.exports = Posts;
