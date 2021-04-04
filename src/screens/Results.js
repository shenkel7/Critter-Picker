import React, {useState, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import NavBar from '../components/navbar'

const PET_FINDER_URL = 'https://api.petfinder.com';

const Results = () => {
    const [pets, setPets] = useState([]);
    const size = useSelector((state) => state.match.size);
    const location = useSelector((state) => state.match.location);
    const gender = useSelector((state) => state.match.gender);
    const distance = useSelector((state) => state.match.distance);
    
    useEffect(()=>{
        async function getPets() {
            const response = await fetch(`${PET_FINDER_URL}/v2/animals?location=${location}&distance=${distance}&size=${size}`, { 
                method: 'get', 
                headers: new Headers({
                  Authorization: `Bearer ${process.env.REACT_APP_PETFINDER_TOKEN}`, 
                }),
            });
            const data = await response.json();
            console.log(data.animals);
            setPets(data.animals);

        //     fetch(`${PET_FINDER_URL}/v2/animals?location=${location}&distance=${distance}&size=${size}`, { 
        //     method: 'get', 
        //     headers: new Headers({
        //       Authorization: `Bearer ${process.env.REACT_APP_PETFINDER_TOKEN}`, 
        //     }), 
        //   }).then(response => response.json())
        //   .then(data =>{
        //       console.log(data.animals);
        //       setPets(data.animals);
        //   });
        }
        getPets();
        // console.log(pets);
    },[]);



    // const getToken = () => {
    //     fetch(`${PET_FINDER_URL}/v2/oauth2/token?grant_type=client_credentials&client_id=${process.env.REACT_APP_PETFINDER_KEY}&client_secret=${process.env.REACT_APP_PETFINDER_SECRET}`, { 
    //         method: 'get', 
    //       }).then(response => console.log(response));
    // }

    const doApiCall = async () => {
    }

    return(
        <div>
            <NavBar />
            {pets.map((pet)=>{
                // console.log(pet);
                return (
                <div>
                    {pet.name}
                </div>)
            }
            )}

        </div>
    )
}

export default Results;