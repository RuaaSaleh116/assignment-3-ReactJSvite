import styles from "./styles/Footer.module.css";
import logo from "/FickleFlightWhite.png"
import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.about}>
          <img src={logo} alt="logo" width="180" className={styles.logo} />   
          
          <p>
            Fickle Flight is your one-stop travel portal. We offer hassle-free flight and hotel bookings. 
            We also have all your flight needs in our online shop.
          </p>
          <div className={styles.socialIcons}>
            <Facebook size={20} className={styles.icon} />
            <Instagram size={20} className={styles.icon} />
            <Twitter size={20} className={styles.icon} />
          </div>
        </div>

        <div className={styles.links}>
          <div className={styles.column}>
            <h3>Company</h3>
            <a href="#">About Us</a>
            <a href="#">News</a>
            <a href="#">Careers</a>
            <a href="#">How we work</a>
          </div>
          <div className={styles.column}>
            <h3>Support</h3>
            <a href="#">Account</a>
            <a href="#">Support Center</a>
            <a href="#">FAQ</a>
            <a href="#">Accessibility</a>
          </div>
          <div className={styles.column}>
            <h3>More</h3>
            <a href="#">Covid Advisory</a>
            <a href="#">Airline Fees</a>
            <a href="#">Tips</a>
            <a href="#">Quarantine Rules</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
