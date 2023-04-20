import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export const Footer = () => {
  return (
    <div className="Footer__section">
      <div className="Footer__social">
        <a href="https://github.com/titan0697" target="_blank">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href="https://www.linkedin.com/in/cristiam-salazar-barquero-743a12251?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BP7lydXfEQbW2NPUk%2F13pEA%3D%3D" target="_blank">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </div>
      <div className="Footer__terms">
        <a href="/">Política de privacidad</a>
        <a href="/">Uso de cookies</a>
      </div>
      <p className="Footer__copyright">© 2023 Cristiam Salazar Barquero</p>
    </div>
  );
};
