import $ from 'jquery';
import config from '../config/index';
import { browserHistory } from 'react-router';
import jwtDecode from 'jwt-decode';

export function handleRefreshToken(token) {
  return function(dispatch) {
    dispatch(userLoginRequest());
    $.ajax({
      url:  config.server + '/api_v1/users/refresh_token',
      dataType: 'json',
      type: 'POST',
      headers: {
        Authorization: token.token
      },
      success: function(data) {
        dispatch(userLoginSuccess(data));
      }.bind(this),
      error: function(xhr, status, err) {
        dispatch(userLoginFailure());
      }.bind(this)
    });
  }
}

export function userLoginRequest() {
  return {
    type: 'USER_LOGIN_REQUEST'
  }
}

export function userLoginSuccess(data) {
  localStorage.setItem('token', data.token);
  return {
    type: 'USER_LOGIN_SUCCESS',
    id: jwtDecode(data.token).id,
    token: data.token,
    username: data.username
  }
}

export function userLoginFailure() {
  localStorage.removeItem('token');
  return {
    type: 'USER_LOGIN_FAILURE',
    errorMessage: ''
  }
}
