import React, {Component} from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab'
import Card from 'react-bootstrap/Card';
import ReactPlayer from 'react-player';
import TormentLogo from '../images/TormentLogo.jpg';
import TormentLogo2 from '../images/Torment_logo.jpg';

class ProjectCards extends Component {


  render(){
    return(
      <Card>

          <Card.Title>Torment</Card.Title>

        <Card.Body>
        <Tabs defaultActiveKey="tormentInfo" className="TormentProject">
             <Tab eventKey="tormentInfo" title="Info">
               <ReactPlayer url='https://vimeo.com/177251890' />
               <Card.Text>
                 Torment is a third person spell casting cover shooter, with split screen co-op.
               </Card.Text>
             </Tab>
             <Tab eventKey="tormentImages" title="Images">
                <Card.Img  src={TormentLogo} />
                <Card.Img  src={TormentLogo2} />

             </Tab>
             <Tab eventKey="tormentRoles" title="Roles">
                  <ul>
                  <li>AI programmer</li>
                  <li>Tools programmer</li>
                  </ul>
             </Tab>
            </Tabs>
        </Card.Body>
      </Card>

    );
  }
}

export default ProjectCards;
