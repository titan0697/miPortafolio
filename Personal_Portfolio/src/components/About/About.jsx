import React, { useEffect } from "react";
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const About = () => {
  const options = {
    rootMargin: "50px",
    threshold: 1.0,
    target: ".about-title",
  };

  const isIntersecting = useIntersectionObserver(options);

  useEffect(() => {
    const number = document.querySelector(".About__number");
    if (isIntersecting) {
      number.classList.add("active");
    } else {
      number.classList.remove("active");
    }
  }, [isIntersecting]);

  return (
    <>
      <section className="About__section section" id="about">
        <span className="gradient-div separator" />
        <div className="About__section-grid section-grid">
          <div className="About__section-content-left">
            <p>
              <h1>
                <span className="gradient-text about-title">Sobre mí</span>
              </h1>
              Mi nombre es <strong> Cristiam</strong>, soy graduado de la <strong> Universidad Nacional de Costa Rica </strong> y he complementado mi formación académica con cursos autodidactas en plataformas como {" "}
              <a
                href="https://www.udemy.com/"
                className="gradient-text"
                target="_blank"
                rel="noreferrer"
              >
                Udemy
              </a>

              .
              <br /> <br />
              Mi pasión por comprender cómo funcionan las tecnologías me ha llevado a desarrollar habilidades que abarcan diferentes áreas del desarrollo de software.
              <br /> <br />
              Fuera del mundo del código, disfruto del fútbol, el cine y los videojuegos, actividades que me inspiran y me ayudan a mantener un equilibrio personal y profesional.
              <br /> <br />
              <h1>
                <span className="gradient-text about-title">Valores y mentalidad</span>
              </h1>
              Me considero una persona honesta, comprometida y con gusto por los retos, siempre en búsqueda de trabajar en un entorno positivo y de constante aprendizaje. Estoy motivado por contribuir con soluciones innovadoras y efectivas, mientras sigo creciendo como profesional en el mundo del desarrollo tecnológico.
            </p>
          </div>
          <div className="About__section-content-right">
            <h2 className="big-number About__number" aria-hidden="true">
              01
            </h2>
            <h1>
              <span className="gradient-text about-title">Sobre mí</span>
            </h1>
            <p>
              Una pequeña introducción con datos de interés sobre mi persona, mi
              background y mi perfil profesional.
            </p>
            <div className="external-link-container">
              <a
                className="external-link"
                href="/CVTitan.pdf"
                target="_blank"
                type="application/pdf"
              >
                Accede a mi CV{" "}
                <FontAwesomeIcon
                  icon={faArrowUpRightFromSquare}
                ></FontAwesomeIcon>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
