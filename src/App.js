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
import main from './main'
import {Redirect} from 'react-router-dom';
import TravelJournal from './TravelJournal';
  
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user:{},
    }
  }

  componentDidMount(){
    this.authListener();
  }

  authListener() {
    fire.auth().onAuthStateChanged((user) => {
     // console.log(user);
      if (user) {
        this.setState({ user });
        console.log(user);
        localStorage.setItem('user', user.uid);
      } else {
        this.setState({ user: null });
       // localStorage.removeItem('user');
      }
    });
  }

  render() {
    let url;
    if(this.state.user != null) {
      url = <Redirect to={'/main'} />;
    }
      return (
        <Router>
          <div>
           {url}
        <div className = 'body'>
        <Header></Header>
        <div className = "App">
        {this.state.user ? (<home />): (<Login/>)}
        </div>
          <main>
            <Switch>
              <Route exact path="/" component={LoginHome} />
              <Route path="/About" component={About} />
              <Route exact path="/stories/:countryName" component={Stories} />
              <Route path="/events" component={Timeline} />
              <Route path="/main" component={main} />
              <Route path="/TravelJournal" component={TravelJournal}/>
            </Switch>
          </main>
          </div>
          </div>
        </Router>
    );
  }
}
export class Header extends React.Component {
  render() {
     return (
        <div className = 'name'>
          
           <h1>FieldTrip</h1>
        </div>
     );
  }
}

export default App;
