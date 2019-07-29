import React, {Component} from 'react';
import {Link}  from 'react-router-dom';
import {ReactComponent as Home} from    '../assets/torii-gate-japan-svgrepo-com.svg';
import{ReactComponent as AboutMe} from  '../assets/hat-cultures-svgrepo-com.svg';
import{ReactComponent as Projects} from '../assets/tools-hand-drawn-outlines-of-configuration-interface-symbol-svgrepo-com.svg';
import{ReactComponent as DevBlog} from  '../assets/gamepad-game-controller-svgrepo-com.svg'

class NavMenu  extends Component{

  render(){
    return (
      <div className="sideBar">
      <nav className="main-nav">
    		<ul>

    			<li>
              <Link to= '/' >
                  <Home/>
    				      <span>Home</span>
                  </ Link>
    		      </li>


        <li className="aboutme">
            <Link to = '/about_me'>
            <AboutMe/>
            <span> About Me </span>
            </ Link>
        </li>


        <li className="projects">
            <Link to= 'projects'>
            <Projects/>
            <span> Projects </span>
            </Link>
        </li>


        <li className="devBlog">
            <Link to = 'dev_blog'>
            <DevBlog/>
            <span> Dev Blog </span>
            </ Link>
        </li>

    </ul>
    </nav>

      </div>

    );
  }
}
export default NavMenu;
