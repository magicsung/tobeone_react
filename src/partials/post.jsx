import React, {Component} from 'react';
import ReactDOM           from 'react-dom';
import PostContent        from '../partials/postContent.jsx';
import Comment            from '../partials/comment.jsx';

class Post extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      isNewCommentOpen: false
    };
  };

  newCommentClick(event) {
    event.preventDefault();
    this.setState({
      isNewCommentOpen: true
    })
  }

  likeClick(event) {
    event.preventDefault();
    // like click action
  }

  render() {
    return (
      <div className="content bg-white radius-5 mb-15 xs-radius-0">
        <PostContent {...this.props} />
        <div className="bg-white clearfix radius-5">
          <PostActions newCommentClick={this.newCommentClick.bind(this)}
                       likeClick={this.likeClick.bind(this)} />
          <PostComments {...this.props}
                        isNewCommentOpen={this.state.isNewCommentOpen}
                        handleCommentSubmit={this.props.handleCommentSubmit.bind(this)} />
        </div>
      </div>
    );
  }
}

class PostActions extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      isShareOpen: false
    };
  };

  shareMenuClick(event) {
    event.preventDefault();
    this.setState({
      isShareOpen: !this.state.isShareOpen
    })
  }

  render() {
    let shareMenu;
    if (this.state.isShareOpen) {
      shareMenu = <ShareMenu />;
    }
    return (
      <div className="post-action col-xs-12 pd-10 border-bottom-gray-1px clearfix pd-10">
        <div className="social-action">
          <ul className="inline-block pd-lr-10">
            <li className="">
              <a href="#" onClick={this.props.likeClick.bind(this)}>
                <i className="material-icons relative top-3px mr-5 fz-1p2em">&#xE87E;</i>
                <span>喜歡</span>
              </a>
            </li>
            <li className="ml-35">
              <a onClick={this.props.newCommentClick.bind(this)} className="pointer" >
                <i className="material-icons relative top-3px mr-5 fz-1p2em">&#xE0B7;</i>
                <span>留言</span>
              </a>
            </li>
            <li className="ml-35 share-link relative">
              <a href="#" onClick={this.shareMenuClick.bind(this)}>
                <i className="material-icons relative top-3px mr-5 fz-1p2em">&#xE80D;</i>
                <span>分享</span>
              </a>
              { shareMenu }
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

class ShareMenu extends Component {
  render() {
    return (
      <ul className="dropdown-menu show radius-5">
        <li><a href="#">分享到 Facebook</a></li>
        <li><a href="#">分享到 Weibo</a></li>
      </ul>
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
      newComment = <NewComment postId={this.props.id}
                               currentUser={this.props.currentUser}
                               handleCommentSubmit={this.props.handleCommentSubmit.bind(this)} />;
    }
    return (
      <div className="post-comments col-xs-12 bg-light pt-10 pd-lr-20 radius-bottom-5">
        <div className="post-info fz-1em lh-1p5em pb-10">
          <a href="#">
            <span className="likes-count">{this.props.likes}</span>人喜歡
          </a>
          <span>｜</span>
          <a href="#">
            <span className="comments-count">{this.props.comments}</span>則留言
          </a>
        </div>
        {/*<div className="link-red-dark">
          <a href="#" className="">
            查看全部<span className="reply-count">{this.props.comments}</span>則回覆
            <i className="material-icons relative top-6px">&#xE5C5;</i>
          </a>
        </div>*/}

        <div classNameName="comments">
          {commentList}
          {newComment}
        </div>
      </div>
    );
  }
}

class NewComment extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      commentContent: ''
    };
  };

  handleCommentSubmit(event) {
    event.preventDefault();
    this.setState({commentContent: ''});
    this.props.handleCommentSubmit({
      postId: this.props.postId,
      comment: this.state.commentContent,
      token: this.props.currentUser.token
    });
  }
  handleCommentChange(event) {
    this.setState({commentContent: event.target.value});
  }

  componentDidMount() {
    ReactDOM.findDOMNode(this.refs.newComment).focus();
  }
  componentDidUpdate() {
    ReactDOM.findDOMNode(this.refs.newComment).focus();
  }

  render() {
    return (
      <div className="new-comments mt-10 mb-10 clearfix">
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
          <form action=""
                className="mt-5 clearfix"
                onSubmit={this.handleCommentSubmit.bind(this)} >
            <div className="w100 pull-left">
              <input type="text"
                     ref="newComment"
                     placeholder="留言......"
                     className="form-control border radius-5 w100 height-40"
                     value={this.state.commentContent}
                     onChange={this.handleCommentChange.bind(this)} />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Post;
