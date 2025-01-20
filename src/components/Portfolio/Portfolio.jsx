import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import figmaDesign from "../../img/figmadesign.png";
import Mern from "../../img/mern.jpeg";
import HOC from "../../img/hoc.png";
import MusicApp from "../../img/musicapp.png";
import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        
        <SwiperSlide>
        <a href ="https://www.behance.net/gallery/217174887/Toys-Purchasing-AppTOYZ-HEAVEN" target="_blank" rel="noopener noreferrer">
          <img src={figmaDesign} alt="" />
          </a>
        </SwiperSlide>
        
        
        <SwiperSlide>
        <a href ="https://github.com/malakasadeep/ITP24_B9_09_Tourism_Management_System-MERN" target="_blank" rel="noopener noreferrer">
          <img src={Mern} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <img src={MusicApp} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={HOC} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
