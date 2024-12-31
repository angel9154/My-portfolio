import React from "react";
import Navbar from "./sections/NavBar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
const App = () => {
    return (
        <>
      <Navbar className="relative z-30" />
    <Hero />
    <div className="relative z-10">  {/* Ensure this is above the 3D content */}
        <About />
        <Projects />
       
       
        <Contact />
      </div>
    </>
      
    )
}

export default App

// import * as THREE from 'three'
// import { useMemo, useRef } from 'react'
// import { Canvas, useFrame } from '@react-three/fiber'
// import { Trail, Float, Line, Sphere, Stars } from '@react-three/drei'
// import { EffectComposer, Bloom } from '@react-three/postprocessing'
// import { useControls } from 'leva';
// import { OrbitControls } from '@react-three/drei'

// export default function App() {
// // const { positionX, positionY, positionZ } = useControls("Camera Position", {
// //     positionX: { value: 0, min: -10, max: 10 },
// //     positionY: { value: 0, min: -10, max: 10 },
// //     positionZ: { value: 10, min: 1, max: 20 },
// //   });

//   return (
    
//     <div style={{ width: '100%', height: '100vh', margin: 0, overflow: 'hidden' }}>
//     {/* Make sure Canvas takes up the full page */}
//     <Canvas camera={{ position: [2, 8, 8], fov: 55 }} style={{ width: '100%', height: '100%' }}>
//       <color attach="background" args={['black']} />
//       <Float speed={4} rotationIntensity={1} floatIntensity={2}>
//         <Atom />
//       </Float>
//       <Stars saturation={0} count={400} speed={0.5} />
//       <EffectComposer>
//         <Bloom mipmapBlur luminanceThreshold={1} radius={0.7} />
//       </EffectComposer>
//       {/* <OrbitControls /> */}
//     </Canvas>
//   </div>
//   )
// }

// function Atom(props) {
//   const points = useMemo(() => new THREE.EllipseCurve(0, 0, 3, 1.15, 0, 2 * Math.PI, false, 0).getPoints(100), [])
//   return (
//     <group {...props}>
//       <Electron position={[0, 0, 0.5]} speed={6} />
//       <Electron position={[0, 0, 0.5]} rotation={[0, 0, Math.PI / 3]} speed={6.5} />
//       <Electron position={[0, 0, 0.5]} rotation={[0, 0, -Math.PI / 3]} speed={7} />
//       <Sphere args={[0.35, 64, 64]}>
//         <meshBasicMaterial color={[6, 0.5, 2]} toneMapped={false} />
//       </Sphere>
//     </group>
//   )
// }

// function Electron({ radius = 2.75, speed = 6, ...props }) {
//   const ref = useRef()
//   useFrame((state) => {
//   const t = state.clock.getElapsedTime() * speed
//   ref.current.position.set(
//     Math.sin(t) * radius, 
//     Math.cos(t) * radius * Math.atan(t) / Math.PI / 1.25, 
//     Math.cos(t) * radius  // Add motion on the Z axis
//   )
// })
//   return (
//     <group {...props}>
//       <Trail local width={5} length={10} color={new THREE.Color(2, 1, 10)} attenuation={(t) => t * t}>
//         <mesh ref={ref}>
//           <sphereGeometry args={[0.25]} />
//           <meshBasicMaterial color={[10, 1, 10]} toneMapped={false} />
//         </mesh>
//       </Trail>
//     </group>
//   )
// }
