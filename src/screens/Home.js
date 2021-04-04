import React, { useRef, useState } from 'react'
import ReactDOM from 'react-dom';
import { Link } from "wouter";
import { Canvas, useFrame } from '@react-three/fiber'
import { useGLTF, Html, PerspectiveCamera } from '@react-three/drei'
import bone from '../images/bone.svg'
import '../styles/Home.css'
import { ROUTES } from '../const/routes'

function Home() {
  return(
   <div className="page">
     <h1>CRITTER PICKER</h1>
     <Link className="bone-button" to={ROUTES.FORM1}>
       <img src={bone} className="bone rounded mx-auto d-block" alt="bone button"></img>
       <p id="text">
         Get Started
       </p>
     </Link>
   </div>
  )
}



export default Home;