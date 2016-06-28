import $ from 'jquery';
import config from '../config/index';
import { browserHistory } from 'react-router';
import jwtDecode from 'jwt-decode';

export function userLogin(loginInfo) {
  return function(dispatch) {
    if (loginInfo.email == "") {
      dispatch(checkInfoFailure('Please enter email.'));
    } else if (loginInfo.password == "") {
      dispatch(checkInfoFailure('Please enter password.'));
    } else {
      dispatch(userLoginRequest());
      $.ajax({
        url:  config.server + '/api_v1/users/login',
        dataType: 'json',
        type: 'POST',
        data: {
          email: loginInfo.email,
          password: loginInfo.password
        },
        success: function(data) {
          dispatch(userLoginSuccess(data));
          browserHistory.push('/')
        }.bind(this),
        error: function(xhr, status, err) {
          dispatch(userLoginFailure(xhr.responseJSON.message));
        }.bind(this)
      });
    }
  }
}

export function userLoginRequest() {
  return {
    type: 'USER_LOGIN_REQUEST'
  }
}

export function checkInfoFailure(error) {
  return {
    type: 'CHECK_INFO_FAILURE',
    errorMessage: error
  }
}

export function userLoginFailure(error) {
  localStorage.removeItem('token');
  return {
    type: 'USER_LOGIN_FAILURE',
    errorMessage: error
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

export function userLogout() {
  localStorage.removeItem('token');
  browserHistory.push('/user/login')
  return {
    type: 'USER_LOGOUT'
  }
}
