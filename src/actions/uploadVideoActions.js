import $ from 'jquery';
import config from '../config/index';
import { browserHistory } from 'react-router';

export function uploadVideo(videoInfo, token) {
  return function(dispatch) {
    $.ajax({
      url: config.server + '/api_v1/posts/',
      dataType: 'json',
      type: 'POST',
      headers: {
        Authorization: token
      },
      data: {
        title: videoInfo.title,
        description: videoInfo.description,
        youtubeVideoID: 'hMiB1xpwri8'
      },
      success: function(data) {
        console.log(data);
        browserHistory.push('/');
        // dispatch(setPostToPostList(data.comment, commentInfo.postId));
      }.bind(this),
      error: function(xhr, status, err) {
        console.log(err);
      }.bind(this)
    });
  }
}

export function setPostToPostList(comment, postId) {
  return {
    type: 'SET_POST_TO_POST_LIST',

  }
}
