import { motion } from "framer-motion";
import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

export function Navebar() {
  const [isOpen, setIsOpen] = useState(false);

  const listAnimations = {
    opened: {
      opacity: 1,
      y: -0,
      x: 0
    },
    closed: {
      opacity: 0,
      y: -10,
      x: 0
    }
  };
  const animations = {
    opened: {
      height: "100vw",
      x: "0%",
      rotate: -55,
      transition: {
        type: "tween",
        ease: "circIn",
        duration: 0.5
      }
    },
    closed: {
      x: "10%",
      height: 0,
      rotate: -55,
      transition: {
        type: "Spring",
        duration: 0.5,
        delay: 1
      }
    }
  };

  const duration = {
    duration: 0.5,
    delay: 0.5
  };
  const duration2 = {
    duration: 0.5,
    delay: 0.6
  };

  const duration3 = {
    duration: 0.5,
    delay: 0.7
  };
  const duration4 = {
    duration: 0.5,
    delay: 0.8
  };
  const menu = useRef();
  const handleKeyDown = (event) => {
    console.log("A key was pressed", event.keyCode);
  };

  useEffect(() => {
    menu.current.addEventListener("click", handleKeyDown);
  });
  return (
    <>

      <nav>

        <motion.div
          ref={menu}
          className="hamburger"
          onClick={() => setIsOpen((state) => !state)}
        >
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </motion.div>
        <motion.gan
          initial={false}
          variants={animations}
          animate={isOpen ? "opened" : "closed"}
          className="topSlice"
        ></motion.gan>
        <motion.gan
          initial={false}
          variants={animations}
          animate={isOpen ? "opened" : "closed"}
          className="middleSlice"
        ></motion.gan>
        <motion.gan
          initial={false}
          variants={animations}
          animate={isOpen ? "opened" : "closed"}
          className="bottomSlice"
        ></motion.gan>

        <ul
          animate={isOpen ? "opened" : "closed"}
        >
          <motion.li
            initial={false}
            variants={listAnimations}
            animate={isOpen ? "opened" : "closed"}
            transition={duration}
            className="menu__item"

            onClick={() => setIsOpen((state) => !state)}
          >
            <Link to="/" className="linknav">name</Link></motion.li>

          <motion.li
            initial={false}
            variants={listAnimations}
            animate={isOpen ? "opened" : "closed"}
            transition={duration2}
            className="menu__item"
            onClick={() => setIsOpen((state) => !state)}
          >
            <Link to="/para1" className="linknav"> para1</Link>
          </motion.li>
          <motion.li
            initial={false}
            variants={listAnimations}
            animate={isOpen ? "opened" : "closed"}
            transition={duration3}
            className="menu__item"
            onClick={() => setIsOpen((state) => !state)}
          >
            <Link to="/para2" className="linknav"> para2</Link>
          </motion.li>
          <motion.li
            initial={false}
            variants={listAnimations}
            animate={isOpen ? "opened" : "closed"}
            transition={duration4}
            className="menu__item"
          >
            Item4
          </motion.li>

        </ul>


      </nav>



    </>
  );
}
;
