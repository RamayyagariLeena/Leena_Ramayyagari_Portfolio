import React from "react";
import Card from "react-bootstrap/Card";
import { IoIosArrowForward } from "react-icons/io";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "Left" }}>
            Hello, I am <span className="purple">Leena Ramayyagari </span>
            located in <span className="purple"> Virginia, USA.</span>
            <br /><br />I am a skilled Full Stack Developer and Software Developer, equipped with a Computer Science Master's degree from  <span className="purple">Purdue University</span>. My expertise lies in crafting innovative solutions and seamless user experiences across the digital landscape.
            <br />
            <br />
            Apart from coding, some other activities that I love to do
          </p>
          <ul>
            <li className="about-activity">
              <IoIosArrowForward /> Painting
            </li>
            <li className="about-activity">
              <IoIosArrowForward /> Tutoring
            </li>
            <li className="about-activity">
              <IoIosArrowForward /> Traveling
            </li>
            <li className="about-activity">
              <IoIosArrowForward /> Meeting new people
            </li>
            <li className="about-activity">
              <IoIosArrowForward /> Software Projects
            </li>
            <li className="about-activity">
              <IoIosArrowForward /> Crafting
            </li>
          </ul>

          <p style={{ color: "#2D82B7", textAlign: "left" }}>
            “A son asked his father (a programmer) why the sun rises in the east, and sets in the west. His response? It works, don’t touch!.” {" "}
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
