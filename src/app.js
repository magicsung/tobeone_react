import React                from 'react';
import ReactDOM             from 'react-dom';
import { Provider }         from 'react-redux';
import { createStore, applyMiddleware }  from 'redux';
import thunk                from 'redux-thunk';
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';
import reducers             from './reducers';
import Layout               from './views/layout.jsx';
import AuthLayout           from './views/authLayout.jsx';
import NotFound             from './views/notFound.jsx';
import IndexContent         from './views/indexContent.jsx';
import Login                from './views/login.jsx';
import Register             from './views/register.jsx';

require('./css/main.scss');

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(reducers);

ReactDOM.render(
  (
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route path="/" component={Layout}>
          <IndexRoute component={IndexContent} />
        </Route>
        <Route path="/user" component={AuthLayout}>
          <Route path="login" component={Login} />
          <Route path="register" component={Register} />
        </Route>
        <Route path="*" component={NotFound} />
      </Router>
    </Provider>
  ),document.getElementById('page-content')
);
