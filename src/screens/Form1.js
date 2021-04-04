import React from 'react';
import NavBar from '../components/navbar'
import '../styles/Form1.css'
import Form from 'react-bootstrap/Form'
import Dropdown from 'react-bootstrap/Dropdown'
import { Link } from "wouter";
import { ROUTES } from '../const/routes'
import '../styles/button.css'

const Form1 = (props) => {
  return (
      <div className="form1">
            <NavBar />
            <h2>Fill out the information below to get matched with your future pet!</h2>
            <div className="container">
                <Form.Group className="user-location">
                    <Form.Control placeholder="Enter Zip Code"/>
                </Form.Group>
                <Dropdown>
                    <Dropdown.Toggle variant="Warning" className="input-dropdown" id="dropdown-basic">
                        Distance
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item className="input-dropdown-item" onClick={() => console.log("clicke")}>10 mi</Dropdown.Item>
                        <Dropdown.Item className="input-dropdown-item" onClick={() => console.log("clicke")}>20 mi</Dropdown.Item>
                        <Dropdown.Item className="input-dropdown-item" onClick={() => console.log("clicke")}>50 mi</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <Link to={ROUTES.FORM2}><button class="button">CONTINUE</button></Link>
        </div>
    </div>
  );
}
export default Form1;