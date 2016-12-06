import React from 'react'
import ReactDOM from 'react-dom'
import {Route, Router, browserHistory, IndexRoute} from 'react-router'

import App from './pages/App.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'

ReactDOM.render(
    (
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={Home}/>
                <Route path='/home' component={Home}/>
                <Route path='/about' component={About}/>
            </Route>
        </Router>)
    , document.getElementById('app'));
