import React, { useRef, useState, Suspense } from 'react'
import { Link } from "wouter";
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Html, Text } from '@react-three/drei'
import Model from '../models/Shiba'
import '../styles/Home.css'

function Home() {

  return(
  <div className="page">
    <h1 className="title">CRITTER PICKER</h1>
    <Canvas
      colorManagement
      shadowMap
      camera={{ position: [0, 2, 6], fov: 60 }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%"
      }}
    >
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      {/* <directionalLight
        intensity={0.5}
        castShadow
        shadow-mapSize-height={512}
        shadow-mapSize-width={512}
      /> */}
      <Suspense fallback={null}>
        <Model position={[0,.3,0]}/>
      </Suspense>
    </Canvas>
    <p className="cc">"Shiba Inu Dog" (https://skfb.ly/6QYIW) by Ida Faber is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/).</p>
  </div>
  )
}

export default Home;