import React, {Component} from 'react';
import NewPost from '../partials/newpost.jsx';
import Post from '../partials/post.jsx';

class Wall extends Component {
  render() {
    let postList = this.props.postList.map((post, index) => {
      return <Post key={index} {...post}
                   currentUser={this.props.currentUser} />
    }, this);

    return (
      <div className="col-sm-8 col-md-9 xs-pd-0">
        <NewPost currentUser={this.props.currentUser} />
        { postList }
      </div>
    );
  }
}

export default Wall;
