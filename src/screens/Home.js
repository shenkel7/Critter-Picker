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
     
     {/* <Link to="/">Home</Link>
              <Link to="/about">About</Link>
     <button onClick={}> 
                  Hello
              </button> */}
     <Link className="bone-button" to={ROUTES.FORM1}>
       <img src={bone} alt="bone button"></img>
     </Link>
   </div>

  )
}



export default Home;