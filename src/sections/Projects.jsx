import { myProjects } from "../constants";
import { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Center, OrbitControls } from "@react-three/drei";
import CanvasLoader from "../components/CanvasLoader";
import ReactLogo from "../components/ReactLogo";

const projectCount = myProjects.length;

const Projects = () => {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);
  const currentProject = myProjects[selectedProjectIndex];

  const handleNavigation = (direction) => {
    setSelectedProjectIndex((prevIndex) => {
      if (direction === 'previous') {
        return prevIndex === 0 ? projectCount - 1 : prevIndex - 1;
      } else {
        return prevIndex === projectCount - 1 ? 0 : prevIndex + 1;
      }
    });
  };

          return (
        <section className="c-space my-20">
          <p className="head-text">My Work</p> 
          <div className="grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 w-full">
            <div className="flex flex-col gap-5 relative  sm:shadow-black-200">
              <div className="absolute top-0 right-0">
                <img src={currentProject.spotlight} alt="spotlight" className="w-full h-96 object-cover rounded-xl" />
              </div>
              <div className="p-3 backdrop-filter backdrop-blur-3xl w-fit rounded-lg" style={currentProject.logoStyle}>
                <img src={currentProject.logo} alt="logo" className="w-10 h-10 shadow-sm" />
              </div>
              <div className="flex flex-col gap-5 font-bold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600 bg-opacity-100 my-5">
                <p className="text-1xl ">{currentProject.title}</p>
                <p className="animatedText">{currentProject.desc}</p>
                <p className="animatedText">{currentProject.subdesc}</p>
              </div>
              <div className="flex items-center justify-between flex-wrap gap-5">
                <div className="flex items-center gap-3">
                  {currentProject.tags.map((tag, index) => (
                    <div key={index} className="tech-logo">
                      <img src={tag.path} alt={tag.name} />
                    </div>
                  ))}
                </div>

                <a className="flex items-center gap-2 cursor-pointer text-white-600" 
                href={currentProject.href} target="_blank" rel="noreferrer">
                  <p>Check Live Site
                    <img src="/assets?arrow-up.png" className="w-3 h-3" alt="arrow" />
                  </p>
                </a>
              </div>

                  <div className="flex justify-between items-center mt-7">
                    <button className="arrow-btn" onClick={() => handleNavigation('previous')}>
                      <img src="/assets/left-arrow.png" alt="left arrow" className="w-4 h-4"/> 
                    </button>
                    <button className="arrow-btn" onClick={() => handleNavigation('next')}>
                    <img src="/assets/right-arrow.png" alt="right arrow" className="w-4 h-4"/> 
                    </button>
                  </div>
                </div>

                <div className="border border-black-300 border-opacity-0 bg-black-200 bg-opacity-10 rounded-lg h-96 md:h-full">
                      <Canvas>
                          <ambientLight intensity={1} />
                            <directionalLight position ={[20, 20, 20]} />

                            <Center>
                                <Suspense fallback={<CanvasLoader />}>
                                 <group scale={1} position={[0, -3, 0]} rotation={[0, -0.1, 0]}> 
                                      <ReactLogo />
                                 </group>
                                </Suspense>

                            </Center>
                            <OrbitControls
  enableZoom={false} // Disable zoom
  maxPolarAngle={Math.PI / 2} // Limit vertical rotation (up/down)
  minPolarAngle={Math.PI / 2} // Limit vertical rotation (up/down)
  enableRotate={true} // Enable rotation around the Y-axis
  rotateSpeed={3} // Optional: Adjust the speed of rotation
/>
                      </Canvas>
                    </div> 

          </div>
        </section>
      );
};


export default Projects;