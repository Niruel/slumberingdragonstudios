import React, {Component} from 'react';
import{ReactComponent as GitHub} from  '../assets/github.svg';
import{ReactComponent as LinkedIn} from  '../assets/linkedin-logo.svg';
import{ReactComponent as Twitter} from  '../assets/twitter.svg';
import{ReactComponent as YouTube} from  '../assets/youtube.svg';


class Footer  extends Component{
  render(){
    return (
      <div className="footer">
      <footer>
        <p className='CloseTag'>(C)Nicholas Ruppel, all rights reserved 2019</p>
        <div className="footer_svg">
          <ul className="footer_list">
            <li className="github">
              <a href="https://github.com/Niruel">
                  <GitHub/>
              </a>

            </li>
            <li className="twitter">
              <a href="https://twitter.com/_Niruel_">
                  <Twitter/>
                </a>

            </li>
            <li className="youtube">
              <a href="https://www.youtube.com/channel/UC93cj8K71X05SRD4ZKRbQCw?view_as=subscriber">
                    <YouTube/>
                </a>
            </li>
            <li className="linkedin">
              <a href="https://www.linkedin.com/in/nicholasruppel/">
                <LinkedIn/>

            </a>
          </li>
        </ul>
      </div>
      </footer>
      </div>
    );
  }
}



export default Footer;
