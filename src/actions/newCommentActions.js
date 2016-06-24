import $ from 'jquery';
import { fetchPostList }  from './fetchPostListActions';

export function newComment(commentInfo) {
  return function(dispatch) {
    $.ajax({
      url: 'http://localhost:3000/api_v1/posts/' + commentInfo.postId + '/comments',
      dataType: 'json',
      type: 'POST',
      headers: {
        Authorization: commentInfo.token
      },
      data: {
        description: commentInfo.comment
      },
      success: function(data) {
        dispatch(setCommentToPostList(data.comment, commentInfo.postId));
      }.bind(this),
      error: function(xhr, status, err) {
        console.log(err);
      }.bind(this)
    });
  }
}

export function setCommentToPostList(comment, postId) {
  return {
    type: 'SET_COMMENT_TO_POST_LIST',
    comment: comment,
    postId: postId
  }
}
