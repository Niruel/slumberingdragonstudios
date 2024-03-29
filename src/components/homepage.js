import React, {Component} from 'react';
import GamingChef from '../images/GamingChef.png';
import PG06Nick from '../images/pg06nick_3880_BW.jpg';
import Bitsummit from '../images/bitsummit-image-logo.png';
import Segah from '../images/segalogo.jpg';
import Replay from '../images/replayingjplogo.png';
class HomePage extends Component{

  render(){
    return(
     
      <div>
          <h1> Thank you for visiting the dragon nest</h1>
          <br></br>
          <h3 className='tagLine'>This is my game design, game development, and game engine engineering portfolio.  </h3>
         
          
          <div className= 'me'>
            
          <h5 className='who'>Who am I</h5>
    
              <div className='myPic'>
          <img className='mePic' src={PG06Nick} alt={GamingChef}></img>
          </div>  
          <p className='engineTalk'> 
              Here I show off all the games I worked on in Unreal Engine 4 and Unity, and my own custom built game engines. I share my experience in gaming across
              all different game generes, write a blog on my life and current game projects I am working on, and 
              make cool games and put them on the internet.<br></br>
            I am a game engine engineer with experience in both Unity and Unreal Engine 4. The first game engine I worked on in 
            official copacity is Unreal Engine 4 on a student game project called "Torment". After that project I moved to Unity engine 
            for my next professional project "Optokinetic Exercise" and several projects after, with ocasionally<br></br> bouncing back to the Unreal Engine 4.
            Now having this much experience with creating games I thought it's time for me to get into game engine desing. Now I have read a lot on people saying
            don't build a game engine and yeah if you plan to make many types of games then it is understandable not to make a game engine, but
            if you are <br></br>building a specific game with a specific genere then I see no harm in building a game engine. 
            So I built my first game engine inside of processing 3 which is all about block breaking.   </p><br></br>

            <h3>Game events i've been attended:</h3>
            </div>
            
           
      
      </div>
    );
  }
}
export default HomePage;
