import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

// import empty from "../../Assets/Projects/project_empty.png";
import dope from "../../Assets/Projects/dope.png";
import careerpath from "../../Assets/Projects/careerpath.png";
import ToGo from "../../Assets/Projects/ToGo.png";
import paper from "../../Assets/Projects/paper.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Projects </strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dope}
              isGh={true}
              second={true}
              isPhone=""
              title="DOPE"
              label_1="Github"
              label_2="Design Link"
              description="Crafted the design for a mobile app focused on reducing food wastage, featuring a user-friendly interface and 50 recipe access. Used 
              Figma, mobile app design."
              link_1="https://github.com/RamayyagariLeena/DOPE-DATE_OF_PRODUCT_EXPIRY-APPLICATION_FIGMA_DESIGN_1.0.git"
              link_2="https://www.figma.com/file/vv5Pq5NLP2T0YsXJtDWBsY/Dope?type=design&node-id=0%3A1&mode=design&t=JLeIKaXHLM4mtSKG-1"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={careerpath}
              isBlog={false}
              isGh={true}
              label_1="Github"
              title="CareerPath_3.0"
              description="Implemented an application to facilitate users in determining their optimal career path 3.0 based on experience and interests.
              Utilized HTML, CSS, JavaScript, ReactJS, NodeJS, Firebase."
              link_1="https://github.com/RamayyagariLeena/CarrerPath_3.0.git"
            
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ToGo}
              isGh={true}
              isBlog={false}
              title="ToGo_Application"
              label_1="Github"
              description="Pioneered an online application aimed at revolutionizing the way people transport items around the city, 15% reduction in delivery 
              costs for users. Employed HTML, CSS, JavaScript, ReactJS, NodeJS, Firebase."
              link_1="https://github.com/RamayyagariLeena/To_Go_Application.git"
                        
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={paper}
              isBlog={true}
              isGh={true}
              
              title="TEST CASE PRIORITIZATION RESEARCH PAPER 1.0"
              label_1="Github"
              description=" Conducted in-depth research on test case prioritization, resulting in a reduction of test cases from 100 to 27 while maintaining high
              testing quality. Implemented with Django, fault-seeding, code coverage analysis."
              link_1="https://github.com/RamayyagariLeena/TEST-CASE-PRIORITIZATION-RESEARCH-PAPER-1.0.git"
              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
