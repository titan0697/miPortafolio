import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export const Social = () => {
  return (
    <ul className="Social">
      <li>
        <a href="https://github.com/titan0697" className="Social__icon">
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </li>
      <li>
        <a
          href="www.linkedin.com/in/cristiam-salazar-barquero-743a12251?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BP7lydXfEQbW2NPUk%2F13pEA%3D%3D/"
          className="Social__icon"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </li>
    </ul>
  );
};
