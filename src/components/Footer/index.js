import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer>
      <div>
        <h4>E&M Billing LLC</h4>
        <p>Royse City, TX</p>
        <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
      </div>
    </footer>
  );
};

export default Footer;
