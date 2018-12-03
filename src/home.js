import React, { Component } from 'react';
import AmCharts from '@amcharts/amcharts3-react';
import 'ammap3/ammap/ammap.js';
import './home.css';
import {Redirect} from 'react-router-dom';
import fire from './config/Fire';


export class home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countryClicked: null
    }
    this.logout = this.logout.bind(this);
  }

  logout() {
    fire.auth().signOut();
}

  

  handleMapClick = event => {
    this.setState({countryClicked: event.mapObject.title})
    console.log(event.mapObject.value)
    console.log(event.mapObject.id)
    console.log(event.mapObject.title)
  }

  render() {
    if(this.state.countryClicked !== null) {
      return <Redirect to={'./stories/' + this.state.countryClicked}></Redirect>
    }
    let config = {
      type: "map",
      theme: "light",
      colorSteps: 10,
      panEventsEnabled: true,
      backgroundColor: "#6DD5FA",
      backgroundAlpha: 1,

      dataProvider: {
        map: "worldHigh",
        getAreasFromMap: true,
        areas: [{
          "id": "IN-JK",
          "value": 4447100
        }],
      },
      "listeners": [{
        "event": "clickMapObject",
        "method": this.handleMapClick
      }],
      areasSettings: {
        autoZoom: true,
        color: "#3CB371",
        colorSolid: "#4B0082",
        selectedColor: "#eee518",
        outlineColor: "#666666",
        rollOverColor: "#20c9e1",
        rollOverOutlineColor: "#000000",
        balloonText: "[[title]]"
      },
      legend: {
        labelText: "[[title]]"
      },
    };
    return (
      <div className='title'>
        To begin your immersive fieldtrip experience, select a country and start learning!
          <div className="Map">
          <AmCharts.React style={{ width: "100%", height: "600px" }} options={config} />
          
        </div>
      </div>);
  }
}


