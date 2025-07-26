import React, { useState, useRef } from 'react'
import emailjs from '@emailjs/browser';
import { RiMailSendLine } from "react-icons/ri";
import { FaWhatsapp } from "react-icons/fa";
import { VscSend } from "react-icons/vsc";
import { IoIosArrowRoundForward } from "react-icons/io";
import { motion } from 'framer-motion';

const Contact = () => {

    const contactVar = {
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
              
            //   staggerChildren : 0.7
            } , 
        }
    }




    const form = useRef(null);
    const [sending, setSending] = useState(false);
    const [sent, setSent] = useState(false);
    // console.log(import.meta.env.REACT_APP_EMAILJS_SERVICE_ID, import.meta.env.REACT_APP_EMAILJS_TEMPLATE_ID, import.meta.env.REACT_APP_EMAILJS_PUBLIC_KEY);
    const sendEmail = (e) => {
        e.preventDefault();
        setSending(true);
        setSent(false);
        emailjs.sendForm(
  process.env.REACT_APP_EMAILJS_SERVICE_ID,
  process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
  form.current,
  process.env.REACT_APP_EMAILJS_PUBLIC_KEY
        )
        .then(
            () => {
                setSending(false);
                setSent(true);
                form.current?.reset();
                setTimeout(() => setSent(false), 4000);
            },
            () => {
                setSending(false);
                alert('Failed to send message. Please try again later.');
            }
        );
    }
    
  return (
    <div className='py-4' id='contact'>
        <div className="container2">

            <div className="sec-header mb-4 text-center ">
              <h2 className="text-bold">Get In Touch</h2>
              <p className="about-text text-muted">Contact Me</p>
            </div>

            <motion.div 
                className="row m-0"
                variants={contactVar}
                initial="initial"
                whileInView="animate"
            >
                <motion.div variants={leftVar} className="col-lg-6 p-lg-5">
                    <div className="sec-header py-4 text-center">
                        <h6 className='fw-bold'>Talk To Me</h6>
                    </div>
                    <div className="box rounded shadow-sm bg-white text-center d-flex flex-column align-items-center justify-content-center gap-2 p-2 p-lg-3 mb-4">
                        <RiMailSendLine size={20} />    
                        <h6 className='text-bold'>Email</h6>
                        <small>sakariyauabdullateef993@gmail.com</small>
                        <a className='text-muted' href="mailto:yustee2017@gmail.com">Write Me <IoIosArrowRoundForward /></a>
                    </div>
                    <div className="box rounded shadow-sm bg-white text-center d-flex flex-column align-items-center justify-content-center gap-2 p-2 p-lg-3">
                        <FaWhatsapp size={20}/>   
                        <h6 className='text-bold'>Whatsapp</h6>
                        <small>+234-911-738-3809</small>
                        <a className='text-muted' href="HTTPS://wa.me/2349117383809">Write Me <IoIosArrowRoundForward /></a>
                    </div>
                </motion.div>
                <motion.div variants={rightVar} className="col-lg-6 p-lg-5">
                    <div className="sec-header py-4 text-center">
                        <h6 className='fw-bold'>Write Me Your Project</h6>
                    </div>
                    <form ref={form} onSubmit={sendEmail} className='contact-form'>
                        <input 
                            className='mb-3' 
                            type="text" 
                            placeholder='Enter Your Name' 
                            name='name'
                            required
                        />
                        <input 
                            className='mb-3' 
                            type="email" 
                            placeholder='Enter Your Email' 
                            name='email'
                            required
                        />
                        <textarea 
                            className='mb-3' 
                            name="message" 
                            placeholder='Tell me About Your Project' 
                            id="message"  
                            required
                        />
                        <button className='works' type="submit" disabled={sending || sent}>
                            <p>{sending ? 'Sending...' : sent ? 'Message Sent!' : 'Send Message'}</p>
                            <VscSend size={20} />
                        </button>
                    </form>
                </motion.div>
            </motion.div>
        </div>
    </div>
  )
}

export default Contact