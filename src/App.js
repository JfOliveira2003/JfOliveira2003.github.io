import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="content">
        <header className="App-header">
          <h1>Fabricio Jose</h1>
          <h3>DevOps Engineer</h3>
        </header>
        <section id="about">
          <h2>About</h2>
          <div className="card">
            <p>
              Hello there! I'm Fabricio, a DevOps Engineer focused on Cloud
              services. Computer Science is a pleasant hobby of mine. When i'm
              not reading or studying, i'm probably helping someone.
            </p>
          </div>
        </section>
        <section id="experience">
          <h2>Experience</h2>
          <div className="card">
            <h3>A4PM</h3>
            <p>DevOps Engineer | 2024 - Present</p>
            <ul>
              <li>Implemented CI/CD pipelines for various applications.</li>
              <li>Managed cloud infrastructure on AWS.</li>
              <li>Automated operational tasks using Python and Bash.</li>
            </ul>
          </div>
        </section>
        <section id="portfolio">
          <h2>Portfolio</h2>
          <div className="card">
            <h3>Project X</h3>
            <p>A brief description of Project X.</p>
          </div>
        </section>
        <section id="skills">
          <h2>Skills</h2>
          <div className="skills-container card">
            <div className="skill-box">
              <img src="/kubernetes.svg" alt="Kubernetes" />
              <p>Kubernetes</p>
            </div>
            <div className="skill-box">
              <img src="/aws-svgrepo-com.svg" alt="" />
              <p>AWS</p>
            </div>
            <div className="skill-box">
              <img src="/gitlab.svg" />
              <p>Gitlab CI/CD</p>
            </div>
            <div className="skill-box">
              <img src="/github.svg" alt="Github" />
              <p>Github Actions</p>
            </div>
            <div className="skill-box">
              <img src="/terraform-svgrepo-com.svg" alt="" />
              <p>Terraform</p>
            </div>
            <div className="skill-box">
              <img src="/ansible.svg" alt="Ansible" />
              <p>Ansible</p>
            </div>
            <div className="skill-box">
              <img src="/docker-svgrepo-com.svg" alt="Docker" />
              <p>Docker</p>
            </div>

            <div className="skill-box">
              <img src="/grafana.svg" alt="Grafana" />
              <p>Grafana</p>
            </div>
            <div className="skill-box">
              <img src="/prometheus.svg" alt="Prometheus" />
              <p>Prometheus</p>
            </div>
            <div className="skill-box">
              <img src="/shell.svg" alt="Shell Script" />
              <p>Shell Script</p>
            </div>
            <div className="skill-box">
              <img src="/java.svg" alt="Java" />
              <p>Java</p>
            </div>
            <div className="skill-box">
              <img src="/spring.svg" alt="Spring" />
              <p>Spring</p>
            </div>
          </div>
        </section>
        <section id="contact">
          <h2>Contact</h2>
          <div className="card">
            <p>Email: fabriciojosemacedo@gmail.com</p>
            <a href="https://www.linkedin.com/in/fabricio-oliveira-a11a012b7">
              {" "}
              Linkedin
            </a>
            <a href="https://github.com/JfOliveira2003">
              <img
                width={50}
                height={50}
                src="github-142-svgrepo-com.svg"
                alt=""
              />
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
