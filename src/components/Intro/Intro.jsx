import React, { useContext } from "react";
import "./Intro.css";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/boy.png";
import glassesimoji from "../../img/glassesimoji.png";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
import FloatinDiv from "../FloatingDiv/FloatingDiv";
import facebook from "../../img/facebook (2).png";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import Behance from "../../img/behance.png";

import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
const Intro = () => {
  // Transition
  const transition = { duration: 2, type: "spring" };

  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="Intro" id="Intro">
      {/* left name side */}
      <div className="i-left">
        <div className="i-name">
          {/* yahan change hy darkmode ka */}
          <span style={{ color: darkMode ? "white" : "" }}>Hey! I Am</span>
          <span>Mithun Appuhamy.</span>
          <span>
          Crafting stunning UI/UX designs and coding interactive front-end projects—turning ideas into experiences.
          </span>
        </div>
        <Link to="contact" smooth={true} spy={true}>
          <button className="button i-button">Hire Me</button>
        </Link>
        {/* social icons */}
        <div className="i-icons">
        <a href="https://web.facebook.com/profile.php?id=100074627900638" target="_blank" rel="noopener noreferrer">
    <img src={facebook} alt="facebook" />
  </a>
  <a href="https://github.com/Mithun-Mh" target="_blank" rel="noopener noreferrer">
    <img src={Github} alt="GitHub" />
  </a>
  <a href="https://www.linkedin.com/in/mithun-appuhamy-998a8423a/" target="_blank" rel="noopener noreferrer">
    <img src={LinkedIn} alt="LinkedIn" />
  </a>
  <a href="https://www.instagram.com/mithunmh_19/?hl=en" target="_blank" rel="noopener noreferrer">
    <img src={Instagram} alt="Instagram" />
  </a>
  <a href="https://www.behance.net/mithunmalinda" target="_blank" rel="noopener noreferrer">
    <img src={Behance} alt="Behance" />
  </a>
</div>

      </div>
      {/* right image side */}
      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={boy} alt="" />
        {/* animation */}
        <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-24%" }}
          transition={transition}
          src={glassesimoji}
          alt=""
        />

        <motion.div
          initial={{ top: "-4%", left: "74%" }}
          whileInView={{ left: "68%" }}
          transition={transition}
          className="floating-div"
        >
          <FloatinDiv img={crown} text1="Web" text2="Developer" />
        </motion.div>

        {/* animation */}
        <motion.div
          initial={{ left: "9rem", top: "18rem" }}
          whileInView={{ left: "0rem" }}
          transition={transition}
          className="floating-div"
        >
          {/* floatinDiv mein change hy dark mode ka */}
          <FloatinDiv img={thumbup} text1="Best Design" text2="Award" />
        </motion.div>

        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
