var React = require('react');
var ReactDOM = require('react-dom');
var Layout = require('./views/layout.jsx');
var Empty = require('./views/empty.jsx');
var Notfound = require('./views/notFound.jsx');
var IndexContent = require('./views/indexContent.jsx');
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router'

ReactDOM.render(
  (
  <Router history={browserHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={IndexContent} />
      <Route path="empty" component={Empty}/>
    </Route>
    <Route path="*" component={Notfound}/>
  </Router>
  ),
  document.getElementById('page-content')
);
