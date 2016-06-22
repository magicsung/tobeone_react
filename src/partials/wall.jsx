import React, {Component} from 'react';
import NewPost            from '../partials/newpost.jsx';
import Post               from '../partials/post.jsx';

class Wall extends Component {
  componentDidMount() {
    this.props.handleFetchPostList();
  }
  render() {
    let isAuthenticated = this.props.user.login.isAuthenticated;
    let postList = this.props.postList;
    let renderPostList;
    if (!postList) {
      console.log('no post!');
    } else {
      renderPostList = postList.map((post, index) => {
        return <Post key={index} {...post}
                     currentUser={this.props.user.currentUser} />
      }, this);
    }
    return (
      <div className="col-sm-8 col-md-9 xs-pd-0">
        { isAuthenticated ? <NewPost currentUser={this.props.user.currentUser} /> : '' }
        { renderPostList }
      </div>
    );
  }
}

export default Wall;
