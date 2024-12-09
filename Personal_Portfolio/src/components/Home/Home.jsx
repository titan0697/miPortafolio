import React, { useRef } from "react";
import logoHTML from "../../assets/logos/html-logo.svg";
import logoCSS from "../../assets/logos/css-logo.svg";
import logoJS from "../../assets/logos/javascript-logo.svg";
import logoAngular from "../../assets/logos/logo-angular.svg";
import logoMongo from "../../assets/logos/mongodb-ar21.svg";
import logoNode from "../../assets/logos/node-logo.svg";
import logoGit from "../../assets/logos/git-logo.svg";
import logoGitHub from "../../assets/logos/github-logo.svg";
import logoBootsrap from "../../assets/logos/bootstrap-5-1.svg";
import syncfusion from "../../assets/logos/syncfusion.svg";
import logoPrimeng from "../../assets/logos/_presskit_primeng-logo.svg";
import logoVSCode from "../../assets/logos/vscode-logo.svg";
import logoNPM from "../../assets/logos/npm-logo.svg";
import logoTS from "../../assets/logos/typescript.png";


export const Home = () => {
  const myRef = useRef();
  return (
    <section className="home__section" id="home" ref={myRef}>
      <div className="home__section-gradient">
        <div className="home__section-grid">
          <div className="home__section-content-left">
            <div>
              <h1 className="line-1">Bienvenid@. </h1> <br />
              <h1 className="line-2"> Me llamo<strong className="gradient-text"> Cristiam</strong></h1> <br />
              <h1 className="line-3">
                y soy desarrollador
                <span className="gradient-text line-gradient text-reveal-4">
                  {" "}
                  Full-Stack
                </span>
                .
              </h1>
            </div>
            <p>
              <span className="home__fade-in home__line-1">
                En esta página encontrarás información sobre mí y sobre algunos de mis
                proyectos como desarrollador web.
              </span>
              <br />
              <span className="home__fade-in home__line-2">
                Para cualquier duda o solicitud, no dudes en{" "}
                <a href="/#contact" className="gradient-text">
                  contactarme
                </a>{" "}
                .
              </span>
            </p><br/><br/><br/>
            <div className="slider">
              <div className="slide-track">
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
          <div className="home__section-content-right"></div>
        </div>
      </div>

      <div className="transparent-div"></div>
    </section>
  );
};
