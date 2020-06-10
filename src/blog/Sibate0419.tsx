import React from "react";
import { MDBContainer, MDBMask, MDBView, MDBCol, MDBRow} from "mdbreact";
import MAINSPLASH_IMG from "../assets/Sibate0419/MainSplash.JPG";
import MAINSPLASH_SMALL_IMG from "../assets/Sibate0419/MainSplash.JPG-small.jpg";
import KIDACT_IMG from "../assets/Sibate0419/KidActivities.JPG";
import KIDACT_SMALL_IMG from "../assets/Sibate0419/KidActivities.JPG-small.jpg";
import PRAYER_IMG from "../assets/Sibate0419/Prayer.JPG";
import PRAYER_SMALL_IMG from "../assets/Sibate0419/Prayer.JPG-small.jpg";
import ADULTSPEECH_IMG from "../assets/Sibate0419/AdultSpeech.JPG";
import ADULTSPEECH_SMALL_IMG from "../assets/Sibate0419/AdultSpeech.JPG-small.jpg";
import ADULTSPEECH2_IMG from "../assets/Sibate0419/AdultSpeech2.JPG";
import ADULTSPEECH2_SMALL_IMG from "../assets/Sibate0419/AdultSpeech2.JPG-small.jpg";
import FOODPREP_IMG from "../assets/Sibate0419/FoodPrep.JPG";
import FOODPREP_SMALL_IMG from "../assets/Sibate0419/FoodPrep.JPG-small.jpg";
import FOODPREP2_IMG from "../assets/Sibate0419/FoodPrep2.JPG";
import FOODPREP2_SMALL_IMG from "../assets/Sibate0419/FoodPrep2.JPG-small.jpg";
import FOODSERVICE_IMG from "../assets/Sibate0419/FoodService.JPG";
import FOODSERVICE_SMALL_IMG from "../assets/Sibate0419/FoodService.JPG-small.jpg";
import LUNCHROOM_IMG from "../assets/Sibate0419/LunchRoom.JPG";
import LUNCHROOM_SMALL_IMG from "../assets/Sibate0419/LunchRoom.JPG-small.jpg";
import ARTICLESGIVEAWAY_IMG from "../assets/Sibate0419/ArticlesGiveaway.JPG";
import ARTICLESGIVEAWAY_SMALL_IMG from "../assets/Sibate0419/ArticlesGiveaway.JPG-small.jpg";
import TESTIMONY_IMG from "../assets/Sibate0419/Testimony.JPG";
import TESTIMONY_SMALL_IMG from "../assets/Sibate0419/Testimony.JPG-small.jpg";
import GIVEAWAYSTAND_IMG from "../assets/Sibate0419/GiveawayStand.JPG";
import GIVEAWAYSTAND_SMALL_IMG from "../assets/Sibate0419/GiveawayStand.JPG-small.jpg";
import SHOES_IMG from "../assets/Sibate0419/ShoesGiveaway.JPG";
import SHOES_SMALL_IMG from "../assets/Sibate0419/ShoesGiveaway.JPG-small.jpg";

const MAINSPLASH_SRCSET = MAINSPLASH_SMALL_IMG.concat("  640w, ", MAINSPLASH_IMG, " 6000w");
const KIDACT_SRCSET = KIDACT_SMALL_IMG.concat("  640w, ", KIDACT_IMG, " 6000w");
const PRAYER_SRCSET = PRAYER_SMALL_IMG.concat("  640w, ", PRAYER_IMG, " 6000w");
const ADULTSPEECH_SRCSET = ADULTSPEECH_SMALL_IMG.concat("  640w, ", ADULTSPEECH_IMG, " 6000w");
const ADULTSPEECH2_SRCSET = ADULTSPEECH2_SMALL_IMG.concat("  640w, ", ADULTSPEECH2_IMG, " 6000w");
const FOODPREP_SRCSET = FOODPREP_SMALL_IMG.concat("  640w, ", FOODPREP_IMG, " 6000w");
const FOODPREP2_SRCSET = FOODPREP2_SMALL_IMG.concat("  640w, ", FOODPREP2_IMG, " 6000w");
const FOODSERVICE_SRCSET = FOODSERVICE_SMALL_IMG.concat("  640w, ", FOODSERVICE_IMG, " 6000w");
const LUNCHROOM_SRCSET = LUNCHROOM_SMALL_IMG.concat("  640w, ", LUNCHROOM_IMG, " 6000w");
const ARTICLESGIVEAWAY_SRCSET = ARTICLESGIVEAWAY_SMALL_IMG.concat("  640w, ", ARTICLESGIVEAWAY_IMG, " 6000w");
const TESTIMONY_SRCSET = TESTIMONY_SMALL_IMG.concat("  640w, ", TESTIMONY_IMG, " 6000w");
const GIVEAWAYSTAND_SRCSET = GIVEAWAYSTAND_SMALL_IMG.concat("  640w, ", GIVEAWAYSTAND_IMG, " 6000w");
const SHOES_SRCSET = SHOES_SMALL_IMG.concat("  640w, ", SHOES_IMG, " 6000w");

const Sibate0419 = () => (
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
            <h1 className="white-text">Sibaté</h1>
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
            <MDBRow className="mb-3">
                <p className="white-text">
                    This mission consisted of delivering food, clothing and the gospel 
                    to individuals in the remote town of Sibaté. Getting up at around 4AM
                    facing eternity traveled to this town after picking up freshly made tamales
                    (A Colombian dish). The first step once arriving was to greet the families
                    and have a good talk with the kids. Warm them up for the sermon with interactive
                    activities.
                </p>
            </MDBRow>
            <MDBRow center>
                <MDBCol xl="6" md="6" className="mb-3">
                    <img
                    src={KIDACT_IMG}
                    srcSet={KIDACT_SRCSET}
                    sizes = "(max-width: 700px) 640px, 100vw"
                    className="img-fluid"
                    alt=""
                    />
                </MDBCol>
            </MDBRow>
            <MDBRow>
                <p className="white-text">
                    Not to leave out the adults though! A full sermon enlightened
                    and warmed the hearts of many families in need. Namely, those
                    striken by poverty and left forgotten. We stated our mission
                    and those around us listened tentatively.
                </p>
            </MDBRow>
            <MDBRow>
                <MDBCol xl="4" md="4" className="mb-3">
                    <img
                    src={PRAYER_IMG}
                    srcSet={PRAYER_SRCSET}
                    sizes = "(max-width: 700px) 640px, 100vw"
                    className="img-fluid"
                    alt=""
                    />
                </MDBCol>
                <MDBCol xl="4" md="4" className="mb-3">
                    <img
                    src={ADULTSPEECH_IMG}
                    srcSet={ADULTSPEECH_SRCSET}
                    sizes = "(max-width: 700px) 640px, 100vw"
                    className="img-fluid"
                    alt=""
                    />
                </MDBCol>
                <MDBCol xl="4" md="4" className="mb-3">
                    <img
                    src={ADULTSPEECH2_IMG}
                    srcSet={ADULTSPEECH2_SRCSET}
                    sizes = "(max-width: 700px) 640px, 100vw"
                    className="img-fluid"
                    alt=""
                    />
                </MDBCol>
            </MDBRow>
            <MDBRow>
                <p className="white-text">
                    Finally facing eternity moved on to feeding the hungry. Two
                    25 gallon pots were filled with tamales and heated to a boil.
                    Coffee and bread were added and served to everyone at the event.
                </p>
            </MDBRow>
            <MDBRow>
                <MDBCol xl="6" md="6" className="mb-3">
                    <img
                    src={FOODPREP_IMG}
                    srcSet={FOODPREP_SRCSET}
                    sizes = "(max-width: 700px) 640px, 100vw"
                    className="img-fluid"
                    alt=""
                    />
                </MDBCol>
                <MDBCol xl="6" md="6" className="mb-3">
                    <img
                    src={FOODPREP2_IMG}
                    srcSet={FOODPREP2_SRCSET}
                    sizes = "(max-width: 700px) 640px, 100vw"
                    className="img-fluid"
                    alt=""
                    />
                </MDBCol>
            </MDBRow>
            <MDBRow>
                <MDBCol xl="6" md="6" className="mb-3">
                    <img
                    src={FOODSERVICE_IMG}
                    srcSet={FOODSERVICE_SRCSET}
                    sizes = "(max-width: 700px) 640px, 100vw"
                    className="img-fluid"
                    alt=""
                    />
                </MDBCol>
                <MDBCol xl="6" md="6" className="mb-3">
                    <img
                    src={LUNCHROOM_IMG}
                    srcSet={LUNCHROOM_SRCSET}
                    sizes = "(max-width: 700px) 640px, 100vw"
                    className="img-fluid"
                    alt=""
                    />
                </MDBCol>
            </MDBRow>
            <MDBRow>
                <p className="white-text">
                    And finally the event moved on to the give away. Clothes and supplies
                    anywhere from babies to grown ups were handed out. The sorting that
                    took place at the start of the event helped attendants find articles
                    in an easier fashion.
                </p>
            </MDBRow>
            <MDBRow>
                <MDBCol middle xl="4" md="4" className="mb-3">
                    <img
                    src={ARTICLESGIVEAWAY_IMG}
                    srcSet={ARTICLESGIVEAWAY_SRCSET}
                    sizes = "(max-width: 700px) 640px, 100vw"
                    className="img-fluid"
                    alt=""
                    />
                </MDBCol>
                <MDBCol xl="4" md="4" className="mb-3">
                    <img
                    src={TESTIMONY_IMG}
                    srcSet={TESTIMONY_SRCSET}
                    sizes = "(max-width: 700px) 640px, 100vw"
                    className="img-fluid"
                    alt=""
                    />
                </MDBCol>
                <MDBCol middle xl="4" md="4" className="mb-3">
                    <img
                    src={GIVEAWAYSTAND_IMG}
                    srcSet={GIVEAWAYSTAND_SRCSET}
                    sizes = "(max-width: 700px) 640px, 100vw"
                    className="img-fluid"
                    alt=""
                    />
                </MDBCol>
            </MDBRow>
            <MDBRow>
                <p className="white-text">
                    Many took the time to share their walk. Here is the case of Alberto who
                    has strugled with mental and physical disabilities after being hit by a an eighteen wheeler.
                    After two years of rehabilitation and recovering from a large part of his body being fractured,
                    he is doing his best to help out his family. He hadn't had a new pair of shoes in almost a
                    decade but thanks to this outreach he found a pair just right for him.
                </p>
            </MDBRow>
            <MDBRow center>
                <MDBCol xl="6" md="6" className="mb-3">
                    <img
                    src={SHOES_IMG}
                    srcSet={SHOES_SRCSET}
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

export default Sibate0419;
