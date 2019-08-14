import React, {Component} from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab'
import Card from 'react-bootstrap/Card';
import ReactPlayer from 'react-player';
import TormentLogo from '../images/TormentLogo.jpg';
import TormentLogo2 from '../images/Torment_logo.jpg';
import Finch from '../images/fin.jpg';
import DevBuild1 from '../images/devBuild1.jpg';
import DevBuild2 from '../images/devBuild2.jpg';
import DevBuild3 from '../images/devBuild3.jpg';



class ProjectCards extends Component {


  render(){
    return(
      <Card>
        
          <Card.Title>Torment</Card.Title>

       
        <Tabs defaultActiveKey="tormentInfo" className="TormentProject">
             <Tab eventKey="tormentInfo" title="Intro">
               <Card.Body>
               <ReactPlayer url='https://vimeo.com/177251890' />
               <br></br>
               <Card.Text>
                
               </Card.Text>
               </Card.Body>
             </Tab>
             <Tab eventKey="tormentRoles" title="Roles">
                 <Card.Body>
                  <ul>
                  <li>AI programmer</li>
                  <li>Tools programmer</li>
                  </ul>
                  </Card.Body>
             </Tab>
             <Tab eventKey="tormentImages" title="Images">
                <Card.Body>
                <Card.Img className='tormentImage' src={TormentLogo} />
                <Card.Img className='tormentImage' src={TormentLogo2} />
                <Card.Img className='tormentImage' src={Finch} />
                <Card.Img className='tormentImage' src={DevBuild1} />
                <Card.Img className='tormentImage' src={DevBuild2} />
                <Card.Img className='tormentImage' src={DevBuild3} />
                </Card.Body>
             </Tab>
             <Tab eventKey="tormentVideos" title="Videos">
              <Card.Body className='TormentVideos'>
                <ReactPlayer className='tormentVideos1' url='https://www.facebook.com/TormentTheGame/videos/1130809523638485/'/>
                <ReactPlayer className='tormentVideos2' url='https://www.facebook.com/TormentTheGame/videos/1126299840756120/'/>
                <ReactPlayer className='tormentVideos3' url='https://www.facebook.com/TormentTheGame/videos/1128727060513398/'/>
                </Card.Body>
               </Tab>
            </Tabs>
       
      </Card>

    );
  }
}

export default ProjectCards;
