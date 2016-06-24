import React, {Component} from 'react';
import SideBar            from '../partials/sidebar.jsx';
import Wall               from '../partials/wall.jsx';

class IndexContent extends Component {
  render() {
    return (
      <div className="row">
        <SideBar user={this.props.user}/>
        <Wall postList={this.props.postList}
              user={this.props.user}
              handleFetchPostList={this.props.handleFetchPostList.bind(this)}
              handleCommentSubmit={this.props.handleCommentSubmit.bind(this)} />
      </div>
    );
  }
}

export default IndexContent;
