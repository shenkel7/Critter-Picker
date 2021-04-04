import React, { useRef, useState } from 'react'
import ReactDOM from 'react-dom';
import { Link } from "wouter";
import { Canvas, useFrame } from '@react-three/fiber'
import { useGLTF, Html, PerspectiveCamera } from '@react-three/drei'

const PET_FINDER_URL = 'https://api.petfinder.com/v2/animals';



const Home = () => {
    const doApiCall = () => {

        // fetch(`${PET_FINDER_URL}location=77386&distance=25`, { 
        //   method: 'get', 
        //   headers: new Headers({
        //     'Authorization': `Bearer ${TOKEN}`, 
        //     // 'Content-Type': 'application/x-www-form-urlencoded'
        //   }), 
        // }).then((response)=>{
        //   console.log(response);
        // })
    
        // axios.get(PET_FINDER_URL, {
        //   params: {
        //     location: '77386',
        //     distance: 25,
        //   }
        // }, 
        // {
        //   headers: {
        //     'Authorization': `Bearer ${TOKEN}`,
        //     "Access-Control-Allow-Origin": "*"
        //   }
        // }).then((response)=>{
        //   console.log(response);
        // })
      }

    return(
    <>
      {/* <Canvas>
          <Html> */}
          <header className="App-header">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <button onClick={()=>doApiCall()}> 
                Hello
            </button>
            
            </header>
          {/* </Html>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Box position={[-1.2, 0, 0]} />
        <Box position={[1.2, 0, 0]} />
  </Canvas>, */}
    </>
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