import { Container, Row, Col } from "react-bootstrap";
import h from '../assets/img/h.jpg';
import { ArrowDownCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const downloadResume = "http://localhost:3000/#connect/Resume.pdf";
  const download = (url) => {
    const fileName = url.split("/").pop();
    const atag = document.createElement("a");
    atag.href = url;
    atag.setAttribute("download", fileName);
    document.body.appendChild(atag);
    atag.click();
    atag.remove();

  }
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
                  <p> developer skilled in building intuitive, responsive applications with expertise in web technologies, problem-solving, and user-centric design.</p>
                  <button onClick={() => download(downloadResume)}>Download Resume <ArrowDownCircle size={25} /></button>
                </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={h} alt="H" />
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
