import {Link, Route} from 'react-router-dom';
import React, { Component } from 'react';

import Users from './containers/Users';
import asyncComponent from './hoc/asyncComponent';

const AsyncPizza = asyncComponent(() => {
  return import('./containers/Pizza.js'); 
})

export default class App extends Component {
  render() {
    return (
      <div>
        <div>
          <Link to="/">User</Link> |
          <Link to="/pizza">Pizza</Link>
        </div>
        <div>
          <Route path="/" exact component={Users} />
          <Route path="/pizza" exact component={AsyncPizza} />
        </div>
      </div>
    )
  }
}
