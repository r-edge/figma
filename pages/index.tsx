import type { NextPage } from "next";
import { useState, useCallback } from "react";
import MatterhornPopup from "../components/matterhorn-popup";
import PortalPopup from "../components/portal-popup";
import Header from "../components/header";
import LosAngelesContainer from "../components/los-angeles-container";
import HotelResultsForm from "../components/hotel-results-form";
import WeeklyUpdatesContainer from "../components/weekly-updates-container";
import styles from "./index.module.css";
const HotelsPage: NextPage = () => {
  const [isMatterhornPopupOpen, setMatterhornPopupOpen] = useState(false);

  const openMatterhornPopup = useCallback(() => {
    setMatterhornPopupOpen(true);
  }, []);

  const closeMatterhornPopup = useCallback(() => {
    setMatterhornPopupOpen(false);
  }, []);

  return (
    <>
      <div className={styles.hotelsPage}>
        <Header />
        <LosAngelesContainer />
        <HotelResultsForm />
        <WeeklyUpdatesContainer
          newsletterSectionBackgrou="/newsletter-section-background@2x.png"
          logo="/logo.svg"
          socialIcons="/social-icons.svg"
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
    </>
  );
};

export default HotelsPage;
