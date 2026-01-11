import React, { useEffect, useRef } from 'react'
import { FaAward } from "react-icons/fa6";
import { VscBriefcase } from "react-icons/vsc";
import { FiFileText } from "react-icons/fi";
import { BiSupport } from "react-icons/bi";
import { LuAward } from "react-icons/lu";
import { motion, useAnimation, useInView } from 'framer-motion';

const About = () => {


    const boxVariant = {
        initial : {
          // x : width > 0 ? -100 : "0",
          x : 100,
          opacity : 0
        },
        animate : {
          opacity : 1,
          x: 0,
          transition : {
            duration: 0.5,
            staggerChildren : 0.7,
            when : "beforeChildren",
            delay:1,
          } , 
        }
      }
  
      // const transition = { duration: 0.5, ease: "easeInOut", type : "tween" };

      const boxChild = {
        initial : {
          // x : width > 0 ? -100 : "0",
          x : 100,
          opacity : 0
        },
        animate : {
          opacity : 1,
          x: 0,
          transition : {
            duration: 0.5,
            staggerChildren : 0.7,
            when : "beforeChildren",
          } , 
        }
      }
      
      
      
      
      const aboutVariant = {
        initial : {
            // x : width > 0 ? -100 : "0",
            x : -100,
            opacity : 0
          },
          animate : {
            opacity : 1,
            x: 0,
            transition : {
              duration: 0.5,
              staggerChildren : 0.7,
              when : "beforeChildren",
            } , 
        }
    }

    const leftVar = {
        initial : {
            x : -100,
            opacity : 0
          },
          animate : {
            opacity : 1,
            x: 0,
            transition : {
              duration: 0.5,
              
            //   staggerChildren : 0.7
            } , 
        }
    }
   
    const rightVar = {
        initial : {
            x : 100,
            opacity : 0
          },
          animate : {
            opacity : 1,
            x: 0,
            transition : {
              duration: 0.5,
              
            } , 
        }
    }



      const paragraphRef = useRef(null);
      const isInView = useInView(paragraphRef, { once: true });
    

      const paragraphText2 = `I’m Sakariyau Abdulateef, a software engineer with over 5 years of experience building production-ready web platforms across fintech, media, and large-scale adjudication systems.

I specialize in backend engineering with Node.js, Express, PostgreSQL, and MongoDB, designing secure APIs, role-based systems, and data-intensive workflows that scale reliably under real-world usage.

I’ve led backend development for platforms like AFRIMA’s Adjudication Portal, investment recommendation systems, and creator-focused livestreaming products—owning everything from architecture and performance tuning to reporting and integrations.

I care deeply about clean architecture, performance, and developer experience, and I enjoy collaborating with teams to turn complex requirements into simple, reliable software.`

      





  return (
    <motion.div className='about-section py-4' id='about'>
        <motion.div className="container2">
            <div className="sec-header mb-4 text-center ">
                <h2 className="text-bold">About Me</h2>
                <p className="about-text text-muted">My Introduction</p>
            </div>

            <motion.div variants={aboutVariant} initial="initial" animate="animate" className="row m-0 ">
                <motion.div variants={leftVar} className="col-lg-6 px-4 py-lg-2">
                    <div className="about-img border">
                        <img src="../../Images/Full_image2.jpeg" className='img-fluid' alt="" />
                    </div>
                </motion.div>
                <motion.div  variants={rightVar} className="col-lg-6 p-lg-2 mt-3 mt-lg-0">
                    <motion.div 
                      className="grid gap-2 gap-lg-3 m-0"
                      variants={boxVariant}
                      initial="initial"
                      whileInView="animate"
                    >
                        <motion.div variants={boxChild} className="box rounded shadow-sm bg-white text-center d-flex flex-column align-items-center justify-content-center gap-2 p-2 p-lg-3">
                            <LuAward size={24} />
                            <h6 className='text-bold'>Experience</h6>
                            <small className='text-muted'>4 Years Working</small>
                        </motion.div>
                        <motion.div variants={boxChild} className="box rounded shadow-sm bg-white text-center d-flex flex-column align-items-center justify-content-center gap-2 p-2 p-lg-3">
                            <VscBriefcase size={24} />
                            <h6 className='text-bold'>Completed</h6>
                            <small className='text-muted'>15+ Project</small>
                        </motion.div>
                        <motion.div variants={boxChild} className="box rounded shadow-sm bg-white text-center d-flex flex-column align-items-center justify-content-center gap-2 p-2 p-lg-3">
                            <BiSupport size={24} />
                            <h6 className='text-bold'>Support</h6>
                            <small className='text-muted'>Online 24/7</small>
                        </motion.div>
                    </motion.div>
                    <motion.div className="me my-4">
                      

                          <div ref={paragraphRef}>
                                {isInView && (
                                  <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 1 }}
                                    style={{ whiteSpace: "pre-wrap", fontSize: "14px" }}
                                  >
                                    {paragraphText2.split("").map((char, index) => (
                                      <motion.span
                                        key={index}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{
                                          delay: index * 0.008, // Adjust typing speed
                                        }}
                                      >
                                        {char}
                                      </motion.span>
                                    ))}
                                  </motion.div>
                                )}
                              </div>

                            
                    </motion.div>
                    {isInView && (
                    <motion.a
                       href="../../Images/Abdul-Lateef Resume.pdf"
                       className="works"
                     target="_blank" // Open in new tab
                      rel="noopener noreferrer" // Security best practice
                       initial={{ x: 100, opacity: 0 }}
                       animate={{ x: 0, opacity: 1 }}
                       transition={{
                         delay: paragraphText2.length * 0.008 + 1, // Start after text animation
                         duration: 0.5,}}
                      >
                        <p>Download CV</p>
                        <FiFileText size={20} />
                    </motion.a>)}
                </motion.div>
            </motion.div>
        </motion.div>
    </motion.div>
  )
}

export default About



