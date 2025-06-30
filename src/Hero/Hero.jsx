import React, { useEffect, useRef, useState } from "react";
import { VscBriefcase } from "react-icons/vsc";
import { motion, useInView, useAnimation, AnimatePresence } from 'framer-motion';
import SEO from "../SEO";


const Hero = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const titles = ["Software Engineer", "Frontend Developer", "Backend Developer"];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animationVariant, setAnimationVariant] = useState("fade");

  const mainControls = useAnimation();
  const slideControls = useAnimation();
  const fadeUpControls = useAnimation(); // Animation for "Certified Software Engineer"





  // Define animation styles
const animationVariants = {
  fade: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  },
  slideUp: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  },
  slideLeft: {
    initial: { opacity: 0, x: 40 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -40 },
  },
  scale: {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.8 },
  },
};

// Rotate titles and choose random animation
useEffect(() => {
  const interval = setInterval(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % titles.length);
    
    const keys = Object.keys(animationVariants);
    const randomKey = keys[Math.floor(Math.random() * keys.length)];
    setAnimationVariant(randomKey);
  }, 5000);

  return () => clearInterval(interval);
}, []);
  useEffect(() => {
    if (isInView) {
      mainControls.start("animate");
      slideControls.start("animate");
      setTimeout(() => {
        fadeUpControls.start("animate");
      }, 1400); // Delay to start after slide-in effect
    }
  }, [isInView]);

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
    <div className="main">
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
              <AnimatePresence mode="wait">
                <motion.span
                  key={titles[currentIndex]}
                  initial={animationVariants[animationVariant].initial}
                  animate={animationVariants[animationVariant].animate}
                  exit={animationVariants[animationVariant].exit}
                  transition={{ duration: 0.6 }}
                >
                  {titles[currentIndex]}
                </motion.span>
              </AnimatePresence>
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
