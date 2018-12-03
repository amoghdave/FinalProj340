import React, { Component } from 'react';

import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Stories} from './stories';
import {Timeline} from './events';
import fire from './config/Fire'
import Login from './Login'
import home from './home'
import LoginHome from './LoginHome'
import main from './main';


export class About extends Component {
    
    render() {
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
            <div className="how">
                We wanted to go beyond just providing materials; we wanted to teach,
                to have a direct connection with these students. And so began our
                fieldtrip idea.Through Fieldtrip, the kids can experience the world from the luxury
                of their home or school. We tell stories based on a specific
                geographical location the children choose from. Then based on each
                location we provide different genres of stories to keep the children
                engaged and excited.As the children read more they can also choose more challenging
                content to read and improve their reading skills while discovering
                the world. 

            <div className = "what">
                There are a few regions on the globe the children can select from and the
                site navigates to the stories in that region. Then the children can
                simply pick which story they want to read. Many pictures and videos are supplied with the 
                stories to give the children an audio visual experience of the moment. Education isn't simply
                an opportunity for kids to memorize curriculum and apply their knowledge,
                it is also an opportunity for them to grow with the world. Therefore,
                by reading about various cultural stories from various perspectives
                can give the children a global outlook on life.

            <div className="about">
                It all began with an idea to unlock the life-changing power of modern
                technology, something ignored or forgotten in many developed areas
                around the world. Kinspire wanted to focus on using this technology
                in order to ensure that every child has access to a well-rounded
                schooling. This was, of course, easier said than done. One of the
                biggest challenges we faced in our initial planning was the fact
                that in these underprivileged communities, education was a luxury;
                simply proclaiming that education would be the solution was far from
                enough. Therefore, we empahsize on the use of technology to bridge the gap
                between the children and the rest of the world. Through Fieldtrip
                the kids can learn about a whole different world across the globe.
                It is meant to be a cultural immersion experience.
             </div>    
        </div>
    </div>
</div>
</div>)
};
}