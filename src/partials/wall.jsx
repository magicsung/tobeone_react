import React, {Component} from 'react';
import NewPost from '../partials/newpost.jsx';
import Post from '../partials/post.jsx';

class Wall extends Component {
  render() {
    let isAuthenticated = this.props.user.login.isAuthenticated;
    let postList = this.props.postList.map((post, index) => {
      return <Post key={index} {...post}
                   currentUser={this.props.user.currentUser} />
    }, this);
    return (
      <div className="col-sm-8 col-md-9 xs-pd-0">
        { isAuthenticated ? <NewPost currentUser={this.props.user.currentUser} /> : '' }
        { postList }
      </div>
    );
  }
}

export default Wall;
