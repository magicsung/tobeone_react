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
    if (postList.length < 1) {
      renderPostList = [
        <PostLoading key={1} />,
        <PostLoading key={2} />
      ];
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

class PostLoading extends Component {
  render() {
    return (
      <div className="content bg-white radius-5 mb-15 xs-radius-0">
        <div className="border-bottom-gray-1px pd-20">
          <div className="row">
            <div className="col-xs-12 clearfix">
              <div className="avatar mb-15 mr-15 pull-left">
                <div className="relative">
                  <a href="/talent" className="">
                    <img src="http://dummyimage.com/100x100/cccccc/ccc" alt="" className="thumbnail-small" />
                  </a>
                </div>
              </div>
              <div className="pull-left w100-65">
                <div className="name fz-1p4em link-red w20 loading" ></div>
                <div className="fz-1p2em w30 mt-5 loading"></div>
              </div>
            </div>
            <div className="col-xs-12 custom-content mb-20 pl-80 xs-pl-15">
              <div className="description mt-5 w80 loading"></div>
              <div className="description mt-5 w90 loading"></div>
              <div className="description mt-5 w40 loading"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Wall;
