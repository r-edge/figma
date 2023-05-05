import type { NextPage } from "next";
import { useState, useCallback } from "react";
import MatterhornPopup from "./matterhorn-popup";
import PortalPopup from "./portal-popup";
import ResultsContainer from "./results-container";
import ResultsWrapper from "./results-wrapper";
import styles from "./hotel-results-form.module.css";
const HotelResultsForm: NextPage = () => {
  const [isMatterhornPopupOpen, setMatterhornPopupOpen] = useState(false);

  const openMatterhornPopup = useCallback(() => {
    setMatterhornPopupOpen(true);
  }, []);

  const closeMatterhornPopup = useCallback(() => {
    setMatterhornPopupOpen(false);
  }, []);

  return (
    <>
      <div className={styles.hotelResults}>
        <div className={styles.resultsSumamry}>
          <div className={styles.results}>200+ results</div>
          <div className={styles.filters}>
            <img className={styles.filtersIcon} alt="" src="/filters.svg" />
            <div className={styles.filters1}>Filters</div>
          </div>
        </div>
        <div className={styles.resultsSection}>
          <div className={styles.resultCardsCol}>
            <ResultsContainer
              roomSize="/unsplashs6ch7n3eoqy@2x.png"
              roomType="1 king bed standard"
              hotelName="Holiday Inn Expre..."
              roomDimensions="/vector.svg"
              roomImageUrl="/video.svg"
            />
            <ResultsWrapper
              resultsImage="/unsplashs6ch7n3eoqy1@2x.png"
              freehandLosAngeles="Freehand Los Angeles"
              bedInQuad="Bed in Quad"
              reviews="(1,941 reviews)"
              prop="4.2"
              vector="/vector1.svg"
              s198="$S 198"
            />
            <ResultsWrapper
              resultsImage="/unsplashs6ch7n3eoqy2@2x.png"
              freehandLosAngeles="The Westin Bonavent..."
              bedInQuad="1 King, City view"
              reviews="(1,002 reviews)"
              prop="4.1"
              vector="/vector2.svg"
              s198="$S 289"
            />
            <ResultsContainer
              roomSize="/unsplashs6ch7n3eoqy3@2x.png"
              roomType="Deluxe King"
              hotelName="The Ritz-Carlton, L..."
              roomDimensions="/vector3.svg"
              roomImageUrl="/video1.svg"
              propCursor="pointer"
              openMatterhornPopup={openMatterhornPopup}
            />
            <iframe
              className={styles.map}
              src={`https://www.openstreetmap.org/export/embed.html?bbox=-118.56033325195314%2C33.837912419023645%2C-117.98355102539064%2C34.25948651450623&amp;layer=mapnik`}
            />
          </div>
          <iframe
            className={styles.map1}
            src={`https://www.openstreetmap.org/export/embed.html?bbox=-118.56033325195314%2C33.837912419023645%2C-117.98355102539064%2C34.25948651450623&amp;layer=mapnik`}
          />
        </div>
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

export default HotelResultsForm;
