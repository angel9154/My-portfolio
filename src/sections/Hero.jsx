import { Suspense } from "react"
import CanvasLoader from "../components/CanvasLoader"
import Heart from "../components/Heart"
import { Canvas } from "@react-three/fiber"
import { PerspectiveCamera, Stars, Float } from "@react-three/drei"
import { Target } from "../components/Target"
// import { max, xor } from "three/tsl"
import { useMediaQuery } from "react-responsive";
import { EffectComposer, Bloom } from '@react-three/postprocessing'
import { OrbitControls } from "@react-three/drei"

const Hero = () => {
// const x = useControls("Heart", {
//     positionX: {
//         value: 2.5,
//         min: -10,
//         max: 10,

//     },
//     positionY: {
//         value: 2.5,
//         min: -10,
//         max: 10,

//     },
//     positionZ: {
//         value: 2.5,
//         min: -10,
//         max: 10,

//     },
//     rotationX: {
//         value: 0,
//         min: -10,
//         max: 10,

//     },
//     rotationY: {
//         value: 0,
//         min: -10,
//         max: 10,

//     },
//     rotationZ: {
//         value: 0, 
//         min: -10,
//         max: 10,

//     },
//     scale: {
//         value: 0,
//         min: 0.001,
//         max: 0.1

//     }

// })
const isSmall = useMediaQuery({ maxWidth: 440 })
const isMobile = useMediaQuery({ maxWidth: 768 })
const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 })


return (
  <>
    {/* First section with heart canvas */}
    <section className="min-h-screen w-full flex flex-col relative">
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 gap-1 relative z-20">
        <p className="sm:text-3xl text-2xl font-medium text-center font-generalsans bg-gradient-to-r from-[#5b3758] via-[#eb8fab] to-[#e9ccd2] text-transparent bg-clip-text">
          Hi, I am Angel Full Stack Engineer
        </p>
        <p className="hero_tag text-center bg-gradient-to-r from-[#f26a8d] via-[#f49cbb] to-[#cf0fff] text-transparent bg-clip-text font-bold">
          I Code Stuff With Love and Good Intentions
        </p>
      </div>
      
      {/* First Canvas - Heart */}
      <div className="w-full h-full absolute inset-0 z-10">
        <Canvas className="w-full h-full">
          <Suspense fallback={<CanvasLoader />}>
            <PerspectiveCamera makeDefault position={[0, 0, 200]}/>
            <Heart
              position={[-1.7, -6.3, -2.3]}
              rotation={[0, 0, 0]}
              scale={isMobile ? 0.08 : 0.1}
            />
            <group></group>
            <ambientLight intensity={2} />
            <directionalLight position={[1,6,10]} intensity={1} />
          </Suspense>
          <OrbitControls />
        </Canvas>
      </div>
    </section>

    {/* Fixed background canvas */}
    <div className="fixed inset-0 z-0">
      <Canvas camera={{ position: [2, 8, 8], fov: 55 }}>
        <color attach="background" args={['black']} />
        <Float speed={4} rotationIntensity={1} floatIntensity={2}>
          <Target />
        </Float>
        <Stars saturation={0} count={400} speed={0.5} />
        <EffectComposer>
          <Bloom mipmapBlur luminanceThreshold={1} radius={0.7} />
        </EffectComposer>
      </Canvas>
    </div>
  </>
);
};

export default Hero