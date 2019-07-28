import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from './components/Header.js';
import NavMenu from './components/NavMenu.js';
import Footer from './components/Footer.js';
import HomePage from './components/homepage.js';
import ProjectCards from './components/projectCards.js';
import AboutMeComp from './components/aboutme.js';
import DevBlog from './components/DevBlog.js';
import './CssStyle.css';


function App() {

  return (
    <Router>
    <div className="App">
      <Header/>
      <NavMenu/>
      <div className = "mainPageWindow">
        <h1>Hello update</h1>
        <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path = "/about_me" component={AboutMeComp} />
        <Route path = "/projects" component={ProjectCards} />
        <Route path = "/dev_blog" component={DevBlog} />
        </ Switch>
      </div>
      <Footer/>
    </div>
    </ Router>
  );
}

export default App;
