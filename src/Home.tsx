import React from "react";
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBContainer,
  MDBMask,
  MDBView,
  MDBNavLink,
  MDBRow
} from "mdbreact";
import HOMESTARE_IMG from "./assets/HomeStare.jpg";
import HOMESTARE_SMALL_IMG from "./assets/HomeStare.JPG-small.jpg";
import SIBATEMAIN_IMG from "./assets/Sibate0419/Main.JPG";
import SIBATEMAIN_SMALL_IMG from "./assets/Sibate0419/Main.JPG-small.jpg";
import BOCAGRANDEMAIN_IMG from "./assets/Bocagrande1018/Main.JPG";
import BOCAGRANDEMAIN_SMALL_IMG from "./assets/Bocagrande1018/Main.JPG-small.jpg";

const HOMESTARE_SRCSET = HOMESTARE_SMALL_IMG.concat(" 640w, ", HOMESTARE_IMG, " 6948w");
const SIBATEMAIN_SRCSET = SIBATEMAIN_SMALL_IMG.concat(" 640w, ", SIBATEMAIN_IMG, " 6000w");
const BOCAGRANDEMAIN_SRCSET = BOCAGRANDEMAIN_SMALL_IMG.concat(" 640w, ", BOCAGRANDEMAIN_IMG, " 1280w");
const Home = () => (
  <MDBContainer fluid>
    <MDBRow className="py-0 px-0">
      <MDBView>
        <img
          // TODO: make like example at https://mdbootstrap.com/docs/react/css/background-image/
          src = {HOMESTARE_IMG}
          srcSet = {HOMESTARE_SRCSET}
          sizes = "(max-width: 700px) 640px, 100vw"
          className="img-fluid"
          alt=""
        />
        <MDBMask className="flex-center" overlay="black-light">
          <h1 className="h1-responsive white-text text-center">
            <strong>
              "Speak up for those who cannot speak for themselves... <br />{" "}
              Defend the rights of the poor and needy"
            </strong>
            <small className="text-muted grey-text">
              <br />
              Proverbs 31:8-9
            </small>
          </h1>
        </MDBMask>
      </MDBView>
    </MDBRow>

    <MDBContainer
      className="d-flex align-items-center py-0 px-0"
      style={{ height: "10vh" }}
    ></MDBContainer>

    <MDBContainer className="d-flex align-items-center py-0 px-0">
      <MDBCarousel
        activeItem={1}
        length={2}
        showControls={true} //TODO: chage when we have more
        showIndicators={true}
      >
        <MDBCarouselInner>
          <MDBCarouselItem itemId="1">
            <MDBNavLink to="/blog/Sibate0419">
              <MDBView waves zoom>
                <img
                  src={SIBATEMAIN_IMG}
                  srcSet={SIBATEMAIN_SRCSET}
                  sizes = "(max-width: 700px) 640px, 100vw"
                  className="img-fluid"
                  alt="Sibaté"
                />
                <MDBMask className="flex-center" overlay="black-light">
                  <h1 className="white-text">Sibaté, Colombia</h1>
                </MDBMask>
              </MDBView>
            </MDBNavLink>
          </MDBCarouselItem>
        <MDBCarouselItem itemId="2">
            <MDBNavLink to="/blog/Bocagrande1018">
              <MDBView waves zoom>
                <img
                  src={BOCAGRANDEMAIN_IMG}
                  srcSet={BOCAGRANDEMAIN_SRCSET}
                  sizes = "(max-width: 700px) 440px, 50vw"
                  className="img-fluid"
                  alt="Bocagrande"
                />
                <MDBMask className="flex-center" overlay="black-light">
                  <h1 className="white-text">Bocagrande, Colombia</h1>
                </MDBMask>
              </MDBView>
            </MDBNavLink>
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>
    </MDBContainer>
    <MDBContainer
      className="d-flex align-items-center py-0 px-0"
      style={{ height: "15vh" }}
    ></MDBContainer>
  </MDBContainer>
);

export default Home;
