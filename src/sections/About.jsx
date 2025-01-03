  import Globe from "react-globe.gl";
  import { useState } from "react";
  import Button from '../components/Button.jsx';
 const About = () => {

    const [hasCopied, setHasCopied] = useState(false);

    const handleCopy = () => {
        
        navigator.clipboard.writeText('angelgerenavazquez@outlook.com');
       
        setHasCopied(true);

        setTimeout(() => {
            setHasCopied(false);
        }, 2000)
    }
    return (

<section className="c-space my-20">
  <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-1 gap-5"> 
    {/* <!-- First Grid Item --> */}
    <div className="col-span-1 xl:row-span-3">
      <div className="grid-container">
        <img src={`${import.meta.env.BASE_URL}assets/grid1.png`} alt="grid" className="w-full sm:h-[276px] h-fit object-contain" />
        <p className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-purple-400">
            Hi, I'm Angel</p>
        <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-purple-400">
          Just recently graduated from General Assembly Coding School in NYC. I have honed my skills in HTML, CSS, JavaScript, React, and Node.js. I'm eager to apply my knowledge and contribute to the development of web applications.
        </p>
      </div>
    </div>

    {/* <!-- Second Grid Item --> */}
    <div className="col-span-1 xl:row-span-3">
      <div className="grid-container">
        <img src={`${import.meta.env.BASE_URL}assets/grid2.png`} alt="grid2" className="w-full sm:w-[276px] h-fit object-contain" />
        <p className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-purple-400"> Tech Stack</p>
        <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-purple-400">
          I specialize in JavaScript, Node.js, React, MongoDB, Python, and PostgreSQL and now I'm currently 
          Learning Three.js and Next.js.
        </p>
      </div>
    </div>

    {/* <!-- Third Grid Item --> */}
    <div className="col-span-1 xl:row-span-4">
      <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
        <Globe
          height={326}
          width={326}
          backgroundColor="rgba(0,0,0,0)"
          backgroundImageOpacity={0.5}
          showAtmosphere
          showGraticules
          globeImageUrl="//unpkg.com/three-globe/example/img/earth-day.jpg"
          bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
          labelsData={[{ lat: 45, lng: -111, text: "I Live Here", color: "black", size: 20 }]}
        />
        <div>
        <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-purple-400">I work remotely across most timezones.</p>
          <p className="text-1xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-purple-400">
            I'm based in Montana, USA, but I'm open to remote work.
          </p>
          <Button name="Contact Me" isBeam containerClass="w-full mt-10" />
        </div>
      </div>
    </div>

    {/* <!-- Fourth Grid Item --> */}
    <div className="xl:col-span-2 xl:row-span-3">
      <div className="grid-container">
        <img src={`${import.meta.env.BASE_URL}assets/grid3.png`} alt="grid3" className="w-full sm:h-[266px] h-fit object-contain" />
        <p className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-purple-400">I Want To Change the World</p>
        <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-purple-400">
          I am passionate about coding and problem-solving, always eager to embrace new challenges. With these skills and the right team, I believe we can create meaningful change and make a lasting impact on the world.
        </p>
      </div>
    </div>

    {/* <!-- Fifth Grid Item --> */}
    <div className="xl:col-span-1 xl:row-span-2">
      <div className="grid-container">
        <img src={`${import.meta.env.BASE_URL}assets/grid4.png`} alt="grid4" className="w-full md:h-[126px] sm:h-[276px] h-fit object-contain" />
        <div className="space-y-2">
          <p className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-purple-400 text-center">Contact Me</p>
          <div className="copy-container" onClick={handleCopy}>
          <img 
  src={hasCopied 
    ? `${import.meta.env.BASE_URL}assets/tick.svg` 
    : `${import.meta.env.BASE_URL}assets/copy.svg`
  } 
  alt="copy" 
/>
            <p className="text-1xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-purple-400">
              angelgerenavazquez@outlook.com
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>



    //    <section className="c-space my-20">
    //     <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-1 gab-5h-full">
    //         <div className="col-span-1 xl:row-span-3">
    //             <div className="grid-container">
    //                 <img src="/assets/grid1.png" alt="grid-1" className="w-full sm:h-{276px} h-fit object-contain" /> 

    //                   <div>

    //                   </div>
    //                     <p className="grid-headtext"> Hi, I'am Angel</p>

    //                     <p className="grid-subtext"> Just recently graduated from General 
    //                         Assembly Coding School in NYC. I have honed my skills in HTML,
    //                          CSS, JavaScript, React, and Node.js. I'm eager to apply my knowledge and
    //                           contribute to the development of web applications. </p>
    //                                                                                 </div>
    //                                                                          </div>
    //                                                                 </div>
    //                    <div className="col-span-1 xl: row-span-3">
    //                     <div className="grid-container">
    //                         <img src="/assets/grid2.png" alt="grid-2" className="w-full sm:w-[276px] h-fit object-contain"/> 
    //                         <div>
    //                             <p className="grid-headtext"> Tech Stack</p>
    //                             <p className="grid-subtext"> I specialize in JavaScript, Node.js, React, MongoDB, Python and Postsql</p>

    //                         </div>

                        

    //             </div>
    //                         <div className="col-span-1 xl:row-span-4">
    //                             <div className="rounded -3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
    //                                 <Globe 
    //                                 height={326}
    //                                 width={326}
    //                                 backgroundColor="rgba(0,0,0,0)"
    //                                 backgroundImageOpacity={0.5}
    //                                 showAtmosphere
    //                                 showGraticules
    //                                 globeImageUrl="//unpkg.com/three-globe/example/img/earth-day.jpg"
    //                                 bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
    //                                 labelsData= {[{
    //                                     lat: 45, lng: -111,
    //                                     text: "I Live Here",
    //                                     color: "black",
    //                                     size: 20,
    //                                 }]}
    //                                  />
    //                                  <div>
    //                                     <p className="grid-headtext">
    //                                     I work remotely across most timezones.

    //                                     </p>
    //                                     <p className="grid-subtext"> I'm based in Montana, 
    //                                         USA with a remote work availaible </p>
    //                                         <button name="Contact Me" isBeam containerClass="w-full mt-10" />                 
    //                                  </div>
    //                             </div>
    //                         </div>

    //                         <div className="xl:col-span-2 xl:row-span-3">
    //                             <div className="grid-container">
    //                                 <img src="/assets/grid3.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain"/>

    //                                 <div>
    //                                     <p className="grid-headtext">I Want To Change the World</p>
    //                                     <p className="grid-subtext">I am passionate about coding and problem-solving, always eager to embrace new challenges. With these skills and the right team, 
    //                                         I believe we can create meaningful change and make a lasting impact on the world. </p>
                                        
    //                                 </div>
    //                         </div>
    //                     </div>
    //                     <div className="xl:col-span-1 xl:row-span-2">
    //                         <div className="grid-container">
    //                             <img src="assets/grid4.png" alt="grid-4" className="w-full md:h-[126px] sm:h-[276px] h-fit object-contain"/>

    //                             <div className="space-y-2">
    //                                 <p className="grid-subtext text-center">Contact Me</p>
    //                                 <div className="copy-container" onClick={handleCopy}>
    //                                     <img src={hasCopied ? '/assets/tick.svg' : '/assets/copy.svg'} alt="copy" />
    //                                     <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">angelgerenavazquez@outlook.com</p>
    //                                 </div>
    //                             </div>
    //                         </div>
    //                     </div>
    //         </div>
    //    </section>
    );
};

export default About