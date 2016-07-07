import $ from 'jquery';
import config from '../config/index';

export function fetchUserProfile(token) {
  return function(dispatch) {
    $.ajax({
      url:  config.server + '/api_v1/users/profile',
      dataType: 'json',
      type: 'GET',
      headers: {
        Authorization: token
      },
      success: function(data) {
        dispatch(showProfile(data));
      }.bind(this),
      error: function(xhr, status, err) {
        console.log(xhr.responseJSON.message);
      }.bind(this)
    });
  }
}

export function showProfile(data) {
  return {
    type: 'SHOW_PROFILE',
    data: data
  }
}

export function editProfile(data) {
  return {
    type: 'EDIT_PROFILE',
    data: data
  }
}

export function updateProfile(data) {
  return function(dispatch) {
    dispatch(profileUpdateRequest());
    $.ajax({
      url:  config.server + '/api_v1/users/profile',
      dataType: 'json',
      type: 'PUT',
      headers: {
        Authorization: data.token
      },
      data: data.profile,
      success: function(data) {
        dispatch(updateProfileSuccess());
      }.bind(this),
      error: function(xhr, status, err) {
        console.log(xhr.responseJSON.message);
      }.bind(this)
    });
  }
}

export function updateProfileSuccess() {
  return {
    type: 'UPDATE_PROFILE_SUCCESS'
  }
}

export function profileUpdateRequest() {
  return {
    type: 'PROFILE_UPDATE_REQUEST'
  }
}

export function cleanProfileErrorMessage() {
  return {
    type: 'CLEAN_PROFILE_ERROR_MESSAGE'
  }
}
