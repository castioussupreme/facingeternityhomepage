import React from "react";
import { MDBContainer, MDBMask, MDBView } from "mdbreact";
import ALONSO_IMG from "./assets/Alonso.jpg";
import ALONSO_SMALL_IMG from "./assets/Alonso.JPG-small.jpg";

const ALONSO_SRCSET = ALONSO_SMALL_IMG.concat(" 640w, ", ALONSO_IMG, " 3000w");

const About = () => (
  <MDBContainer fluid className="py-0 px-0">
    <MDBView>
      <img src={ALONSO_IMG} srcSet = {ALONSO_SRCSET} sizes = "(max-width: 700px) 640px, 100vw" className="img-fluid" alt="" />
      <MDBMask className="flex-center" overlay="black-light">
        <h1 className="h1-responsive white-text text-center">
          <strong>
            Born in Colombia, Alonso is acquainted with the harsh environment
            unprivillaged children go through day to day <br />
            It is the mission of Facing Eternity to change lives child by child.
          </strong>
        </h1>
      </MDBMask>
    </MDBView>
  </MDBContainer>
);

export default About;
