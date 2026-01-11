import React from 'react'
import { RiMailSendLine } from "react-icons/ri";
import { SlSocialLinkedin } from "react-icons/sl";
import { FaXTwitter } from "react-icons/fa6";
import { VscGithubAlt } from "react-icons/vsc";
import { RiMenu3Line } from "react-icons/ri";
import { MdOutlineDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";
import { SiUpwork } from "react-icons/si";
import { motion } from 'framer-motion';

const Navbar = ({handleToggle, toggle, styles}) => {
    
    
    const IconVariants = {
        initial : {
            // x : width > 0 ? -100 : "0",
            y : -100,
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

    const childVariants = {
        initial : {
            // x : width > 0 ? -100 : "0",
            y : -100,
            opacity : 0
          },
          animate : {
            opacity : 1,
            y: 0,
            transition : {
              duration: 0.5,
              
            //   staggerChildren : 0.7
            } , 
        }
    }

    
  return (
    <header style={styles}>
        <div className="container2">
            <div className="d-flex flex-wrap align-items-center header justify-content-between">
                <a href='mailto:yustee2017@gmail.com' className="mail gap-2">
                    <RiMailSendLine />
                    <p>sakariyauabdullateef993@gmail.com</p>
                </a>
                
                <div className="d-none d-lg-flex mail links">
                    <ul className='d-flex gap-4 m-0'>
                        <li className='nav-item'>
                            <a className='nav-link' href="#home">Home</a>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link' href="#about">About</a>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link' href="#skills">Skills</a>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link' href="#portfolio">Portfolio</a>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link' href="#contact">Contact</a>
                        </li>
                    </ul>
                </div>
                <motion.div
                    className="d-none d-lg-flex mail gap-3"
                    variants={IconVariants}
                    initial="initial"
                    animate="animate"
                >
                    <a href="https://github.com/calculus-guy/" target="_blank" rel="noopener noreferrer">
                        <VscGithubAlt />
                    </a>
                    <motion.a variants={childVariants} href="https://x.com/lateef016?t=5EoL1Yn-twyOx221H7V1vA&s=08" target="_blank" rel="noopener noreferrer">
                        <FaXTwitter />
                    </motion.a>
                    <motion.a variants={childVariants} href="https://www.linkedin.com/in/abdul-lateef-sakariyau-38289a383" target="_blank" rel="noopener noreferrer">
                        <SlSocialLinkedin />
                    </motion.a>
                    <motion.a variants={childVariants} href="https://www.upwork.com/freelancers/~01aa52e16a2b978ee8?mp_source=share" target="_blank" rel="noopener noreferrer">
                        <SiUpwork />
                    </motion.a>
                    <motion.button 
                        variants={childVariants} 
                        onClick={handleToggle}
                        style={{ 
                            background: 'none', 
                            border: 'none', 
                            cursor: 'pointer', 
                            padding: 0,
                            color: toggle ? '#FFFFFF' : '#333333'
                        }}
                    >
                        {
                            toggle ? <MdOutlineLightMode /> : <MdOutlineDarkMode />
                        }
                    </motion.button>
                </motion.div>
                <button 
                    className='d-flex d-lg-none' 
                    onClick={handleToggle}
                    style={{ 
                        background: 'none', 
                        border: 'none', 
                        cursor: 'pointer', 
                        padding: 0,
                        color: toggle ? '#FFFFFF' : '#333333'
                    }}
                >
                    {
                        toggle ? <MdOutlineLightMode /> : <MdOutlineDarkMode />
                    }
                </button>
                {/* <RiMenu3Line className='d-flex d-lg-none' /> */}
            </div>
        </div>
    </header>
  )
}

export default Navbar