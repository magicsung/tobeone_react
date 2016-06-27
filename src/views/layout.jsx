import React, {Component} from 'react';
import { connect }        from 'react-redux';
import Header             from '../partials/header.jsx';
import Footer             from '../partials/footer.jsx';
import { userLogout }     from '../actions/userLoginActions';
import { fetchPostList }  from '../actions/fetchPostListActions';
import { newComment, deleteComment }     from '../actions/CommentActions';

class Layout extends Component {
  handleLogoutClick(event) {
    event.preventDefault();
    const { dispatch } = this.props;
    dispatch(userLogout());
  }
  handleFetchPostList() {
    const { dispatch } = this.props;
    dispatch(fetchPostList());
  }
  handleCommentSubmit(comment) {
    const { dispatch } = this.props;
    dispatch(newComment(comment));
  }
  handleCommentDeleteClcik(comment) {
    const { dispatch } = this.props;
    dispatch(deleteComment(comment));
  }
  render() {
    return (
      <div className="h100">
        <div id="main-content">
          <input type="checkbox" className="hidden" id="toggle-menu" defaultChecked />
          <Header user={this.props.user}
                  handleLogoutClick={this.handleLogoutClick.bind(this)} />
          <div className="container-fluid mt-15 mb-15 header-height">
            {this.props.children && React.cloneElement(this.props.children, {
             user: this.props.user,
             postList: this.props.postList,
             handleFetchPostList: this.handleFetchPostList.bind(this),
             handleCommentSubmit: this.handleCommentSubmit.bind(this),
             handleCommentDeleteClcik: this.handleCommentDeleteClcik.bind(this)
            })}
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    postList: state.posts.postList,
    user: state.user
  };
}
export default connect(mapStateToProps)(Layout);
