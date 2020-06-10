import React from "react";
import { MDBContainer, MDBMask, MDBView, MDBCol, MDBRow} from "mdbreact";
import MAINSPLASH_IMG from "../assets/Bocagrande1018/MainSplash.JPG";
import MAINSPLASH_SMALL_IMG from "../assets/Bocagrande1018/MainSplash.JPG-small.jpg";
import FAMILY1_IMG from "../assets/Bocagrande1018/Family1.JPG";
import FAMILY1_SMALL_IMG from "../assets/Bocagrande1018/Family1.JPG-small.jpg";
import FAMILY2_IMG from "../assets/Bocagrande1018/Family2.JPG";
import FAMILY2_SMALL_IMG from "../assets/Bocagrande1018/Family2.JPG-small.jpg";

const MAINSPLASH_SRCSET = MAINSPLASH_SMALL_IMG.concat("  640w, ", MAINSPLASH_IMG, " 6000w");
const FAMILY1_SRCSET = FAMILY1_SMALL_IMG.concat("  640w, ", FAMILY1_IMG, " 6000w");
const FAMILY2_SRCSET = FAMILY2_SMALL_IMG.concat("  640w, ", FAMILY2_IMG, " 6000w");

const Bocagrande1018 = () => (
<MDBContainer fluid >
    <MDBRow>
        <MDBCol>
        <MDBView>
        <img
        src={MAINSPLASH_IMG}
        srcSet={MAINSPLASH_SRCSET}
        sizes = "(max-width: 700px) 640px, 100vw"
        className="img-fluid"
        alt=""
        />
        <MDBMask className="flex-center">
            <h1 className="white-text">Bocagrande</h1>
        </MDBMask>
      </MDBView>
        </MDBCol>
    </MDBRow>
    <MDBRow>
        <MDBContainer
        className="d-flex align-items-center py-0 px-0"
        style={{ height: "5vh" }}
        />
    </MDBRow>

    <MDBRow>
        <MDBContainer>
            <MDBRow>
                <p className="white-text">
                    Due to the recent uprest in Venezuela many immigrants have migrated to Colombia in search
                    for any aid whatsoever. Facing eternity responds to this call for help by sending missionaries
                    to preach the gospel and provide with much needed food. Documented below are two instances
                    of the outreach in Bocagrande, both monthers left with their children to fend on their own.
                </p>
            </MDBRow>
            <MDBRow>
                <MDBCol xl="6" md="6" className="mb-3">
                    <img
                    src={FAMILY1_IMG}
                    srcSet={FAMILY1_SRCSET}
                    sizes = "(max-width: 700px) 640px, 100vw"
                    className="img-fluid"
                    alt=""
                    />
                </MDBCol>
                <MDBCol xl="6" md="6" className="mb-3">
                    <img
                    src={FAMILY2_IMG}
                    srcSet={FAMILY2_SRCSET}
                    sizes = "(max-width: 700px) 640px, 100vw"
                    className="img-fluid"
                    alt=""
                    />
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    </MDBRow>
</MDBContainer>
);

export default Bocagrande1018;