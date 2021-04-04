import React from 'react'
import '../styles/Form2.css'
import Dropdown from 'react-bootstrap/Dropdown'
import NavBar from '../components/navbar';

const PET_FINDER_URL = 'https://api.petfinder.com';

const Form2 = () => {

    const getToken = () => {
        fetch(`${PET_FINDER_URL}/v2/oauth2/token?grant_type=client_credentials&client_id=${process.env.REACT_APP_PETFINDER_KEY}&client_secret=${process.env.REACT_APP_PETFINDER_SECRET}`, { 
            method: 'get', 
          }).then(response => console.log(response));
    }

    const doApiCall = () => {
        fetch(`${PET_FINDER_URL}/v2/animals?location=77386&distance=25`, { 
          method: 'get', 
          headers: new Headers({
            Authorization: `Bearer ${process.env.REACT_APP_PETFINDER_TOKEN}`, 
          }), 
        }).then(response => response.json())
        .then(data =>{
            console.log(data);
        });
    }

    return(
        <div>
            <NavBar />
            <div className="Container">
            <Dropdown>
                <Dropdown.Toggle variant="Warning" className="input-dropdown" id="dropdown-basic">
                    Size
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item className="input-dropdown-item" onClick={() => console.log("clicke")}>Action</Dropdown.Item>
                    <Dropdown.Item className="input-dropdown-item" onClick={() => console.log("clicke")}>Action</Dropdown.Item>
                    <Dropdown.Item className="input-dropdown-item" onClick={() => console.log("clicke")}>Action</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            </div>
        </div>
    )
}

export default Form2;