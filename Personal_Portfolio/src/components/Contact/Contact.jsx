import React, { useEffect } from "react";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faAlignRight } from "@fortawesome/free-solid-svg-icons";
import logoHTML from "../../assets/logos/html-logo.svg";
import logoCSS from "../../assets/logos/css-logo.svg";
import logoJS from "../../assets/logos/javascript-logo.svg";
import logoSass from "../../assets/logos/sass-logo.svg";
import logoReact from "../../assets/logos/react-logo.svg";
import logoRedux from "../../assets/logos/redux-logo.svg";
import logoGit from "../../assets/logos/git-logo.svg";
import logoGitHub from "../../assets/logos/github-logo.svg";
import logoLinux from "../../assets/logos/linux-logo.svg";
import logoBootsrap from "../../assets/logos/bootstrap-5-1.svg";
import syncfusion from "../../assets/logos/syncfusion.svg";
import logoPrimeng from "../../assets/logos/_presskit_primeng-logo.svg";
import logoAngular from "../../assets/logos/logo-angular.svg";
import logoMongo from "../../assets/logos/mongodb-ar21.svg";
import logoNode from "../../assets/logos/node-logo.svg";
import logoVSCode from "../../assets/logos/vscode-logo.svg";
import logoNPM from "../../assets/logos/npm-logo.svg";
import logoJest from "../../assets/logos/jest-logo.svg";
import logoEmail from "../../assets/logos/javascript-logo.svg";
import logoTS from "../../assets/logos/typescript.png";
import logoCommandLine from "../../assets/logos/command-line.png";
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Contact = () => {
  const options = {
    rootMargin: "50px",
    threshold: 1.0,
    target: ".contact-title",
  };

  const isIntersecting = useIntersectionObserver(options);

  useEffect(() => {
    const number = document.querySelector(".Contact__number");
    if (isIntersecting) {
      number.classList.add("active");
    } else {
      number.classList.remove("active");
    }
  }, [isIntersecting]);

  return (
    <>
      <section className="Contact__section section" id="contact">
        <span className="white-grey" />
        <div className="Contact__section-grid section-grid">
          <div className="Contact__section-content-left">
            <h2 className="big-number Contact__number" aria-hidden="true">
              04
            </h2>
            <h1>
              <span className="gradient-text contact-title">Contacto</span>
            </h1>
            
          </div>
          {/* <div className="Contact__section-content-right">
            <div className="Contact__section-form-container">
              <ContactForm />
            </div>
          </div> */}
          <div className="Contact__section-grid section-grid">
          <div className="Contact__section-content-left">
            <p>
              Para cualquier consulta, contáctame a través del siguiente
              correo electronico o mediante mi perfil de Linkedin.
            </p>
            <div className="external-link-container">
              <a
                className="external-link"
                href="https://www.linkedin.com/in/cristiam-salazar-barquero-743a12251?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BP7lydXfEQbW2NPUk%2F13pEA%3D%3D/"
                target="_blank" rel="noreferrer"
              >
                Linkedin <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
              </a>
              <a
                className="external-link"
                href="mailto:titan_barquero@hotmail.com?">Correo Electrónico
              </a>
            </div>
          </div>
          </div>
        </div>
      </section>
    </>
  );
};
