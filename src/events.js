import React, { Component } from 'react';

import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {About} from './About';
import {Stories} from './stories';
import fire from './config/Fire'
import Login from './Login'
import home from './home'
import LoginHome from './LoginHome'
import main from './main';
import HorizontalTimeline from 'react-horizontal-timeline';
import moment from 'moment';
import * as d3 from 'd3';

export class Timeline extends Component {
    state = {
        data: [],
        value: 0,
        previous: 0,
    };

    componentDidMount() {
        d3.csv('data/SeptemberOctoberGlobalEvents.csv').then(d => {
            this.setState({ data: d });
        })
    }

    render() {
        let dates = this.state.data.map((d) => {
            return moment(d.EventDate, "MM/DD/YYYY").format("YYYY-MM-DD");
        })

        let content = this.state.data.map((d, i) => {
            return (
                <div className='container' key={"event" + i}>
                    <h3 className='text-center'>{d.EventName}</h3>
                    <img width="100%" src={d.EventImage} align='middle' alt={d.EventName} />
                    <p>{d.EventDescription}</p>
                </div>
            );
        });

        return (
            <div>
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
            <div>
                <div style={{
                    width: '1000px', height: '100px',
                    margin: '0 auto', paddingTop: '35px',
                    fontSize: '14px', position: 'relative'
                }}>
                    <HorizontalTimeline
                        index={this.state.value}
                        indexClick={(index) => {
                            this.setState({
                                value: index,
                                previous: this.state.value
                            });
                        }}
                        values={dates} />
                </div>
                <div className='events'>
                    {content[this.state.value]}
                </div>
            </div>
            </div>
        );
    }
}