import React from "react";
import { Container, Row, Col } from "react-bootstrap";
//import homeLogo from "../../Assets/home.gif";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import Clock from "../Clock";

function Home() {
  return (
    <section>
      
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 20 }} className="heading">
                Hello People!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                ❤
                </span>
              </h1>
              <h1 className="heading-name">
                I'M
                <strong className="main-name"> LEENA RAMAYYAGARI</strong>
               <p/><h6><Type /></h6>
              </h1>
              <div style={{ padding: 180, textAlign: "left" }}>
              </div>
            </Col>

            <Col style={{ paddingBottom: 20 }} >
            <Clock/>
              {/*<img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
  />*/}
                
               
            </Col>

          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
