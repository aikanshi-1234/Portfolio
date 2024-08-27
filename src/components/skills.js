import js from '../assets/img/js.png';
import html from '../assets/img/html.png';
import react from '../assets/img/react.png';
import cpp from '../assets/img/cpp.png';
import mysql from '../assets/img/mysql.png';
import nodejs from '../assets/img/nodejs.png';
import express from '../assets/img/express.png';
import webd from '../assets/img/webd.png';
import android from '../assets/img/android.png';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from '../assets/img/arrow1.svg';
import arrow2 from '../assets/img/arrow2.svg';
import colorSharp from '../assets/img/color-sharp.png'

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

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <h3> Frontend/Backened</h3>
              <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                <div className="item">
                  <img src={html} alt="Image" />
                </div>
                <div className="item">
                  <img src={js} alt="Image" />
                </div>
                <div className="item">
                  <img src={react} alt="Image" />

                </div>
                <div className="item">
                  <img src={cpp} alt="Image" />
                </div>
                <div className="item">
                  <img src={mysql} alt="Image" />
                </div>
                <div className="item">
                  <img src={nodejs} alt="Image" />
                </div>
                <div className="item">
                  <img src={express} alt="Image" />
                </div>
                <div className="item">
                  <img src={webd} alt="Image" />
                </div>
                <div className="item">
                  <img src={android} alt="Image" />
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
