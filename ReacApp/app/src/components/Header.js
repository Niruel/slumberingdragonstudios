import React, {Component} from 'react';
import {ReactComponent as Logo} from    '../assets/Logo_svg.svg';

class Header  extends Component{
  render(){
    return (
      <div>
      <header>

        <div className= "header-logo">
        <Logo className= "svg-logo"/>
          <h1 className="myName"> Nicholas Ruppel</h1>
          <h1>What the</h1>
          
    </div>
  </header>

      </div>
    );
  }
}



export default Header;
