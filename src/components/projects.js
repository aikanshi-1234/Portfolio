import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./projectCard";
import menses from '../assets/img/menses.jpg';
import gemini from '../assets/img/gemini.jpg';
import portfolio from '../assets/img/portfolio-2.png';
import colorSharp2 from '../assets/img/color-sharp2.png';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

    const projects = [
        {
            title: "Menses",
            description: "Design & Development",
            imgUrl: menses,
            url: "https://theshiveshh.github.io/Menses-/"
        },
        {
            title: "Gemini-CLone",
            description: "React.js and Gemini API",
            imgUrl: gemini,
            url: "https://github.com/aikanshi-1234/Gemini-c"
        },
        {
            title: "Portfolio",
            description: "React.js",
            imgUrl: portfolio,
            url: "https://github.com/aikanshi-1234/Portfolio"
        },


    ];

    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col size={12}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <h2>Projects</h2>
                                    <Tab.Container id="projects-tabs">
                                        <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                                            <Row>
                                                {
                                                    projects.map((project, index) => {
                                                        return (
                                                            <ProjectCard
                                                                key={index}
                                                                {...project}
                                                            />
                                                        )
                                                    })
                                                }
                                            </Row>
                                        </Tab.Content>
                                    </Tab.Container>
                                </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2}></img>
        </section>
    )
}
