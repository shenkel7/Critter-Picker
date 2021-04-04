import React from 'react'
import '../styles/Form2.css'

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
        <div className="Container">
            Form2
        </div>
    )
}

export default Form2;