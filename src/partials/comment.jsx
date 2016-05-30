import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class Comment extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      isNewReplyOpen: false
    };
  };

  newReplyClick() {
    this.setState({
      isNewReplyOpen: true
    })
  }

  render() {
    let replyList = this.props.comment.reply.map((reply, index) => {
      return <Reply key={index}
                    reply={reply} />;
    }, this);
    let newReply;
    if (this.state.isNewReplyOpen) {
      newReply = <NewReply currentUser={this.props.currentUser} />;
    }
    return (
      <div className="comments-major clearfix mt-20">
        <div className="avatar mr-15 pull-left">
          <div className="relative">
            <a href="#member" className="">
              <img src={this.props.comment.ownerAvatar} alt="" className="thumbnail-small" />
            </a>
          </div>
        </div>
        <div className="w100-65 pull-left">
          <div className="comment-detail">
            <div className="name fz-1p2em link-red">
              <a href="#">{this.props.comment.ownerName}</a>
            </div>
            <div className="comments">
              {this.props.comment.description}
            </div>
            <div className="reply-comment mt-5 link-red-dark">
              <a className="pointer" onClick={this.newReplyClick.bind(this)}>回覆</a> <span className="fz-p8em"> - <span className="time-ago">{this.props.comment.timeAgo}</span></span>
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
      <div className="comments-minor link-red-dark clearfix">
        <div className="mt-10 clearfix">
          <div className="avatar pull-left mr-10">
            <div className="relative">
              <a href="#member" className="">
                <img src="http://dummyimage.com/100x100/cccccc/fff&text=avatar" alt="" className="thumbnail-tiny" />
              </a>
            </div>
          </div>
          <div className="pull-left w100-50">
            <div className="name fz-1em link-red">
              <a href="#">NAME</a>
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
}

class NewReply extends Component {
  componentDidMount(){
    ReactDOM.findDOMNode(this.refs.newReply).focus();
  }

  render() {
    return (
      <div className="reply-minor mt-10 clearfix">
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
