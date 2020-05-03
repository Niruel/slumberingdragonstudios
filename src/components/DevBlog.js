import React, {Component} from 'react';
import Card from 'react-bootstrap/Card';
class DevBlog extends Component{

  render(){
    return(

      <Card bg="dark" text="white" style={{ width: '22rem' , height: '20rem'}}>
    <Card.Header>Website Launch</Card.Header>
    <Card.Body>
      <Card.Title>The Launch of SlumberingDragonStudios.com</Card.Title>
      <small>07/29/19</small>
      <hr></hr>
      <Card.Text>
        Today is very exciting as it marks the launch of my Website
        that was in development for over two years starting with just
        normal HTML, CSS, and Javascript. Now it is a React app, and
        I love everything about Reacts process.
      </Card.Text>
    </Card.Body>
    
  </Card>
  

    );
  }
}
export default DevBlog;
