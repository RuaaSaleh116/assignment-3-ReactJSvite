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
          <div className={styles.radioGroup}>
            <label>
              <input 
                type="radio" 
                name="tripType" 
                value="return"
                checked={tripType === "return"}
                onChange={() => setTripType("return")}
              /> Return
            </label>
            <label>
              <input 
                type="radio" 
                name="tripType" 
                value="one-way"
                checked={tripType === "one-way"}
                onChange={() => setTripType("one-way")}
              /> One-way
            </label>
          </div>

          <div className={styles.inputGroup}>
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
              <div className={styles.dateInput}>
                <input type="date" />
              </div>
            </div>
          </div>

          <button className={styles.searchButton}>SEARCH FLIGHTS</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
