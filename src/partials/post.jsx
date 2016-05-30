import React, {Component} from 'react';
import PostContent from '../partials/postContent.jsx';
import Comment from '../partials/comment.jsx';


class Post extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      isNewCommentOpen: false
    };
  };

  newCommentClick() {
    this.setState({
      isNewCommentOpen: true
    })
  }

  render() {
    return (
      <div className="content bg-white radius-5 mt-15 xs-radius-0">
        <PostContent {...this.props} />
        <div className="bg-white clearfix radius-5">
          <PostActions newCommentClick={this.newCommentClick} />
          <PostComments {...this.props} newCommentClick={this.state.isNewCommentOpen} />
        </div>
      </div>
    );
  }
}

class PostActions extends Component {
  render() {
    return (
      <div className="post-action col-xs-12 pd-10 border-bottom-gray-1px clearfix pd-10">
        <div className="social-action">
          <ul className="inline-block pd-lr-10">
            <li className="">
              <a href="#">
                <i className="material-icons relative top-3px mr-5 fz-1p2em">&#xE87E;</i>
                <span>喜歡</span>
              </a>
            </li>
            <li className="ml-35">
              <a onClick={this.props.newCommentClick} className="pointer" >
                <i className="material-icons relative top-3px mr-5 fz-1p2em">&#xE0B7;</i>
                <span>留言</span>
              </a>
            </li>
            <li className="ml-35 share-link relative">
              <a href="#" className="dropdown-toggle">
                <i className="material-icons relative top-3px mr-5 fz-1p2em">&#xE80D;</i>
                <span>分享</span>
              </a>
              <ul className="dropdown-menu radius-5">
                <li><a href="#">分享到 Facebook</a></li>
                <li><a href="#">分享到 Weibo</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

class PostComments extends Component {

  render() {
    let commentList = this.props.commentList.map((comment, index) => {
      return <Comment key={index}
                      comment={comment}
                      currentUser={this.props.currentUser} />;
    }, this);
    let newComment;
    if (this.props.isNewCommentOpen) {
      newComment = <NewComment currentUser={this.props.currentUser} />;
    }
    return (
      <div className="post-comments col-xs-12 pd-20 bg-light pt-10">
        <div className="post-info fz-1em lh-1p5em border-bottom-gray-1px pb-10">
          <a href="#">
            <span className="likes-count">{this.props.likesNumber}</span>人喜歡
          </a>
          <span>｜</span>
          <a href="#">
            <span className="comments-count">{this.props.commentsNumber}</span>則留言
          </a>
        </div>
        <div className="link-red-dark">
          <a href="#" className="">
            查看全部<span className="reply-count">{this.props.commentsNumber}</span>則回覆
            <i className="material-icons relative top-6px">&#xE5C5;</i>
          </a>
        </div>

        <div classNameName="comments">
          {commentList}
          {newComment}
        </div>
      </div>
    );
  }
}

class NewComment extends Component {
  render() {
    return (
      <div className="new-comments mt-15">
        <div className="pull-left mr-15">
          <div className="avatar">
            <div className="relative">
              <a href="#member">
                <img src={this.props.currentUser.avatar} alt="" className="thumbnail-small" />
              </a>
            </div>
          </div>
        </div>
        <div className="pull-left w100-65">
          <form action="index.html" method="post" className="mt-5 clearfix">
            <div className="w100 pull-left">
              <input type="text" placeholder="留言......" className="form-control border radius-5 w100 height-40" />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Post;
