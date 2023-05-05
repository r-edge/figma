import type { NextPage } from "next";
import { useState, useCallback } from "react";
import {
  FormControlLabel,
  Radio,
  Autocomplete,
  TextField,
  Icon,
} from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { useRouter } from "next/router";
import styles from "./explore-container.module.css";
const ExploreContainer: NextPage = () => {
  const [
    selectOutlinedDateTimePickerValue,
    setSelectOutlinedDateTimePickerValue,
  ] = useState<string | null>(null);
  const router = useRouter();

  const onSearchTextClick = useCallback(() => {
    router.push("/results-page");
  }, [router]);

  const onHotelsTextClick = useCallback(() => {
    router.push("/");
  }, [router]);

  const onSearchFlightsButtonClick = useCallback(() => {
    router.push("/results-page");
  }, [router]);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div className={styles.heroSection}>
        <header className={styles.topHeader}>
          <div className={styles.topContainer}>
            <button className={styles.fickleflightLogo}>
              <img className={styles.symbolsIcon} alt="" src="/webscreen.svg" />
            </button>
            <div className={styles.navigationRight}>
              <div className={styles.navigationMenu}>
                <button className={styles.explore}>Explore</button>
                <div className={styles.search} onClick={onSearchTextClick}>
                  Search
                </div>
                <div className={styles.search} onClick={onHotelsTextClick}>
                  Hotels
                </div>
                <button className={styles.offers}>Offers</button>
              </div>
              <div className={styles.accountSection}>
                <img
                  className={styles.hamburgerMenuIcon}
                  alt=""
                  src="/notification.svg"
                />
                <img
                  className={styles.notificationBellIcon}
                  alt=""
                  src="/notification1.svg"
                />
                <img
                  className={styles.profilePictureIcon}
                  alt=""
                  src="/top_avatar@2x.png"
                />
              </div>
            </div>
          </div>
        </header>
        <div className={styles.searchSection}>
          <div className={styles.bannerGradient} />
          <img
            className={styles.bannerBackground}
            alt=""
            src="/banner--background@2x.png"
          />
          <div className={styles.searchContainer}>
            <div className={styles.title}>
              <div
                className={styles.letsExplore}
              >{`Let’s explore & travel the world`}</div>
              <div className={styles.findTheBest}>
                Find the best destinations and the most popular stays!
              </div>
            </div>
            <div className={styles.searchForm}>
              <div className={styles.formTitleGroup}>
                <b className={styles.searchFlights}>Search flights</b>
                <div className={styles.flightOptions}>
                  <div className={styles.flightType}>
                    <FormControlLabel
                      className={styles.radio}
                      label="Return"
                      labelPlacement="end"
                      control={<Radio size="medium" />}
                    />
                    <FormControlLabel
                      className={styles.radio1}
                      label="One-way"
                      labelPlacement="end"
                      control={<Radio color="primary" checked size="medium" />}
                    />
                  </div>
                </div>
              </div>
              <div className={styles.formInputsRow}>
                <div className={styles.inputsRow}>
                  <Autocomplete
                    className={styles.departureField}
                    disablePortal
                    options={[
                      "Singapore (SIN)",
                      "Sydney (SYD)",
                      "Siem Reap (REP)",
                      "Shanghai (PVG)",
                      "Sanya (SYX)",
                    ]}
                    renderInput={(params: any) => (
                      <TextField
                        {...params}
                        color="primary"
                        label="Departure"
                        variant="outlined"
                        placeholder=""
                        helperText=""
                      />
                    )}
                    defaultValue="Singapore -  Changi (SIN)"
                    size="medium"
                  />
                  <div className={styles.arrivalField}>
                    <div className={styles.input}>
                      <div className={styles.labelContainer}>
                        <div className={styles.arrival}>Arrival</div>
                      </div>
                      <div className={styles.active}>
                        <div className={styles.muiautocompletetag}>
                          <div className={styles.chip}>
                            <div className={styles.container}>
                              <div className={styles.avatar}>
                                <div className={styles.op}>F</div>
                              </div>
                              <div className={styles.typography}>
                                <div className={styles.chip1}>Chip</div>
                              </div>
                              <img
                                className={styles.notificationBellIcon}
                                alt=""
                                src="/cancel.svg"
                              />
                            </div>
                          </div>
                          <div className={styles.chip}>
                            <div className={styles.container}>
                              <div className={styles.avatar}>
                                <div className={styles.op}>F</div>
                              </div>
                              <div className={styles.typography}>
                                <div className={styles.chip1}>Chip</div>
                              </div>
                              <img
                                className={styles.notificationBellIcon}
                                alt=""
                                src="/cancel.svg"
                              />
                            </div>
                          </div>
                        </div>
                        <div className={styles.losAngelesLa}>
                          Los Angeles (LA)
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.departureField}>
                    <DatePicker
                      label="Date"
                      value={selectOutlinedDateTimePickerValue}
                      onChange={(newValue: any) => {
                        setSelectOutlinedDateTimePickerValue(newValue);
                      }}
                      renderInput={(params: any) => (
                        <TextField
                          {...params}
                          color="primary"
                          variant="outlined"
                          size="medium"
                          renderInput={{ placeholder: "01/05/2022" }}
                          helperText=""
                          fullWidth
                        />
                      )}
                    />
                  </div>
                </div>
                <div className={styles.buttonGroup}>
                  <div
                    className={styles.searchFlightsButton}
                    onClick={onSearchFlightsButtonClick}
                  >
                    <div className={styles.button}>Search flights</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LocalizationProvider>
  );
};

export default ExploreContainer;
