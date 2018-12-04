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

export default class TravelJournal extends Component {
    constructor() {
        super() 
        this.state = {
            Name: "Anant"
        }
    }
    render() {
        return (
            <form>
                <label>
                    <input type="text" name="name" id="mainText"/>     
                </label>
                <input type="submit" value="Submit" id="SubmitBtn"/>
            </form>
        );
    }

}

