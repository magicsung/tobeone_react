import $ from 'jquery';
import config from '../config/index';

export function fetchPostList() {
  return function(dispatch) {
    $.ajax({
      url:  config.server + '/api_v1/posts/',
      dataType: 'json',
      type: 'GET',
      success: function(data) {
        dispatch(setPostList(data));
      }.bind(this),
      error: function(xhr, status, err) {
        console.log(xhr.responseJSON.message);
      }.bind(this)
    });
  }
}

export function setPostList(data) {
  return {
    type: 'SET_POST_LIST',
    postList: data.posts
  }
}

export function handleLoadMorePost() {
  return function(dispatch) {
    console.log('fetching post...');
    dispatch(loadMorePostRequest());
    $.ajax({
      url:  config.server + '/api_v1/posts/',
      dataType: 'json',
      type: 'GET',
      success: function(data) {
        dispatch(appendPostList(data));
      }.bind(this),
      error: function(xhr, status, err) {
        dispatch(loadMorePostFail());
      }.bind(this)
    });
  }
}

export function loadMorePostRequest() {
  return {
    type: 'LOAD_MORE_POST_REQUEST'
  }
}

export function appendPostList(data) {
  return {
    type: 'APPEND_POST_LIST',
    postList: data.posts
  }
}

export function loadMorePostFail(message) {
  return {
    type: 'LOAD_MORE_POST_FAIL'
  }
}
