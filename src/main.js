import React, { Component } from 'react';

import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {About} from './About';
import {Stories} from './stories';
import {Timeline} from './events';
import fire from './config/Fire'
import Login from './Login'
import home from './home'
import LoginHome from './LoginHome'
import main from './main';


class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
          user:{},
        }
      }
    render() {
        return (
        <div>
        <Router>
        <div className = 'body'>

        <div className = "App">
        {this.state.user ? (<home />): (<Login/>)}
        </div>
        
            <div id="nav">
              <nav className="white" role="navigation">
                <div className="nav-wrapper">
                    <Link id = 'link' to="/">Geography</Link>
                    <Link id = 'link' to="/About">About </Link>
                    {' '}
                    <Link id = 'link' to="/events">Global Events </Link>
                </div>
              </nav>
            </div>
            <main>
            <Switch>
              <Route exact path="/" component={LoginHome} />
              <Route path="/About" component={About} />
              <Route exact path="/stories/:countryName" component={Stories} />
              <Route path="/events" component={Timeline} />
              <Route path="./main" component={main} />
            </Switch>
          </main>
          </div>
        </Router>
</div>)
};
}
export default Main;