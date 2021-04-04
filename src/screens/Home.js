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
     <h1 className="title">CRITTER PICKER</h1>
     <Link className="link" to={ROUTES.FORM1}>
       <div className="general">
       <img src={bone} alt="bone button">
         
       </img>
       <p id="text" className="abs-text">
         Get Started
       </p>

       </div>
     </Link>
   </div>
  )
}



export default Home;