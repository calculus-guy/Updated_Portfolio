import { useState, useEffect } from 'react'
import { RiMailSendLine } from "react-icons/ri";
import { SlSocialLinkedin } from "react-icons/sl";
import { FaXTwitter } from "react-icons/fa6";
import { VscGithubAlt } from "react-icons/vsc";
import { MdOutlineDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";
import { SiUpwork } from "react-icons/si";
import { motion } from 'framer-motion';

const Navbar = ({handleToggle, toggle}) => {
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    const sections = ['home', 'about', 'skills', 'portfolio', 'contact'];

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);

            // Find active section
            const scrollPosition = window.scrollY + 100;
            
            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const offsetTop = element.offsetTop;
                    const offsetHeight = element.offsetHeight;
                    
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };
        
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    
    
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

    
    const navStyles = {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        transition: 'all 0.3s ease',
        backgroundColor: scrolled 
            ? (toggle ? 'rgba(18, 18, 18, 0.85)' : 'rgba(250, 250, 250, 0.85)')
            : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(12px)' : 'none',
        boxShadow: scrolled ? '0 4px 30px rgba(0, 0, 0, 0.1)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.1)' : 'none',
        color: toggle ? '#FFFFFF' : '#333333',
    };

  return (
    <header style={navStyles}>
        <div className="container2">
            <div className="d-flex flex-wrap align-items-center header justify-content-between">
                <a href='mailto:yustee2017@gmail.com' className="mail gap-2">
                    <RiMailSendLine />
                    <p>sakariyauabdullateef993@gmail.com</p>
                </a>
                
                <div className="d-none d-lg-flex mail links">
                    <ul className='d-flex gap-4 m-0'>
                        {sections.map((section) => (
                            <li className='nav-item' key={section}>
                                <a 
                                    className='nav-link' 
                                    href={`#${section}`}
                                    style={{
                                        fontWeight: activeSection === section ? '600' : '400',
                                        color: activeSection === section 
                                            ? (toggle ? '#FFFFFF' : '#333333')
                                            : (toggle ? 'rgba(255,255,255,0.6)' : 'rgba(51,51,51,0.6)'),
                                        borderBottom: activeSection === section ? '2px solid currentColor' : '2px solid transparent',
                                        paddingBottom: '4px',
                                        transition: 'all 0.3s ease',
                                    }}
                                >
                                    {section.charAt(0).toUpperCase() + section.slice(1)}
                                </a>
                            </li>
                        ))}
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