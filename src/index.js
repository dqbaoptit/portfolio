import React from 'react';
import ReactDOM from 'react-dom';

// Containers Desktop

import Home from './containers/Desktop/Home';
import Intro from './containers/Desktop/Intro';
import Proj from './containers/Desktop/Projects';
import Connect from './containers/Desktop/Connect';



import 'antd/dist/antd.css';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';

import Break from 'react-break';


// Containers Mobile
import MHome from './containers/Mobile/Home';
import MProj from './containers/Mobile/Projects';
import MConnect from './containers/Mobile/Connect';



const UIBreakpoints = {
  mobile: 0,
  phablet: 550,
  tablet: 768,
  desktop: 992,
};


ReactDOM.render(
  <React.StrictMode>
    <Break
      breakpoints={UIBreakpoints}
      query={{ method: 'isAtLeast',breakpoint: 'tablet' }}>
    <Router >
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/intro/' component={Intro} />
          <Route path='/projects/' component={Proj} />
          <Route path='/connect/' component={Connect} />
        </Switch>
      </Router>
    </Break>


    <Break
      breakpoints={UIBreakpoints}
      query={{ method: 'isAtMost',breakpoint: 'phablet' }}>
      <Router >
        <Switch>
          <Route exact path='/' component={MHome} />
          <Route path='/projects/' component={MProj} />
          <Route path='/connect/' component={MConnect} />
        </Switch>
      </Router>
    </Break>
  </React.StrictMode>,
  document.getElementById('root')
);
