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
    avatar: 'http://dummyimage.com/100x100/cccccc/fff&text=nologin',
    name: null,
    token: null,
    noticeNumber: null
  }
}

export function userReducer(state = initialState, action){
  switch(action.type) {
    case 'USER_LOGIN_REQUEST':
      return Object.assign({}, state, {
        login: { isAuthenticating: true }
      });
    case 'CHECK_INFO_FAILURE':
      return Object.assign({}, state, {
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
      return Object.assign({}, state, {
        login: {
          isAuthenticating: false,
          isAuthenticated: true,
          showError: false,
          errorMessage: null
        },
        currentUser: {
          avatar: 'http://dummyimage.com/100x100/cccccc/fff&text=' + action.username,
          name: action.username,
          token: action.token
        }
      });
    case 'USER_LOGOUT':
      console.log('logout!');
      return Object.assign({}, state, {
        login: {
          isAuthenticated: false,
        },
        currentUser: {
          avatar: 'http://dummyimage.com/100x100/cccccc/fff&text=nologin',
          name: null,
          token: null
        }
      });
    case 'REGISTER_CHECK_INFO_FAILURE':
      return Object.assign({}, state, {
        register: {
          showError: true,
          errorMessage: action.errorMessage
        }
      });
    case 'USER_REGISTER_REQUEST':
      return Object.assign({}, state, {
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
      return Object.assign({}, state, {
        login: {
          showError: true,
          errorMessage: 'Register success, please login with your eamil and password.'
        },
        register: {
          isAuthenticating: false,
          showError: true,
          errorMessage: null
        }
      });
    default:
      return state;
  }
}
