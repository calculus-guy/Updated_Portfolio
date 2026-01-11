import React from 'react'
import { GoVerified } from "react-icons/go";
import Skills from './data';
import { motion } from 'framer-motion';


const Portfolio = () => {

    const frontend = Skills.filter(item => item.stack === 'frontend');
    const backend = Skills.filter(item => item.stack === 'backend');
    const devops = Skills.filter(item => item.stack === 'devOps');



    const skillvar = {
        initial : {
            y : 100,
            opacity : 0
          },
          animate : {
            opacity : 1,
            y: 0,
            transition : {
              duration: 0.5,
              staggerChildren : 0.7,
              when : "beforeChildren",
            } , 
        }
    }
    
    const boxvar = {
        initial : {
            y : 100,
            opacity : 0
          },
          animate : {
            opacity : 1,
            y: 0,
            transition : {
              duration: 0.5,
              staggerChildren : 0.7,
              when : "beforeChildren",
            } , 
        }
    }

    const boxChild = {
        initial : {
            x: 100,
            opacity : 0
          },
          animate : {
            opacity : 1,
            x: 0,
            transition : {
              duration: 0.2, type : "spring", stiffness: 100
              
            } , 
        }
    }
    const slide = {
        initial : {
            y: 100,
            opacity : 0
          },
          animate : {
            opacity : 1,
            y: 0,
            transition : {
              duration: 0.7,
              
            } , 
        }
    }


   
   



  return (
    <div className='portfolio py-4' id='skills'>
        <div className="container2">
            <div className="sec-header text-center mb-4">
                <h2 className="text-bold">Skills</h2>
                <p className="about-text text-muted">My Technical Level</p>
            </div>
            <motion.div variants={skillvar} initial="initial" whileInView="animate" className="grid1  m-0 ">

                {/* =========== FRONTEND STACK STARTS HERE ============ */}
                <motion.div variants={slide} className="item p-2 bg-white">
                    <h6 className='text-center py-3'>Frontend Developer</h6>
                    
                    <motion.div variants={boxvar} initial="initial" whileInView="animate" className="stack-skills mx-auto row m-0">
                    {
                        frontend.map((item) => {
                            return(
                                <motion.div variants={boxChild} key={item.id} className="col-6 p-2 d-flex align-items-start justify-content-start gap-2">
                                    <GoVerified className='mt-1' />
                                    <div className="d-flex  flex-column gap-1">
                                        <p className='fw-bold'>{item.skill}</p>
                                        <small className="text-muted">{item.level}</small>
                                    </div>
                                </motion.div>    
                            )
                        })
                    }
                    </motion.div>
                </motion.div>
                {/* =========== FRONTEND STACK ENDS HERE ============ */}
                

                {/* =========== BACKEND STACK STARTS HERE ============ */}
                <motion.div variants={slide}  className="item  p-2 bg-white">
                    <h6 className='text-center py-3'>Backend Developer</h6>
                    
                    <motion.div variants={skillvar} initial="initial" whileInView="animate" className="stack-skills mx-auto row m-0">
                    {
                        backend.map((item) => {
                            return(
                                <motion.div variants={boxChild} key={item.id} className="col-6 p-2 d-flex align-items-start justify-content-start gap-2">
                                    <GoVerified className='mt-1' />
                                    <div className="d-flex  flex-column gap-1">
                                        <p className='fw-bold'>{item.skill}</p>
                                        <small className="text-muted">{item.level}</small>
                                    </div>
                                </motion.div>    
                            )
                        })
                    }
                    </motion.div>
                </motion.div>
                {/* =========== BACKEND STACK ENDS HERE ============ */}

                {/* =========== BACKEND STACK STARTS HERE ============ */}
                <motion.div variants={slide}  className="item p-2 bg-white">
                    <h6 className='text-center py-3'>System Engineering & DevOps</h6>
                    
                    <motion.div variants={skillvar} initial="initial" whileInView="animate" className="stack-skills mx-auto row m-0">
                    {
                        devops.map((item) => {
                            return(
                                <motion.div variants={boxChild} key={item.id} className="col-6 p-2 d-flex align-items-start justify-content-start gap-2">
                                    <GoVerified className='mt-1' />
                                    <div className="d-flex  flex-column gap-1">
                                        <p className='fw-bold'>{item.skill}</p>
                                        <small className="text-muted">{item.level}</small>
                                    </div>
                                </motion.div>    
                            )
                        })
                    }
                    </motion.div>
                </motion.div>
                {/* =========== BACKEND STACK ENDS HERE ============ */}





            </motion.div>
        </div>
    </div>
  )
}

export default Portfolio