import type { NextPage } from "next";
import BookingOptionsCard from "./booking-options-card";
import styles from "./filter-container.module.css";
const FilterContainer: NextPage = () => {
  return (
    <div className={styles.searchFilters}>
      <div className={styles.resultsSummary}>
        <div className={styles.resultsParent}>
          <div className={styles.results}>10 out of 177 Results</div>
          <img className={styles.frameChild} alt="" src="/vector-2.svg" />
        </div>
      </div>
      <BookingOptionsCard stopOptionsText="Stops" />
      <BookingOptionsCard
        stopOptionsText="Booking Options"
        propWidth="221px"
        propWidth1="189.03px"
      />
      <BookingOptionsCard
        stopOptionsText="Flight Experience"
        propWidth="310.8px"
        propWidth1="198.04px"
      />
      <img className={styles.frameChild} alt="" src="/vector-2.svg" />
      <BookingOptionsCard
        stopOptionsText="Airlines"
        propWidth="181px"
        propWidth1="87.77px"
      />
    </div>
  );
};

export default FilterContainer;
