import React, { useEffect } from "react";
import logoHTML from "../../assets/logos/html-logo.svg";
import logoCSS from "../../assets/logos/css-logo.svg";
import logoAngular from "../../assets/logos/logo-angular.svg";
import logoMongo from "../../assets/logos/mongodb-ar21.svg";
import logoMongoDB from "../../assets/logos/mongodb-logo.svg";
import logoNode from "../../assets/logos/node-logo.svg";
import logoFormik from "../../assets/logos/formik.svg";
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { faAngular, faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logoFirebase from "../../assets/logos/firebase-logo.svg";

export const Projects = () => {
  const options = {
    rootMargin: "50px",
    threshold: 1.0,
    target: ".projects-title",
  };

  const isIntersecting = useIntersectionObserver(options);

  useEffect(() => {
    const number = document.querySelector(".Projects__number");
    if (isIntersecting) {
      number.classList.add("active");
    } else {
      number.classList.remove("active");
    }
  }, [isIntersecting]);

  return (
    <>
      <section className="Projects__section section" id="projects">
        <span className="grey-white" />
        <div className="Projects__section-grid section-grid">
          <div className="Projects__section-content-left">
            <div className="project project1">
              <h2>GIFs App</h2>
              <ul>
                <li>
                  <img src={logoAngular} alt="Angular logo" aria-hidden="true" />
                </li>
                <li>
                  <img src={logoHTML} alt="HTML logo" aria-hidden="true" />
                </li>
                <li>
                  <img src={logoCSS} alt="CSS logo" aria-hidden="true" />
                </li>
              </ul>
              <p>Aplicación de GIFs creada con Angular.</p>
              <div className="project-links-container">
                <a
                  href="https://gifs-339db.web.app/"
                  target="_blank"
                >
                  Ir al proyecto{" "}
                  <FontAwesomeIcon
                    icon={faArrowUpRightFromSquare}
                  ></FontAwesomeIcon>
                </a>
                <a
                  href="https://github.com/titan0697/GIFS"
                  target="_blank"
                >
                  Ver código <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
                </a>
              </div>
            </div>
            <div className="project project2">
              <h2>Country App</h2>
              <ul>
                <li>
                  <img src={logoAngular} alt="Angular logo" aria-hidden="true" />

                </li>
                <li>
                  <img src={logoHTML} alt="HTML logo" aria-hidden="true" />
                </li>
                <li>
                  <img src={logoCSS} alt="CSS logo" aria-hidden="true" />
                </li>
              </ul>
              <p>
                Aplicación de búsqueda de paises construída con Angular.
              </p>
              <div className="project-links-container">
                <a href="https://country-app-f150e.web.app/countries/by-capital" target="_blank">
                  Ir al proyecto{" "}
                  <FontAwesomeIcon
                    icon={faArrowUpRightFromSquare}
                  ></FontAwesomeIcon>
                </a>
                <a href="https://github.com/titan0697/Country-app" target="_blank">
                  Ver código <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
                </a>
              </div>
            </div>


            <div className="project project2">
              <h2>Recetas App</h2>
              <ul>
                <li>
                  <img src={logoAngular} alt="Angular logo" aria-hidden="true" />

                </li>
                <li>
                  <img src={logoFirebase} alt="Firebase logo" aria-hidden="true" />
                </li>
                <li>
                  <img src={logoHTML} alt="HTML logo" aria-hidden="true" />
                </li>
                <li>
                  <img src={logoCSS} alt="CSS logo" aria-hidden="true" />
                </li>
              </ul>
              <p>
                Aplicación desarrollada utilizando Angular como framework principal, con base de datos en Firebase y sistema de autenticación implementado a través de Firebase Authentication.
              </p>
              <div className="project-links-container">
                <a href="https://recetas-b1739.web.app/login" target="_blank">
                  Ir al proyecto{" "}
                  <FontAwesomeIcon
                    icon={faArrowUpRightFromSquare}
                  ></FontAwesomeIcon>
                </a>
              </div>
            </div>




            <div className="project project4">
              <h2>Hospital App</h2>
              <ul>
                <li>
                  <img src={logoAngular} alt="HTML logo" aria-hidden="true" />
                </li>
                <li>
                <img src={logoMongo} alt="HTML logo" aria-hidden="true" />
                </li>
                <li>
                <img src={logoNode} alt="HTML logo" aria-hidden="true" />
                </li>
              </ul>
              <p>
              App hospital se hizo el front-end con Angular, DB con MongoDB 
                y se utilizo Node.js para las APIS.
              </p>
              <div className="project-links-container">
                <a
                  href="https://github.com/titan0697/angular-adv-adminpro-1.18.0"
                  target="_blank"
                >
                  Ver código <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
                </a>
              </div>
            </div>
          </div>
          <div className="Projects__section-content-right">
            <h2 className="big-number Projects__number" aria-hidden="true">
              03
            </h2>
            <h1>
              <span className="gradient-text projects-title">Portfolio</span>
            </h1>
            <p>
              Aquí encontrarás algunos de mis proyectos como desarrollador web,
              con enlaces a los mismos y acceso al código fuente.
              Aclaro que hay proyectos tanto de Angular como de otras tecnologias que tambien 
              manejo: Java, c#.
            </p>
            <div className="external-link-container">
              <a
                className="external-link"
                href="https://github.com/titan0697"
                target="_blank"
              >
                GitHub <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
