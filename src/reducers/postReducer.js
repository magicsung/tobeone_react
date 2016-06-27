const initialState = {
  postList: []
}

export function postReducer(state = initialState, action){
    switch(action.type) {
        case 'SET_POST_LIST':
          return Object.assign({}, state, {
            postList: action.postList
          });
        case 'SET_COMMENT_TO_POST':
          let setCommentToPost = Object.assign([], state.postList);
          setCommentToPost.map(function(post) {
            if (post.id == action.postId) {
              post.commentList.push(action.comment)
            }
          });
          return Object.assign({}, state, {
            postList: setCommentToPost
          });
        case 'REMOVE_COMMENT_FROM_POST':
          let removeCommentFromPost = Object.assign([], state.postList);
          removeCommentFromPost.map(function(post) {
            if (post.id == action.postId) {
              const index = post.commentList
                .map(comment => comment.id)
                .indexOf(action.commentId);

              if (~index) {
                post.commentList.splice(index, 1);
                post.comments -= 1;
              }
            }
          });
          return Object.assign({}, state, {
            postList: removeCommentFromPost
          });
        default:
          return state;
    }
}
