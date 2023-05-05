import type { NextPage } from "next";
import { useMemo } from "react";
import { FormControlLabel, Checkbox } from "@mui/material";
import CSS, { Property } from "csstype";
import styles from "./booking-options-card.module.css";

type BookingOptionsCardType = {
  stopOptionsText?: string;

  /** Style props */
  propWidth?: Property.Width;
  propWidth1?: Property.Width;
};

const BookingOptionsCard: NextPage<BookingOptionsCardType> = ({
  stopOptionsText,
  propWidth,
  propWidth1,
}) => {
  const stopsStyle: CSS.Properties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const resultsStyle: CSS.Properties = useMemo(() => {
    return {
      width: propWidth1,
    };
  }, [propWidth1]);

  return (
    <div className={styles.stops} style={stopsStyle}>
      <b className={styles.results} style={resultsStyle}>
        {stopOptionsText}
      </b>
      <FormControlLabel
        className={styles.component1formcheckbox}
        label="1 Stop"
        labelPlacement="end"
        control={<Checkbox size="medium" />}
      />
      <FormControlLabel
        className={styles.component1formcheckbox1}
        label="2 Stops"
        labelPlacement="end"
        control={<Checkbox size="medium" />}
      />
    </div>
  );
};

export default BookingOptionsCard;
