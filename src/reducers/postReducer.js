const initialState = {
  postList: [
    // {
    //   postOwnerAvatar: "http://dummyimage.com/100x100/cccccc/fff&text=avatar",
    //   postOwnerName: "NAME1",
    //   postTitle: "Title1",
    //   postDescription: "post content -- Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    //   youtubeVideoID: "WC2s60AuSvU",
    //   postTimeAgo: "12小時前",
    //   likesNumber: 12,
    //   commentsNumber: 3,
    //   commentList: [
    //     {
    //       ownerAvatar: "http://dummyimage.com/100x100/cccccc/fff&text=avatar",
    //       ownerName: "NAME",
    //       description: "comment content -- Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    //       timeAgo: "1分鐘前",
    //       reply: []
    //     }
    //   ]
    // }
  ]
}

export function postReducer(state = initialState, action){
    switch(action.type) {
        case 'SET_POST_LIST':
          return Object.assign({}, state, {
            postList: action.postList
          });
        case 'SET_COMMENT_TO_POST_LIST':
          let setCommentToPostList = Object.assign([], state.postList);
          setCommentToPostList.map(function(post) {
            if (post.id == action.postId) {
              post.commentList.push(action.comment)
            }
          });
          return Object.assign({}, state, {
            postList: setCommentToPostList
          });
        default:
          return state;
    }
}
