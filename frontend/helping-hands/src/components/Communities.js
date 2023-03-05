import React from 'react'

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './help.css'



function Help() {

  
  return (
    <div className="help-card">
      <Card style={{ width: '24rem', marginTop: '20px'  }}>
      <Card.Img variant="top" src="https://cdn.britannica.com/07/84507-050-35C6F597/Columbus-Ohio.jpg" />
      <Card.Body>
        <Card.Title>Help City</Card.Title>
        <Card.Text>
          Food Shelter Medicine and Clothes
        </Card.Text>
        <Card.Text>
          Columbus
        </Card.Text>
        <Button variant="primary">Join</Button>
        </Card.Body>
      </Card>
      
      <Card style={{ width: '24rem', marginTop: '20px'  }}>
      <Card.Img variant="top" src="https://www.travelandleisure.com/thmb/91pb8LbDAUwUN_11wATYjx5oF8Q=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/new-york-city-evening-NYCTG0221-52492d6ccab44f328a1c89f41ac02aea.jpg" />
      <Card.Body>
        <Card.Title>Harper</Card.Title>
        <Card.Text>
          Food Shelter Medicine and Clothes
        </Card.Text>
        <Card.Text>
          New York
        </Card.Text>
        <Button variant="primary">Join</Button>
        </Card.Body>
      </Card>

      <Card style={{ width: '24rem', marginTop: '20px'  }}>
      <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Chicago_Skyline_Oct_2022_2.jpg/800px-Chicago_Skyline_Oct_2022_2.jpg" />
      <Card.Body>
        <Card.Title>Round Up</Card.Title>
        <Card.Text>
          Food Shelter Medicine and Clothes
        </Card.Text>
        <Card.Text>
          Chicago
        </Card.Text>
        <Button variant="primary">Join</Button>
        </Card.Body>
      </Card>
      
      
    </div>
  );
}

export default Help;