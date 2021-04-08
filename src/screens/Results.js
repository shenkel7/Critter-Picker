import React, {useState, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setToken } from '../app/authSlice'
import HorizontalScroll from 'react-scroll-horizontal';
import NavBar from '../components/navbar'
import { FixedSizeList as List } from "react-window";
import '../styles/Results.css'

const PET_FINDER_URL = 'https://api.petfinder.com';

const Results = () => {
    const dispatch = useDispatch();

    const [pets, setPets] = useState([]);
    const size = useSelector((state) => state.match.size);
    const location = useSelector((state) => state.match.location);
    const gender = useSelector((state) => state.match.gender);
    const distance = useSelector((state) => state.match.distance);
    const type = useSelector((state) => state.match.type);

    const [currToken, setCurrToken] = useState(useSelector((state) => state.auth.token));
    
    useEffect(()=>{
        getPets();
        // console.log(pets);
    },[currToken]);

    const getPets = () => {
        console.log("getting pets");
        fetch(`${PET_FINDER_URL}/v2/animals?location=${location}&distance=${distance}&size=${size}&type=${type}`, { 
            method: 'get',
            headers: new Headers({
                Authorization: `Bearer ${currToken}`, 
            }),
        })
        .then((response => response.json()))
        .then((data) =>{
            console.log("data", data);
            setPets(data.animals);
        })
        .catch((err)=> {
            console.log("error", err);
            getToken();
        })
    }

    const getToken = () => {
        fetch(`${PET_FINDER_URL}/v2/oauth2/token`, { 
            method: 'POST', 
            body: `grant_type=client_credentials&client_id=${process.env.REACT_APP_PETFINDER_KEY}&client_secret=${process.env.REACT_APP_PETFINDER_SECRET}`,
	        headers: {
		        'Content-Type': 'application/x-www-form-urlencoded'
	        }
          }).then(response =>response.json())
          .then((data)=> {
            dispatch(setToken(data.access_token));
            setCurrToken(data.access_token);
          });
    }

    return(
        <div className="main-container">
            <NavBar />
            <div className="hor-scroll">
                {pets.map((pet)=>{
                    // console.log(pet);
                    return (
                        <div className="mini-container">
                            <a href={pet.url}>

                            <div className="card">
                                <img src={pet.photos[0] && pet.photos[0].large ? pet.photos[0].large : "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Fpremium-vector%2Fset-kawaii-smile-japanese-dog-akita-inu-cartoon_4905226.htm&psig=AOvVaw2TsAzk-_ln8F7rSLQGzw-v&ust=1617657781413000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMCvtIfD5e8CFQAAAAAdAAAAABAI"}/>
                            </div>
                            </a>
                            <div className="heading">
                                {pet.name}
                            </div>
                        </div>
                    )
                }
                )}
            </div>
        </div>
    )
}

export default Results;