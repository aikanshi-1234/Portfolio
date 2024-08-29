import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import js from '../assets/img/js.png';
import html from '../assets/img/html.png';
import react from '../assets/img/react.png';
import cpp from '../assets/img/cpp.png';
import mysql from '../assets/img/mysql.png';
import nodejs from '../assets/img/nodejs.png';
import express from '../assets/img/express.png';
import webd from '../assets/img/webd.png';
import android from '../assets/img/android.png';
import colorSharp from '../assets/img/color-sharp.png';

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const skills = [
    { src: html, alt: "HTML" },
    { src: js, alt: "JavaScript" },
    { src: react, alt: "React" },
    { src: cpp, alt: "C++" },
    { src: mysql, alt: "MySQL" },
    { src: nodejs, alt: "Node.js" },
    { src: express, alt: "Express" },
    { src: webd, alt: "Web Development" },
    { src: android, alt: "Android" }
  ];

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>

              <Carousel
                responsive={responsive}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={100}
                customTransition="all 5s linear"
                transitionDuration={3000}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
                className="owl-carousel owl-theme skill-slider"
              >
                {skills.map((skill, index) => (
                  <div className="item" key={index}>
                    <img src={skill.src} alt={skill.alt} />
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="" />
    </section>
  );
};

export default Skills;