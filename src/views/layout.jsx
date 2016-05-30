import React, {Component} from 'react';
import Header from '../partials/header.jsx';
import Footer from '../partials/footer.jsx';

var postList = [
  {
    postOwnerAvatar: "http://dummyimage.com/100x100/cccccc/fff&text=avatar",
    postOwnerName: "NAME1",
    postTitle: "Title1",
    postDescription: "post content -- Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    youtubeVideoID: "WC2s60AuSvU",
    postTimeAgo: "12小時前",
    likesNumber: 12,
    commentsNumber: 6,
    commentList: [
      {
        ownerAvatar: "http://dummyimage.com/100x100/cccccc/fff&text=avatar",
        ownerName: "NAME",
        description: "comment content -- Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        timeAgo: "1分鐘前",
        reply: [
          {
            ownerAvatar: "http://dummyimage.com/100x100/cccccc/fff&text=avatar",
            ownerName: "NAME",
            description: "reply content -- Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            timeAgo: "5分鐘前",
          },
          {
            ownerAvatar: "http://dummyimage.com/100x100/cccccc/fff&text=avatar",
            ownerName: "NAME-2",
            description: "reply2 content -- Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            timeAgo: "4分鐘前",
          }
        ]
      },
      {
        ownerAvatar: "http://dummyimage.com/100x100/cccccc/fff&text=avatar",
        ownerName: "NAME2",
        description: "comment2 -- Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        timeAgo: "3分鐘前",
        reply: []
      },
      {
        ownerAvatar: "http://dummyimage.com/100x100/cccccc/fff&text=avatar",
        ownerName: "NAME3",
        description: "comment3 -- Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        timeAgo: "1分鐘前",
        reply: []
      }
    ]
  },
  {
    postOwnerAvatar: "http://dummyimage.com/100x100/cccccc/fff&text=avatar",
    postOwnerName: "NAME2",
    postTitle: "Title2",
    postDescription: "post content2 -- Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    youtubeVideoID: "o8ng__XevwI",
    postTimeAgo: "12小時前",
    likesNumber: 23,
    commentsNumber: 3,
    commentList: [
      {
        ownerAvatar: "http://dummyimage.com/100x100/cccccc/fff&text=avatar",
        ownerName: "NAME",
        description: "post2 comment -- Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        timeAgo: "1分鐘前",
        reply: [
          {
            ownerAvatar: "http://dummyimage.com/100x100/cccccc/fff&text=avatar",
            ownerName: "NAME",
            description: "post2 comment reply -- Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            timeAgo: "1分鐘前",
          }
        ]
      },
      {
        ownerAvatar: "http://dummyimage.com/100x100/cccccc/fff&text=avatar",
        ownerName: "NAME",
        description: "post2 comment2 Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        timeAgo: "1分鐘前",
        reply: []
      }
    ]
  }
];

class Layout extends Component {
  render(){
    return (
      <div className="h100">
        <div id="main-content">
          <input type="checkbox" className="hidden" id="toggle-menu" defaultChecked />
          <Header noticeNumber={this.props.noticeNumber} />
          <div className="container-fluid mt-15 mb-15 header-height">
            {this.props.children && React.cloneElement(this.props.children, {
             noticeNumber: this.props.noticeNumber,
             currentUser: this.props.currentUser,
             postList: postList
            })}
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

Layout.defaultProps = {
  noticeNumber: 8,
  currentUser: {
    avatar: "http://dummyimage.com/100x100/cccccc/fff&text=ME",
    name: "currentUser"
  }
};


export default Layout;
