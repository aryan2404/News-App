
import './App.css';
import {BrowserRouter as Router,Routes ,Route} from 'react-router-dom'
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';

export default class App extends Component {
  apiKey= process.env.REACT_APP_NEWS_API;
 render() {
    return (
      <div>
   <Router>
   <Navbar/>
     <Routes>
     <Route  exact path ="/" element ={<News apiKey={this.apikey} key="General" pageSize ={5} country='in' category="General" />}/>
      <Route exact path ="/Business" element ={<News apiKey={this.apikey} key="Business" pageSize ={5} country='in' category="Business" />}/>
      <Route exact path ="/Technology" element ={<News apiKey={this.apikey} key="Technology" pageSize ={5} country='in' category="Technology" />}/>
      <Route exact path ="/Sports" element ={<News apiKey={this.apikey}  key="Sports"  pageSize ={5} country='in' category="Sports" />}/>
      <Route exact path ="/Health" element ={<News apiKey={this.apikey} key="Health" pageSize ={5} country='in' category="Health" />}/>
      <Route exact path ="/Fashion" element ={<News apiKey={this.apikey} key="Fashion" pageSize ={5} country='in' category="Fashion" />}/>
    </Routes>
        </Router>
      </div>
    )
  }
}
