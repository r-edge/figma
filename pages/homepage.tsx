import type { NextPage } from "next";
import { useState, useCallback } from "react";
import MatterhornPopup from "../components/matterhorn-popup";
import PortalPopup from "../components/portal-popup";
import ExploreContainer from "../components/explore-container";
import UpcomingFlightSectionContainer from "../components/upcoming-flight-section-container";
import PopularDestinationsMain from "../components/popular-destinations-main";
import RecommendedHolidaysContainer from "../components/recommended-holidays-container";
import PopularStaysForm from "../components/popular-stays-form";
import WeeklyUpdatesContainer from "../components/weekly-updates-container";
import styles from "./homepage.module.css";
const Homepage: NextPage = () => {
  const [isMatterhornPopupOpen, setMatterhornPopupOpen] = useState(false);
  const [isMatterhornPopup1Open, setMatterhornPopup1Open] = useState(false);
  const [isMatterhornPopup2Open, setMatterhornPopup2Open] = useState(false);
  const [isMatterhornPopup3Open, setMatterhornPopup3Open] = useState(false);

  const openMatterhornPopup = useCallback(() => {
    setMatterhornPopupOpen(true);
  }, []);

  const closeMatterhornPopup = useCallback(() => {
    setMatterhornPopupOpen(false);
  }, []);

  const openMatterhornPopup1 = useCallback(() => {
    setMatterhornPopup1Open(true);
  }, []);

  const closeMatterhornPopup1 = useCallback(() => {
    setMatterhornPopup1Open(false);
  }, []);

  const openMatterhornPopup2 = useCallback(() => {
    setMatterhornPopup2Open(true);
  }, []);

  const closeMatterhornPopup2 = useCallback(() => {
    setMatterhornPopup2Open(false);
  }, []);

  const openMatterhornPopup3 = useCallback(() => {
    setMatterhornPopup3Open(true);
  }, []);

  const closeMatterhornPopup3 = useCallback(() => {
    setMatterhornPopup3Open(false);
  }, []);

  return (
    <>
      <div className={styles.homepage}>
        <ExploreContainer />
        <div className={styles.homeContents}>
          <UpcomingFlightSectionContainer />
          <PopularDestinationsMain />
          <RecommendedHolidaysContainer />
          <PopularStaysForm />
        </div>
        <WeeklyUpdatesContainer
          newsletterSectionBackgrou="/subscribe-section-background@2x.png"
          logo="/logo2.svg"
          socialIcons="/social-icons2.svg"
        />
      </div>
      {isMatterhornPopupOpen && (
        <PortalPopup
          overlayColor="rgba(0, 0, 0, 0.3)"
          placement="Centered"
          onOutsideClick={closeMatterhornPopup}
        >
          <MatterhornPopup onClose={closeMatterhornPopup} />
        </PortalPopup>
      )}
      {isMatterhornPopup1Open && (
        <PortalPopup
          overlayColor="rgba(0, 0, 0, 0.3)"
          placement="Centered"
          onOutsideClick={closeMatterhornPopup1}
        >
          <MatterhornPopup onClose={closeMatterhornPopup1} />
        </PortalPopup>
      )}
      {isMatterhornPopup2Open && (
        <PortalPopup
          overlayColor="rgba(0, 0, 0, 0.3)"
          placement="Centered"
          onOutsideClick={closeMatterhornPopup2}
        >
          <MatterhornPopup onClose={closeMatterhornPopup2} />
        </PortalPopup>
      )}
      {isMatterhornPopup3Open && (
        <PortalPopup
          overlayColor="rgba(0, 0, 0, 0.3)"
          placement="Centered"
          onOutsideClick={closeMatterhornPopup3}
        >
          <MatterhornPopup onClose={closeMatterhornPopup3} />
        </PortalPopup>
      )}
    </>
  );
};

export default Homepage;
