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
              handleCommentSubmit={this.props.handleCommentSubmit.bind(this)}
              handleCommentDeleteClcik={this.props.handleCommentDeleteClcik.bind(this)} />
        <LoadMore isFetchingPost={this.props.isFetchingPost}
                  handleLoadMorePost={this.props.handleLoadMorePost.bind(this)} />
      </div>
    );
  }
}


class LoadMore extends Component {
  render() {
    return (
      <div className="text-center">
        <button className="btn btn-white"
                onClick={this.props.handleLoadMorePost}
                disabled={this.props.isFetchingPost}
                >
        Load More
        <span className={this.props.isFetchingPost ? 'ml-5' : 'hidden'}>
          <i className="loading-dot">.</i>
          <i className="loading-dot">.</i>
          <i className="loading-dot">.</i>
        </span>
        </button>
      </div>
    );
  }
}

export default IndexContent;
