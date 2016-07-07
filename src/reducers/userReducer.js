var deepAssign = require('deep-assign');

const initialState = {
  login: {
    isAuthenticating: false,
    isAuthenticated: false,
    showError: false,
    errorMessage: ''
  },
  register: {
    isAuthenticating: false,
    showError: false,
    errorMessage: ''
  },
  currentUser: {
    id: '',
    avatar: '',
    name: '',
    token: '',
    noticeNumber: ''
  },
  profile: {
    isUpdating: false,
    showMessage: '',
    email: '',
    username: '',
    description: '',
    mobile: ''
  }
}

export function userReducer(state = initialState, action){
  switch(action.type) {
    case 'USER_LOGIN_REQUEST':
      return deepAssign({}, state, {
        login: { isAuthenticating: true }
      });
    case 'CHECK_INFO_FAILURE':
      return deepAssign({}, state, {
        login: {
          showError: true,
          errorMessage: action.errorMessage
        }
      });
    case 'USER_LOGIN_FAILURE':
      return Object.assign({}, state, {
        login: {
          isAuthenticating: false,
          isAuthenticated: false,
          showError: true,
          errorMessage: action.errorMessage
        }
      });
    case 'USER_LOGIN_SUCCESS':
      return deepAssign({}, state, {
        login: {
          isAuthenticating: false,
          isAuthenticated: true,
          showError: false,
          errorMessage: ''
        },
        currentUser: {
          id: action.id,
          avatar: 'http://dummyimage.com/100x100/cccccc/fff&text=' + action.username,
          name: action.username,
          token: action.token
        }
      });
    case 'USER_LOGOUT':
      return deepAssign({}, state, {
        login: {
          isAuthenticated: false,
        },
        currentUser: {
          id: '',
          avatar: 'http://dummyimage.com/100x100/cccccc/fff&text=nologin',
          name: '',
          token: ''
        }
      });
    case 'REGISTER_CHECK_INFO_FAILURE':
      return deepAssign({}, state, {
        register: {
          showError: true,
          errorMessage: action.errorMessage
        }
      });
    case 'USER_REGISTER_REQUEST':
      return deepAssign({}, state, {
        register: {
          isAuthenticating: true
        }
      });
    case 'USER_REGISTER_FAILURE':
      return Object.assign({}, state, {
        register: {
          isAuthenticating: false,
          showError: true,
          errorMessage: action.errorMessage
        }
      });
    case 'USER_REGISTER_SUCCESS':
      return deepAssign({}, state, {
        login: {
          showError: true,
          errorMessage: 'Register success, please login with your eamil and password.'
        },
        register: {
          isAuthenticating: false,
          showError: true,
          errorMessage: ''
        }
      });
    case 'SHOW_PROFILE':
      return deepAssign({}, state, {
        profile: {
          email: action.data.email,
          username: action.data.username,
          description: action.data.profile.description,
          mobile: action.data.profile.mobile
        }
      });
    case 'EDIT_PROFILE':
      return deepAssign({}, state, {
        profile: action.data
      });
    case 'PROFILE_UPDATE_REQUEST':
      return deepAssign({}, state, {
        profile: {
          isUpdating: true
        }
      });
    case 'UPDATE_PROFILE_SUCCESS':
      return deepAssign({}, state, {
        profile: {
          isUpdating: false,
          showMessage: 'Profile update success!'
        }
      });
    case 'CLEAN_PROFILE_ERROR_MESSAGE':
    return deepAssign({}, state, {
      profile: {
        showMessage: ''
      }
    });
    default:
      return state;
  }
}
