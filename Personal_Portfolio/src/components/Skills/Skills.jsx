import React, { useEffect } from "react";
import logoHTML from "../../assets/logos/html-logo.svg";
import logoCSS from "../../assets/logos/css-logo.svg";
import logoJS from "../../assets/logos/javascript-logo.svg";
import logoGit from "../../assets/logos/git-logo.svg";
import logoGitHub from "../../assets/logos/github-logo.svg";
import logoBootsrap from "../../assets/logos/bootstrap-5-1.svg";
import syncfusion from "../../assets/logos/syncfusion.svg";
import logoPrimeng from "../../assets/logos/_presskit_primeng-logo.svg";
import logoAngular from "../../assets/logos/logo-angular.svg";
import logoMongo from "../../assets/logos/mongodb-ar21.svg";
import logoNode from "../../assets/logos/node-logo.svg";
import logoVSCode from "../../assets/logos/vscode-logo.svg";
import logoNPM from "../../assets/logos/npm-logo.svg";
import logoTS from "../../assets/logos/typescript.png";
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

export const Skills = () => {
  const options = {
    rootMargin: "50px",
    threshold: 1.0,
    target: ".skills-title",
  };

  const isIntersecting = useIntersectionObserver(options);

  useEffect(() => {
    const number = document.querySelector(".Skills__number");
    if (isIntersecting) {
      number.classList.add("active");
    } else {
      number.classList.remove("active");
    }
  }, [isIntersecting]);

  return (
    <>
      <section className="Skills__section section" id="skills">
        <span className="white-grey" />
        <div className="Skills__section-grid section-grid">
          <div className="Skills__section-content-left">
            <h2 className="big-number Skills__number" aria-hidden="true">
              02
            </h2>
            <h1>
              <span className="gradient-text skills-title">Competencias</span>
            </h1>
            <p>
              Mis competencias profesionales, herramientas y lenguajes de
              programación con los que desarrollo mis proyectos.
            </p>
            <div className="external-link-container">
              <a
                className="external-link"
                href="https://www.linkedin.com/in/cristiam-salazar-barquero-743a12251?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BP7lydXfEQbW2NPUk%2F13pEA%3D%3D"
                target="_blank"
              >
                Mi Linkedin{" "}
                <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
              </a>
            </div>
          </div> 
          <div className="Skills__section-content-right">
            <p>
              Mis competencias abarcan tanto el desarrollo Front-End como el Back-End, lo que me permite construir soluciones completas y escalables. En el Front-End, trabajo con herramientas como HTML, CSS y JavaScript, utilizando Angular como uno de mis principales frameworks. En el Back-End, manejo tecnologías como Node.js, Express, y bases de datos relacionales y no relacionales como MySQL y MongoDB.
              <br />
              <br />
              Estoy en constante aprendizaje, ampliando mis conocimientos en nuevas tecnologías, frameworks y librerías, mientras desarrollo proyectos que fortalecen mis habilidades y aportan valor a los usuarios.
              <br />
              <br />A continuación encontrarás una lista de algunas
              herramientas y lenguajes con las que he trabajado hasta la fecha:
            </p><div className="slider">
              <div className="slide-track">
                <div className="slide">
                  <img src={logoVSCode} alt="VSCode logo" aria-hidden="true" />
                  <p>VS Code</p>
                </div>
                <div className="slide">
                  <img src={logoPrimeng} alt="PrimeNg logo" aria-hidden="true" />
                  <p>PrimeNg</p>
                </div>
                <div className="slide">
                  <img src={logoNPM} alt="NPM logo" aria-hidden="true" />
                  <p>NPM</p>
                </div>
                <div className="slide">
                  <img src={syncfusion} alt="Syncfusion logo" aria-hidden="true" />
                  <p>Syncfusion</p>
                </div>
                <div className="slide">
                  <img src={logoGit} alt="Git logo" aria-hidden="true" />
                  <p>Git</p>
                </div>
                <div className="slide">
                  <img
                    src={logoGitHub}
                    alt="GitHub logo"
                    className="logoGitHub"
                    aria-hidden="true"
                  />
                  <p>GitHub</p>
                </div>
                <div className="slide">
                  <img src={logoHTML} alt="HTML logo" aria-hidden="true" />
                  <p>HTML</p>
                </div>
                <div className="slide">
                  <img src={logoCSS} alt="CSS logo" aria-hidden="true" />
                  <p>CSS</p>
                </div>
                <div className="slide">
                  <img src={logoJS} alt="JavaScript logo" aria-hidden="true" />
                  <p>JavaScript</p>
                </div>
                <div className="slide">
                  <img
                    src={logoTS}
                    alt="TypeScript logo"
                    aria-hidden="true"
                    className="logoTS"
                  />

                  <p>TypeScript</p>
                </div>
                <div className="slide">
                  <img src={logoAngular} alt="Angular logo" aria-hidden="true" />
                  <p>Angular</p>
                </div>
                <div className="slide">
                  <img src={logoMongo} alt="MongoDB logo" aria-hidden="true" />
                  <p>MongoDB</p>
                </div>
                <div className="slide">
                  <img src={logoBootsrap} alt="Bootstrap logo" aria-hidden="true" />
                  <p>Bootstrap</p>
                </div>

                {/* <div className="slide">
                  <img
                    src={logoCommandLine}
                    alt="Command line logo"
                    aria-hidden="true"
                  />
                  <p>Command line</p>
                </div> */}
                <div className="slide">
                  <img src={logoVSCode} alt="VSCode logo" aria-hidden="true" />
                  <p>VS Code</p>
                </div>
                <div className="slide">
                  <img src={logoPrimeng} alt="PrimeNg logo" aria-hidden="true" />
                  <p>PrimeNg</p>
                </div>
                <div className="slide">
                  <img src={logoNPM} alt="NPM logo" aria-hidden="true" />
                  <p>NPM</p>
                </div>
                <div className="slide">
                  <img src={logoNode} alt="Node logo" aria-hidden="true" />
                  <p>Node JS</p>
                </div>
                <div className="slide">
                  <img src={logoGit} alt="Git logo" aria-hidden="true" />
                  <p>Git</p>
                </div>
                <div className="slide">
                  <img
                    src={logoGitHub}
                    alt="GitHub logo"
                    className="logoGitHub"
                    aria-hidden="true"
                  />
                  <p>GitHub</p>
                </div>
              </div>
            </div>
          </div>
        </div >
      </section >
    </>
  );
};
