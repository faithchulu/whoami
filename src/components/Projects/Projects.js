import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import elect from "../../Assets/images/e-Elect.png";
import mindsight from "../../Assets/images/Mind_sight2.png";
import dashboard from "../../Assets/images/Dashboard.png";
import catgallery from "../../Assets/images/Cat_gallery.png";
import triviaapp from "../../Assets/images/Triavia_app.png";
import getstone from "../../Assets/images/Get Stone.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={elect}
              isBlog={false}
              title="e-Elect"
              description="A blockchain-based web voting system integrated with biometric authentication (fingerprint recognition) to ensure secure and transparent digital elections. Built with Solidity, Web3.js, and React."
              ghLink="https://github.com/faithchulu/e-Elect"
              demoLink="https://e-elect.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mindsight}
              isBlog={false}
              title="MindSight"
              description="An AI-powered mental health diagnostic tool that uses NLP to assess symptoms and provide insights into potential mental health conditions. Designed to support early detection and promote mental well-being."
              ghLink="https://github.com/faithchulu/AI-for-Mental-Disorder-Diagnosis"
              demoLink="https://ai-4-mental-disorder-diagnosis.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dashboard}
              isBlog={false}
              title="Admin Dashboard"
              description="A modern and responsive admin dashboard for managing users, analytics, and system configurations. Built with React, Chart.js, and Bootstrap to streamline administrative tasks."
              ghLink="https://github.com/your-username/admin-dashboard"
              demoLink="https://momo-market-link-admin-dashboard.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={getstone}
              isBlog={false}
              title="Get Stone Website"
              description="A sleek and professional website built for a marble stone business, featuring a product gallery, customer testimonials, and an inquiry contact form. Built with HTML, CSS, and JavaScript."
              ghLink="https://github.com/faithchulu/Tution-center-landing-page"
              demoLink="https://getstone-website.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={triviaapp}
              isBlog={false}
              title="Trivia App"
              description="A fun and interactive web-based trivia game where users can test their knowledge across multiple categories and difficulty levels. Features a responsive design and timer-based gameplay."
              ghLink="https://github.com/faithchulu/Trivia-App"
              demoLink="https://trivia-app-two-xi.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={catgallery}
              isBlog={false}
              title="Kitty-Cat Gallery"
              description="A lighthearted image gallery showcasing adorable cat photos. Includes features like image modals, responsive grid layout, and a search filter. Built with React and CSS Grid."
              ghLink="https://github.com/faithchulu/cat-gallery"
              demoLink="https://kitty-cat-gallery.vercel.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
