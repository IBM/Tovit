import React, { Fragment } from 'react';
import { Component } from 'react';
import './App.css';
import { NavLink, Switch, Route } from 'react-router-dom';
import mainLogo from'./image/tovit_logo.svg';
import FadeIn from "react-fade-in";
import axios from 'axios'
import renderHTML from 'react-render-html';
import Supplies from './components/Supplies'
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import ScriptTag from 'react-script-tag';
import Iframe from './components/Iframe';
import {
  // An object of all themes
  themes,

  // Direct theme values
  white,
  g10,
  g90,
  g100,

  // Specific token values
  interactive01,
  interactive02,
} from '@carbon/themes';

const demoWatson = () => {
  window.loadWatsonAssistantChat({
    integrationID: "", // The ID of this integration.
    region: "eu-gb", // The region your integration is hosted in.
    serviceInstanceID: "", // The ID of your service instance.
    // onLoad: function(instance) { instance.render(); }
    carbonTheme: 'g90'
  }).then(function(instance){
    instance.render();
    instance.updateCSSVariables({
      'BASE-font-family': '"IBM Plex Sans", Helvetica Neue, Arial',
      '$focus': '#3d3d3d',
      '$hover-primary': '#262626',
      '$interactive-01': '#0f6dff',
      'WACLauncher__ButtonContainer': 'black'
    });
  }
  );
}
  const App = () => {
    demoWatson()
    return <div className='app'>
      {/* <h1>Tovit</h1> */}
      <Navigation />
      <Main />

    </div>
  };

  const Navigation = () => (
    <nav>
      <ul>
        <li><NavLink exact activeClassName="current" to='/Dashboard'>Dashboard</NavLink></li>
        <li><NavLink exact activeClassName="current" to='/ContactTracing'>Contact Tracing</NavLink></li>
        <li><NavLink exact activeClassName="current" to='/Supplies'>Supplies</NavLink></li>
        <img src='https://i.imgur.com/pe7PQ04.png'/>
      </ul>
    </nav>
  );

  const Main = () => (
    <Switch>
      <Route exact path='/' component={Home}></Route>
      <Route exact path='/Dashboard' component={Dashboard}></Route>
      <Route exact path='/ContactTracing' component={ContactTracing}></Route>
      <Route exact path='/Supplies' component={Supplies}></Route>
    </Switch>
  );

  const Dashboard = () => {
    return <Iframe source="https://faizhasan123.github.io/COVID-19_Dashboard/"/>
  };

  const Home = () => (
    <img className="SplashScreen" src={mainLogo}/>
  );
  
  
  const ContactTracing = () => {
    return <Iframe source="http://169.50.53.73:3000/"/>
  };



export default App;
