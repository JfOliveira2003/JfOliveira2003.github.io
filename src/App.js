import React, { useEffect } from "react";
import "./App.css";

function App() {
  useEffect(() => {
    document.title = "Fabricio Oliveira";
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          } else {
            entry.target.classList.remove("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);
  return (
    <div className="App">
      <div className="content">
        <header className="App-header">
          <h1>Fabricio Oliveira</h1>
          <h3>DevOps Engineer</h3>
          <div className="contact-box">
            <a href="mailto:fabriciojosemacedo@gmail.com">
              <img id="network" src="/gmail.svg" width={35} height={35} />
            </a>
            <a href="https://www.linkedin.com/in/fabricio-oliveira-a11a012b7">
              {" "}
              <img id="network" src="/linkedin.svg" width={35} height={35} />
            </a>
            <a href="https://github.com/JfOliveira2003">
              <img id="network" width={35} height={35} src="git.svg" alt="" />
            </a>
          </div>
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
            <div className="experience-wrapper">
              <div className="experience-box">
                <h3 id="exp">
                  A4PM <img src="/a4pm.png" alt="" width={25} height={25} />
                </h3>

                <p>
                  <strong>DevOps Engineer</strong> | 2024 - Present
                </p>
                <p>
                  I am responsible for building and scaling software for
                  large-scale government applications with container
                  orchestration using Kubernetes and GitLab CI/CD pipelines.
                  Daily handling with AWS services like ECS, EKS, RDS, S3 to
                  mantain the needed infrastructure to contain the company
                  applications and using IAM to mantain SSO.
                </p>
                <ul>
                  <li>Implemented CI/CD pipelines for applications.</li>
                  <li>Managed cloud infrastructure on AWS.</li>
                  <li>Automated operational tasks using Python and Bash.</li>
                </ul>
              </div>
              <div className="experience-box">
                <h3 id="exp">
                  CEFET/RJ <img src="/cefet.png" width={50} height={35} />
                </h3>
                <p>
                  <strong>Software Engineer</strong> | 2023 - 2024
                </p>
                <p>
                  My university raised a team to build a management system for
                  them, i was a software engineer responsible to help build the
                  backend using Laravel framework and Php. My daily activities
                  were build services for the frontend use while needing to
                  integrate the three layers of the backend for deliver the
                  content.
                  <ul>
                    <li>
                      Implemented the Business logical in the logical layer at
                      the backend.
                    </li>
                    <li>
                      Responsible to build the api endpoints in the presentation
                      layer for the frontend{" "}
                    </li>
                    <li>
                      Perfomed the documentation record for future workers
                      understanding.
                    </li>
                  </ul>
                </p>
              </div>
            </div>
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
        <section id="portfolio">
          <h2>Projects</h2>
          <div className="card">
            <div className="project-box">
              <img src="/cat.png" alt="" />
              <p>
                "Integra.Cefet/RJ - For the Cloud" is a an unofficial web
                application that unifies every useful resource for students of
                the Federal Center of Technology in Rio de Janeiro, being hosted
                at AWS with CI/CD pipelines. (CEFET/RJ).
              </p>
              <a href="https://github.com/JfOliveira2003/integra-cefetrj.phricardo.com/tree/develop">
                Know more
              </a>
            </div>
            <div className="project-box">
              <img src="/loadbalancer.png"></img>
              <p>
                Load Balancer Service written in the go programming language
              </p>
              <a href="https://github.com/JfOliveira2003/Flip-Flop-Load-Balancer">
                Know more
              </a>
            </div>
          </div>
        </section>
        <section id="books">
          <h2>Some books that i really enjoy</h2>
          <div className="books-container card">
            <div className="book-box">
              <img width={120} height={140} src="/OS.jpg" alt="Os" />
              <p>Modern Operating Systems</p>
            </div>
            <div className="book-box">
              <img
                width={120}
                height={140}
                src="/algorithms.jpg"
                alt="algorithms"
              />
              <p>Introduction to Algorithms</p>
            </div>
            <div className="book-box">
              <img width={120} height={140} src="/network_book.jpg" />
              <p>Computer Networks</p>
            </div>
            <div className="book-box">
              <img width={120} height={140} src="/c_language.jpg" alt="C" />
              <p>The C Programming Language</p>
            </div>
            <div className="book-box">
              <img width={120} height={150} src="/habits.jpg" alt="" />
              <p>Atomic Habits</p>
            </div>
            <div className="book-box">
              <img width={120} height={150} src="/hobbit.jpg" alt="" />
              <p>The Hobbit</p>
            </div>
          </div>
        </section>
      </div>
      <footer id="contact">
        <div className="contact-box">
          <a href="mailto:fabriciojosemacedo@gmail.com">
            <img id="network" src="/gmail.svg" width={35} height={35} />
          </a>
          <a href="https://www.linkedin.com/in/fabricio-oliveira-a11a012b7">
            {" "}
            <img id="network" src="/linkedin.svg" width={35} height={35} />
          </a>
          <a href="https://github.com/JfOliveira2003">
            <img id="network" width={35} height={35} src="git.svg" alt="" />
          </a>
        </div>
        <div id="small">
          <small>© 2025 Fabricio José</small>
        </div>
      </footer>
    </div>
  );
}

export default App;
