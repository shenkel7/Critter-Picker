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
                <div class="box">
                    <h1></h1>
                </div>
            </div>
            <div className="purpose">
            <br></br>
            <h1>PURPOSE</h1>
            <div className="desc"><p>We wanted to make a website where people can easily find matches for adopting pets!</p>
            </div>
        </div>
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
    ) 
}

export default TwoPeople;