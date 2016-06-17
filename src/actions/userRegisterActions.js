import $ from 'jquery';
import { browserHistory } from 'react-router';

export function userRegister(loginInfo) {
  function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }
  return function(dispatch) {
    if (loginInfo.email == "") {
      dispatch(checkInfoFailure('Please enter email.'));
    } else if (!validateEmail(loginInfo.email)) {
      dispatch(checkInfoFailure('Please check email format.'));
    } else if (loginInfo.username == "") {
      dispatch(checkInfoFailure('Please enter your name.'));
    } else if (loginInfo.password == "") {
      dispatch(checkInfoFailure('Please enter password.'));
    } else if (loginInfo.password != loginInfo.confirmPassword ) {
      dispatch(checkInfoFailure('Please check password typing.'));
    } else {
      dispatch(userRegisterRequest());
      $.ajax({
        url: 'http://localhost:3000/api_v1/users/register',
        dataType: 'json',
        type: 'POST',
        data: {
          email: loginInfo.email,
          password: loginInfo.password,
          username: loginInfo.username,
        },
        success: function(data) {
          dispatch(userRegisterSuccess(data));
          browserHistory.push('/user/login')
        }.bind(this),
        error: function(xhr, status, err) {
          dispatch(userRegisterFailure(xhr.responseJSON.message));
        }.bind(this)
      });
    }
  }
}

export function checkInfoFailure(error) {
  return {
    type: 'REGISTER_CHECK_INFO_FAILURE',
    errorMessage: error
  }
}

export function userRegisterRequest() {
  return {
    type: 'USER_REGISTER_REQUEST'
  }
}

export function userRegisterFailure(error) {
  return {
    type: 'USER_REGISTER_FAILURE',
    errorMessage: error
  }
}

export function userRegisterSuccess(data) {
  return {
    type: 'USER_REGISTER_SUCCESS'
  }
}
