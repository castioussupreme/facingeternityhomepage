import React from "react";
import { MDBContainer, MDBFooter } from "mdbreact";

const { SocialIcon } = require('react-social-icons');
const Footer = () => {
  return (
    <MDBFooter
      color="elegant-color-dark"
      className="page-footer font-small pt-0 "
    >
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
        <SocialIcon network="facebook" url="https://www.facebook.com/facingeternity/" style={{ height: 50, width: 50 }} fgColor="#FFFFFF" bgColor="transparent" />
        <SocialIcon network="instagram" url="https://www.instagram.com/facingeternity/" style={{ height: 50, width: 50 }} fgColor="#FFFFFF" bgColor="transparent"/>
        <SocialIcon network="twitter" url="https://twitter.com/FacingEternity" style={{ height: 50, width: 50}} fgColor="#FFFFFF" bgColor="transparent"/>
        <SocialIcon network="youtube" url="https://www.youtube.com/channel/UC22woGikWBN9uP4xMlvgjbQ" style={{ height: 50, width: 50}} fgColor="#FFFFFF" bgColor="transparent"/>
          <br></br>         
          &copy; {new Date().getFullYear()} Copyright:{" "}
          <a href="https://facingeternity.org"> facingeternity.org </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
};

export default Footer;
