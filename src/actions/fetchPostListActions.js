import $ from 'jquery';

export function fetchPostList() {
  return function(dispatch) {
    $.ajax({
      url: 'http://localhost:3000/api_v1/posts',
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
