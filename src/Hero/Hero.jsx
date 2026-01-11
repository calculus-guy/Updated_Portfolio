import { useEffect, useRef, useState } from "react";
import { VscBriefcase } from "react-icons/vsc";
import { motion, useInView, useAnimation } from 'framer-motion';
import SEO from "../SEO";
import Typewriter from "../Components/Typewriter";


const Hero = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const titles = ["Software Engineer", "Frontend Developer", "Backend Developer"];

  const mainControls = useAnimation();
  const slideControls = useAnimation();
  const fadeUpControls = useAnimation();





  useEffect(() => {
    if (isInView) {
      mainControls.start("animate");
      slideControls.start("animate");
      setTimeout(() => {
        fadeUpControls.start("animate");
      }, 1400);
    }
  }, [isInView, mainControls, slideControls, fadeUpControls]);

  const heroVar = {
    initial: { x: 100, opacity: 0 },
    animate: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, staggerChildren: 0.7, when: "beforeChildren" },
    },
  };

  const childVar = {
    initial: { x: -100, opacity: 0 },
    animate: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.75, staggerChildren: 0.7, when: "beforeChildren" },
    },
  };

  const fade = { 
    position: "absolute",
    top: 4,
    bottom: 4,
    left: 0,
    right: 0,
    background: "#333333",
    zIndex: 20,
  };

  // Fade-up animation for "Certified Software Engineer"
  const fadeUpVar = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <div className="main" id="home">
      <SEO 
        title="Sakariyau Abdulateef | Software Engineer " 
        description="I'm Sakariyau Abdulateef, a passionate software engineer specializing in React, Node Js, and full-stack development. Explore my projects and skills!" 
        keywords="React developer, Node Js, frontend engineer, software engineer, portfolio" 
        url="" // remember to set the correct URL
        image="" // remember to set the correct URL
      />
      <div className="container2">
        <motion.div ref={ref} variants={heroVar} initial="initial" animate={mainControls} className="row flex-column-reverse flex-lg-row hero m-0">
          <motion.div variants={childVar} style={{ position: "relative", overflow: "hidden" }} className="col-lg-7 d-flex flex-column align-content-lg-start align-items-start gap-2">
            <p className="line">HEY THERE ! 👋 </p>
            <motion.div style={{ position: "relative", overflow: "hidden" }}>
              <h1 className="hero-header">I'm Sakariyau Abdulateef</h1>
              <motion.div
                variants={{ initial: { left: 0 }, animate: { left: "100%" } }}
                initial="initial"
                animate={slideControls}
                transition={{ duration: 1.4, ease: "easeIn" }}
                style={fade}
              ></motion.div>
            </motion.div>
            
            {/* Stack section */}
            <div className="stack d-flex gap-2 align-items-center">
              <p className="long-line"></p>
              {/* <motion.h4 className="se" variants={fadeUpVar} initial="initial" animate={fadeUpControls}>
                Certified Software Engineer
              </motion.h4> */}

              <motion.h4 className="cf d-flex gap-2" variants={fadeUpVar} initial="initial" animate={fadeUpControls}>
                <span>Certified</span>
                <Typewriter 
                  words={titles} 
                  typingSpeed={80} 
                  deletingSpeed={40} 
                  pauseTime={2000} 
                />
              </motion.h4>



            </div>

            <p className="text-muted my-2">I design, develop, and maintain software applications. My role involves writing code in various programming languages, solving complex problems, and collaborating with teams to deliver functional software that meets user or business needs.</p>

            <a href="#portfolio" className="works">
              <p>View Works</p>
              <VscBriefcase size={20} />
            </a>
          </motion.div>

          <div className="col-lg-5 hero-img p-4">
            <div className="hero-image p-1   mx-auto">
              <div className="oval bg-white shadow-sm">
                <img src="../../Images/Animated_image.jpeg" className='img-fluid shadow' alt="myself" />

              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
