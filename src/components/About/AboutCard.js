import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Faith Chulu </span>
            from <span className="purple"> Lusaka, Zambia.</span>
            <br />
            I am currently employed as a Business Analyst at ProBase Group.
            <br />
            I have completed my Bachelor of Science (BSC) in Computer Science at DMI
            St. Eugene University.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Play my Guitar
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "I don't just build code—I build solutions that empower, protect, and transform lives through technology!"{" "}
          </p>
          <footer className="blockquote-footer">Faith</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
