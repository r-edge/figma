import type { NextPage } from "next";
import { useMemo } from "react";
import CSS, { Property } from "csstype";
import styles from "./destination-container.module.css";

type DestinationContainerType = {
  parisImage?: string;
  paris?: string;
  prop?: string;

  /** Style props */
  propWidth?: Property.Width;
  propDisplay?: Property.Display;
  propWidth1?: Property.Width;
  propLeft?: Property.Left;
};

const DestinationContainer: NextPage<DestinationContainerType> = ({
  parisImage,
  paris,
  prop,
  propWidth,
  propDisplay,
  propWidth1,
  propLeft,
}) => {
  const detailsStyle: CSS.Properties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const divStyle: CSS.Properties = useMemo(() => {
    return {
      display: propDisplay,
      width: propWidth1,
    };
  }, [propDisplay, propWidth1]);

  const fromStyle: CSS.Properties = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  return (
    <button className={styles.col1}>
      <div className={styles.pariscard}>
        <img className={styles.parisimageIcon} alt="" src={parisImage} />
        <div className={styles.destinationDetails}>
          <b className={styles.paris}>{paris}</b>
          <div className={styles.details} style={detailsStyle}>
            <div className={styles.div} style={divStyle}>
              {prop}
            </div>
            <div className={styles.from} style={fromStyle}>
              from
            </div>
          </div>
        </div>
      </div>
    </button>
  );
};

export default DestinationContainer;
