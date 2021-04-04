import React, {useState} from 'react';
import NavBar from '../components/navbar'
import '../styles/Form1.css'
import Form from 'react-bootstrap/Form'
import Dropdown from 'react-bootstrap/Dropdown'
import { Link } from "wouter";
import { ROUTES } from '../const/routes'
import { useSelector, useDispatch } from 'react-redux'
import { setSize, setGender, setDistance, setLocation } from '../app/matchSlice'
import '../styles/button.css'
import Buttons from '../components/button'

const Form1 = (props) => {
    const [displaySize, setDisplaySize] = useState("Size");
    const [displayGender, setDisplayGender] = useState("Gender");
    const [displayLocation, setDisplayLocation] = useState("Location");
    const [displayDistance, setDisplayDistance] = useState("Distance");

    const dispatch = useDispatch();

    const changeSize = (size, display) => {
        setDisplaySize(display);
        dispatch(setSize(size));
    }

    const changeGender = (gender, display) => {
        setDisplayGender(display);
        dispatch(setGender(gender));
    }

    const changeDistance = (distance, display) => {
        setDisplayDistance(display);
        dispatch(setDistance(distance));
    }

    const changeLocatioin = (location, display) => {
        setDisplayLocation(display);
        dispatch(setLocation(location));
    }

  return (
      <div className="form1">
            <NavBar />
            <h2 className="heading">Fill out the information below to get matched with your future pet!</h2>
            <div className="container">
                <Form.Group className="user-location">
                    <Form.Control placeholder="Enter Zip Code"/>
                </Form.Group>
                <Dropdown>
                    <Dropdown.Toggle variant="Warning" className="input-dropdown" id="dropdown-basic">
                        {displayDistance}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item className="input-dropdown-item" onClick={() => changeDistance(10, "10 mi")}>10 mi</Dropdown.Item>
                        <Dropdown.Item className="input-dropdown-item" onClick={() => changeDistance(20, "20 mi")}>20 mi</Dropdown.Item>
                        <Dropdown.Item className="input-dropdown-item" onClick={() => changeDistance(50, "50 mi")}>50 mi</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <Dropdown>
                <Dropdown.Toggle variant="Warning" className="input-dropdown" id="dropdown-basic">
                    {displaySize}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item className="input-dropdown-item" onClick={() => changeSize("small", "Small")}>Small</Dropdown.Item>
                    <Dropdown.Item className="input-dropdown-item" onClick={() => changeSize("medium", "Medium")}>Medium</Dropdown.Item>
                    <Dropdown.Item className="input-dropdown-item" onClick={() => changeSize("large", "Large")}>Large</Dropdown.Item>
                    <Dropdown.Item className="input-dropdown-item" onClick={() => changeSize("xlarge", "Extra Large")}>Extra Large</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            <Dropdown>
                <Dropdown.Toggle variant="Warning" className="input-dropdown" id="dropdown-basic">
                    {displayGender}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item className="input-dropdown-item" onClick={() => changeGender("male", "Male")}>Male</Dropdown.Item>
                    <Dropdown.Item className="input-dropdown-item" onClick={() => changeGender("female", "Female")}>Female</Dropdown.Item>
                    <Dropdown.Item className="input-dropdown-item" onClick={() => changeGender("male,female", "Any")}>Any</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            <Buttons />
            <Link to={ROUTES.RESULTS}><button className="button">Match Me!</button></Link>

        </div>
    </div>
  );
}
export default Form1;