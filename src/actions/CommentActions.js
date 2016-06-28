import $ from 'jquery';
import { fetchPostList }  from './fetchPostListActions';
import config from '../config/index';

export function newComment(commentInfo) {
  return function(dispatch) {
    $.ajax({
      url: config.server + '/api_v1/posts/' + commentInfo.postId + '/comments',
      dataType: 'json',
      type: 'POST',
      headers: {
        Authorization: commentInfo.token
      },
      data: {
        description: commentInfo.comment
      },
      success: function(data) {
        dispatch(setCommentToPost(data.comment, commentInfo.postId));
      }.bind(this),
      error: function(xhr, status, err) {
        console.log(err);
      }.bind(this)
    });
  }
}

export function setCommentToPost(comment, postId) {
  return {
    type: 'SET_COMMENT_TO_POST',
    comment: comment,
    postId: postId
  }
}

export function deleteComment(commentInfo) {
  return function(dispatch) {
    $.ajax({
      url: 'http://localhost:3000/api_v1/posts/' + commentInfo.postId + '/comments/' + commentInfo.commentId,
      dataType: 'json',
      type: 'DELETE',
      headers: {
        Authorization: commentInfo.token
      },
      success: function(data) {
        dispatch(removeCommentFromPost(commentInfo.postId, commentInfo.commentId));
      }.bind(this),
      error: function(xhr, status, err) {
        console.log(err);
      }.bind(this)
    });
  }
}

export function removeCommentFromPost(postId, commentId) {
  return {
    type: 'REMOVE_COMMENT_FROM_POST',
    postId: postId,
    commentId: commentId
  }
}
