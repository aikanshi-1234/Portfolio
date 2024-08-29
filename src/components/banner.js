import { Container, Row, Col } from "react-bootstrap";
import h from '../assets/img/h.png';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { ArrowDownCircle } from 'react-bootstrap-icons';


export const Banner = () => {
  const handleResumeDownload = () => {
    window.open("https://drive.google.com/open?id=1XEemkT80nHXx74tjJx_Lg4Ep-SIy1TzY&usp=drive_copy", "_blank");
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <span className="tagline">Welcome to my Portfolio</span>
                  <h1>Hi! I'm Aikanshi Jain</h1>
                  <p>Passionate developer skilled in building intuitive, responsive applications with expertise in web technologies, problem-solving, and user-centric design.</p>
                  <button onClick={handleResumeDownload} className="tagline">
                    Download Resume <ArrowDownCircle size={25} />
                  </button>
                </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={h} alt="H" className="floating-image" />
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
