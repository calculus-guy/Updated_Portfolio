import React from "react";
import { motion } from "framer-motion";

import { IoIosArrowRoundForward } from "react-icons/io";

const PortCard = (item) => {

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
  return (
    <motion.div
      variants={boxChild}
      key={item.id}
      className="box item2 bg-white shadow-sm"
    >
      <div className="image">
        <img src={item.image} alt="" />
      </div>
      <div className="port-content d-flex flex-column gap-2 p-3">
        <h6 className="fw-bold">{item.name}</h6>
        <small className="text-muted">{item.desc}</small>
        <a href={item.link}>
          Live Demo <IoIosArrowRoundForward />
        </a>
      </div>
    </motion.div>
  );
};

export default PortCard;
