import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './views/layout.jsx';
import Empty from './views/empty.jsx';
import NotFound from './views/notFound.jsx';
import IndexContent from './views/indexContent.jsx';
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';
require('./css/main.scss');

ReactDOM.render(
  (
  <Router history={browserHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={IndexContent} />
      <Route path="empty" component={Empty} />
    </Route>
    <Route path="*" component={NotFound} />
  </Router>
  ),document.getElementById('page-content')
);
