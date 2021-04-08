import React from 'react'
import '../styles/about.css'
import NavBar from '../components/navbar'
import img from '../images/aboutme.svg'
import img2 from '../images/website.svg'

function OnePerson(props) {
    return(
        <div>
        <div className="card text-center">
            <div className="overflow">
                { <img src={props.imgsrc} alt="process" className="card-img-top"></img> }
            </div>
            <div className="card-body text-dark">
                <h4 className="card-title">{props.title}</h4>
                <p className="card-text text-secondary">
                {props.desc}
                </p>
            </div>
        </div>
        </div>
    );
}

function TwoPeople() {
    return (
        <div>
            <NavBar />
            <div class="header">
                {/* <div class="box">
                    <h1></h1>
                </div> */}
            </div>
            <div className="section">
                <br></br>
                <h1>PURPOSE</h1>
                <div className="desc">
                    <p>
                        Every year, 1.5 million shelter animals are put down because they can’t find an owner. With our project, Critter Picker, we aim to make the process of finding a shelter pet as easy as possible to give these critters a loving home. 
                        Using the PetFinder API, we allow the user to input their location, preferred species of their desired pet, and then the pet’s size and gender. The website will show pets available that match the user's preferences! The user can click on one of their pet matches to travel to the pet’s profile on PetFinder.com.
                        We intended the app’s interface to be similar to apps such as Tinder to make the searching process easier on the user. Unfortunately, we didn’t have enough time to implement swiping for “yes” and “no,” but we hope to do so in the future!
                    </p>
                </div>
            </div>
            <div className="section">
                <h1>CREATORS</h1>
                <div className="container-fluid">
                    <div className="row">
                        <div className="arielle">
                            <OnePerson imgsrc = {img} title="Arielle Posadas" desc="CS Major at UTD"/>
                        </div>
                        <div className="kelly">
                            <OnePerson imgsrc = {img2} title="Kelly Shen" desc="CS Major at UT"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ) 
}

export default TwoPeople;