import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Home';
import Intro from './Intro';
import Proj from './Projects';
import 'antd/dist/antd.css';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';


ReactDOM.render(
  <React.StrictMode>
    <Router >
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/intro/' component={Intro} />
          <Route path='/projects/' component={Proj} />
        </Switch>
      </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
