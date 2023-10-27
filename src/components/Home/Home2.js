import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/about.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  // AiOutlineTwitter,
  // AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              A LITTLE ABOUT  <span className="purple"> MY STORY </span>
            </h1>
            <p className="home-about-body">
              I am Leena Ramayyagari, a <b className="purple">Full Stack Web Developer</b>  blending creativity with technical expertise. With a Master's degree from <b className="purple">Purdue University</b>  and hands-on experience at Virtusa and Relanto.INC, I have crafted seamless web applications by harmonizing front-end and back-end technologies.
              <br /><br />
              My passion for innovation led to projects like <b className="purple">"Career Path 3.0"</b> and <b className="purple">"Togo Pickup 1.0"</b>, where I transformed ideas into interactive digital solutions. I thrive on challenges, solve problems with a coding mindset, and bring a relentless drive to every project.
              <br /><br />
              Now, I am excitedly exploring full-time opportunities to contribute my skills and creativity to innovative web development ventures.
              <br />
              <br />
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
            <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/RamayyagariLeena"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/leena-ramayyagari/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons">
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
