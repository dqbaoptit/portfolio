import React from 'react';
import ReactDOM from 'react-dom';

// Containers Desktop

import Home from './containers/Desktop/Home';
import Intro from './containers/Desktop/Intro';
import Proj from './containers/Desktop/Projects';
import Connect from './containers/Desktop/Connect';



import 'antd/dist/antd.css';
import { BrowserRouter as Router,Route,Switch,Redirect } from 'react-router-dom';

import Break from 'react-break';


// Containers Mobile
import MHome from './containers/Mobile/Home';
import MProj from './containers/Mobile/Projects';
import MConnect from './containers/Mobile/Connect';
import ScrollToTop from './components/ScrollToTop';


const UIBreakpoints = {
  mobile: 0,
  phablet: 550,
  tablet: 768,
  desktop: 992,
};
ReactDOM.render(
  <React.Fragment>
    <Break
      breakpoints={UIBreakpoints}
      query={{ method: 'isAtLeast',breakpoint: 'tablet' }}>
      <Router >
        <ScrollToTop>
            <Switch >
            <Redirect exact from="/" to="/portfolio" />
            <Route path='/portfolio/intro' component={Intro} />
            <Route exact path='/portfolio' component={Home} />
            <Route path='/portfolio/projects' component={Proj} />
            <Route path='/portfolio/connect' component={Connect} />
            </Switch>
        </ScrollToTop>
      </Router>
    </Break>


    <Break
      breakpoints={UIBreakpoints}
      query={{ method: 'isAtMost',breakpoint: 'phablet' }}>
      <Router >
        <ScrollToTop>
          <Switch>
            <Redirect exact from="/" to="/portfolio" />
            <Redirect from='/portfolio/intro' to="/portfolio" />
            <Route exact path='/portfolio' component={MHome} />
            <Route path='/portfolio/projects' component={MProj} />
            <Route path='/portfolio/connect' component={MConnect} />
          </Switch>
        </ScrollToTop>
      </Router>
    </Break>
  </React.Fragment>,
  document.getElementById('root')
);
