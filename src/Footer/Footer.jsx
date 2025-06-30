import React from 'react'
import { SlSocialLinkedin } from "react-icons/sl";
import { FaXTwitter } from "react-icons/fa6";
import { VscGithubAlt } from "react-icons/vsc";
import { SiUpwork } from "react-icons/si";

const Footer = () => {
  return (
    <div className='py-4'>
        <div className="container2 text-center">
            <h4 className='fw-bold'>Abdul-Lateef</h4>
            <div className="d-flex align-items-center justify-content-center my-3 gap-4">
                <a href="https://github.com/calculus-guy/">
                    <VscGithubAlt />
                </a>
                <a href="https://x.com/lateef016?t=5EoL1Yn-twyOx221H7V1vA&s=08">
                    <FaXTwitter />
                </a>
                <a href="https://www.linkedin.com/in/abdul-lateef-sakariyau-5a799b324">
                    <SlSocialLinkedin />
                </a>
                <a href="https://www.upwork.com/freelancers/~01aa52e16a2b978ee8?mp_source=share">
                    <SiUpwork />
                </a>
            </div>
            <small>© Sakariyau Abdulateef. All rights reserved</small>
        </div>
    </div>
  )
}

export default Footer