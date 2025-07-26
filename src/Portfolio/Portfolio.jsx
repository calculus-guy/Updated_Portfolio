import React, { useState } from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";
import { AiOutlineReload } from "react-icons/ai";
import Project from './data';
import { motion } from 'framer-motion';
import SEO from '../SEO';
import { GoLinkExternal } from "react-icons/go";


const Portfolio = () => {


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
      } , 
    }
  }

  const transition = { duration: 0.5, ease: "easeInOut", type : "tween" };

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
  

    const [visible, setVisible] = useState(3)


    const handleVisible = () =>{
      setVisible(prevState => prevState + 3)
    }
  return (
    <motion.div className='py-4' id='portfolio'>
       <SEO 
        title="Projects | Sakariyau Abdulateef - Software Engineer" 
        description="Check out my latest projects, including React apps, Express Js REST APIs, and full-stack applications." 
        keywords="React projects, Express Js projects, portfolio, full-stack development" 
        url=""  // update with your actual URL
        image="" // update with your actual URL
      />
      <div className="container2">
            <div className="sec-header mb-4 text-center ">
              <h2 className="text-bold">Portfolio</h2>
              <p className="about-text text-muted">My Recent Works</p>
            </div>
            <motion.div  
              className="grid1   m-0 "
            >

              {
                Project.slice(0, visible).map((item) =>{
                  return(
                    
                    <motion.div  key={item.id} className='box item2 bg-white shadow-sm'>
                      <div className="image">
                        <img src={item.image} alt="" />
                      </div>
                      <div className="port-content d-flex flex-column gap-2 p-3">
                        <h6 className='fw-bold'>{item.name}</h6>
                        <small  className='text-muted'>{item.desc}</small>
                        <a target='blank' href={item.link} className='se d-flex align-items-center gap-2 fw-semibold fw-'><GoLinkExternal size={14}/>Live Demo </a>
                      </div>
                    </motion.div>
                  )
                })
              }



            </motion.div>
            <div className="sec-header my-4 text-center ">
              <button onClick={handleVisible} className="works  mx-auto">
                  <p>Load More</p>
                  <AiOutlineReload size={20} />
              </button>
            </div>
            
      </div>
    </motion.div>
  )
}

export default Portfolio