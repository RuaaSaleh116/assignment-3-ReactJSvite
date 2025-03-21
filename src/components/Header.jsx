import { useState } from "react";
import styles from "./styles/Header.module.css";

const Header = ({ backgroundImage }) => {
  const [tripType, setTripType] = useState("one-way");

  return (
    <header className={styles.header} style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className={styles.overlay}>
        <h1 className={styles.title}>Let's explore & travel the world</h1>
        <p className={styles.subtitle}>
          Find the best destinations and the most popular stays!
        </p>

        <div className={styles.searchBox}>
          <div className={styles.radioContainer}>
            <label className={styles.radioLabel}>
              <input 
                type="radio" 
                name="tripType" 
                value="return"
                checked={tripType === "return"}
                onChange={() => setTripType("return")}
              /> Return
            </label>
            <label className={styles.radioLabel}>
              <input 
                type="radio" 
                name="tripType" 
                value="one-way"
                checked={tripType === "one-way"}
                onChange={() => setTripType("one-way")}
              /> One-way
            </label>
          </div>

          <h3 className={styles.searchTitle}>SEARCH FLIGHTS</h3>

          <div className={styles.inputContainer}>
            <div className={styles.inputField}>
              <label>Departure</label>
              <input type="text" placeholder="Singapore (SIN)" />
            </div>

            <div className={styles.inputField}>
              <label>Arrival</label>
              <input type="text" placeholder="Los Angeles (LA)" />
            </div>

            <div className={styles.inputField}>
              <label>Date</label>
              <input type="date" />
            </div>

            <button className={styles.searchButton}>SEARCH FLIGHTS</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
