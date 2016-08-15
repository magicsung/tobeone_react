import React, {Component} from 'react';
import { connect }        from 'react-redux';
import Header             from '../partials/header.jsx';
import Footer             from '../partials/footer.jsx';
import { userLogout }     from '../actions/userLoginActions';
import { handleRefreshToken } from '../actions/refreshTokenActions';
import { fetchPostList }  from '../actions/fetchPostListActions';
import { newComment, deleteComment } from '../actions/CommentActions';
import { uploadVideo }    from '../actions/uploadVideoActions';
import { fetchUserProfile, editProfile, updateProfile, cleanProfileErrorMessage }  from '../actions/userProfileActions';

class Layout extends Component {
  handleLogoutClick(event) {
    event.preventDefault();
    this.props.dispatch(userLogout());
  }
  handleFetchPostList() {
    this.props.dispatch(fetchPostList());
  }
  handleCommentSubmit(comment) {
    this.props.dispatch(newComment(comment));
  }
  handleCommentDeleteClcik(comment) {
    this.props.dispatch(deleteComment(comment));
  }
  handleUploadSubmit(postInfo) {
    let token = this.props.user.currentUser.token;
    this.props.dispatch(uploadVideo(postInfo, token));
  }
  handleFetchUserProfile(token) {
    this.props.dispatch(fetchUserProfile(token));
  }
  handleUsernameChange(event) {
    this.props.dispatch(editProfile({username: event.target.value}));
  }
  handleDescriptionChange(event) {
    this.props.dispatch(editProfile({description: event.target.value}));
  }
  handleMobileChange(event) {
    this.props.dispatch(editProfile({mobile: event.target.value}));
  }
  handleEditProfileSubmit(profile) {
    this.props.dispatch(updateProfile(profile));
  }
  cleanProfileErrorMessage() {
    this.props.dispatch(cleanProfileErrorMessage());
  }
  handleRefreshToken() {
    this.props.dispatch(handleRefreshToken({token: localStorage.token}));
  }
  componentWillMount () {
    if (localStorage.token && localStorage.token.length > 0) {
      if (this.props.user.currentUser.token == '' && !this.props.user.login.isAuthenticating && !this.props.user.login.isAuthenticated) {
        this.handleRefreshToken();
      }
    }
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
             handleCommentDeleteClcik: this.handleCommentDeleteClcik.bind(this),
             handleUploadSubmit: this.handleUploadSubmit.bind(this),
             handleFetchUserProfile: this.handleFetchUserProfile.bind(this),
             handleUsernameChange: this.handleUsernameChange.bind(this),
             handleDescriptionChange: this.handleDescriptionChange.bind(this),
             handleMobileChange: this.handleMobileChange.bind(this),
             handleEditProfileSubmit: this.handleEditProfileSubmit.bind(this),
             cleanProfileErrorMessage: this.cleanProfileErrorMessage.bind(this)
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
