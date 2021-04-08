import React, { useRef, useState, Suspense } from 'react'
import ReactDOM from 'react-dom';
import { Link } from "wouter";
import { Canvas, useFrame } from '@react-three/fiber'
import { Html, PerspectiveCamera } from '@react-three/drei'
import Model from '../models/Shiba'
import bone from '../images/bone.svg'
import '../styles/Home.css'
import { ROUTES } from '../const/routes'

function Home() {
  return(
  //  <div className="page">
  //    <h1 className="title">CRITTER PICKER</h1>
  //    <Link className="link" to={ROUTES.FORM1}>
  //      <div className="general">
  //      <img src={bone} alt="bone button">
         
  //      </img>
  //      <p id="text" className="abs-text">
  //        Get Started
  //      </p>

  //      </div>
  //    </Link>
  //  </div>
  <div className="page">
    <Canvas
      colorManagement
      shadowMap
      camera={{ position: [0, 0, 100], fov: 90 }}
    >
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Html fullscreen>
        <h1 className="title">CRITTER PICKER</h1>
      </Html>
      <Suspense fallback={null}>
        <Model />
      </Suspense>
    </Canvas>
  </div>
  )
}


function Box(props) {
  // This reference will give us direct access to the mesh
  const mesh = useRef()
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)
  // Rotate mesh every frame, this is outside of React without overhead
  useFrame((state, delta) => (mesh.current.rotation.x += 0.01))
  // Return view, these are regular threejs elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? 1.5 : 1}
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  )
}


export default Home;