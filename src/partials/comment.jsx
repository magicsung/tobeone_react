import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';

class Comment extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      isNewReplyOpen: false
    };
  };

  newReplyClick(event) {
    event.preventDefault();
    this.setState({
      isNewReplyOpen: true
    })
  }

  handleCommentDeleteClcik(event) {
    event.preventDefault();
    if (confirm("this will delete comment, are you sure?"))
      this.props.handleCommentDeleteClcik(this.props.comment.id);
  }

  render() {
    let timeAgo = moment(moment(this.props.comment.created_at).format('YYYY-MM-DD HH:mm:ss')).fromNow();
    let replyList = [];
    let reply = this.props.comment.reply;
    if (reply) {
      replyList = reply.map((reply, index) => {
        return <Reply key={index}
                      reply={reply} />;
      }, this);
    }
    let newReply;
    if (this.state.isNewReplyOpen) {
      newReply = <NewReply currentUser={this.props.currentUser} />;
    }
    let deleteComment;
    if (this.props.comment.owner._id === this.props.currentUser.id) {
      deleteComment = (
        <a href="#"
           className="pull-right hover-show-item"
           onClick={this.handleCommentDeleteClcik.bind(this)} >
           <i className="material-icons fz-1p1em">&#xE5CD;</i>
        </a>
      );
    }
    return (
      <div className="comments-major clearfix mt-10 mb-10">
        <div className="avatar mr-15 pull-left">
          <div className="relative">
            <a href="#member" className="">
              <img src={this.props.comment.owner.avatar} alt="" className="thumbnail-small" />
            </a>
          </div>
        </div>
        <div className="w100-65 pull-left hover-show">
          {deleteComment}
          <div className="comment-detail">
            <span className="name fz-1p2em link-red mr-10">
              <a href="#">{this.props.comment.owner.username}</a>
            </span>
            <span className="comments">
              {this.props.comment.description}
            </span>
            <div className="reply-comment mt-5 link-red-dark">
              <a className="pointer mr-5" onClick={this.newReplyClick.bind(this)}>回覆</a>
              <span className="fz-p8em">
                - {timeAgo}
              </span>
            </div>
          </div>

          {replyList}
          {newReply}

        </div>
      </div>
    );
  }
}

class Reply extends Component {
  render() {
    return (
      <div className="comments link-red-dark clearfix">
        <div className="mt-10 clearfix">
          <div className="avatar pull-left mr-10">
            <div className="relative">
              <a href="#member" className="">
                <img src="http://dummyimage.com/100x100/cccccc/fff&text=avatar" alt="" className="thumbnail-tiny" />
              </a>
            </div>
          </div>
          <div className="pull-left w100-50">
            <span className="name fz-1em link-red">
              <a href="#">NAME</a>
            </span>
            <span className="comments">
              <span comment>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</span>
              - <span className="time-ago fz-p8em">14小時前</span>
          </span>
          </div>
        </div>
      </div>
    );
  }
}

class NewReply extends Component {
  componentDidMount(){
    ReactDOM.findDOMNode(this.refs.newReply).focus();
  }

  componentDidUpdate() {
    ReactDOM.findDOMNode(this.refs.newReply).focus();
  }

  render() {
    return (
      <div className="reply mt-10 clearfix">
        <div className="avatar pull-left mr-10">
          <div className="relative">
            <img src={this.props.currentUser.avatar} alt="" className="thumbnail-tiny" />
          </div>
        </div>
        <input type="text" name="newReply" ref="newReply" placeholder="回覆..." className="pd-5 mt-5 radius-5 border-none w100-50 form-control input-sm" />
      </div>
    );
  }
}


export default Comment;
