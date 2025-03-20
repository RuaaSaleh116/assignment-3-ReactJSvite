
import styles from "./styles/Navbar.module.css";
import { Bell, Menu, X } from "lucide-react";
import logo from "/FickleFlight.png"

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
      <img src={logo} alt="logo" width="180"/>
      </div>

      <ul className={styles.navLinks}>
        <li><a href="#">Explore</a></li>
        <li><a href="#">Search</a></li>
        <li><a href="#">Hotels</a></li>
        <li><a href="#">Offers</a></li>
      </ul>

      <div className={styles.icons}>
        <button className={styles.bellButton} aria-label="Notifications">
          <Bell size={20} className={styles.bellIcon} />
        </button>
        <img src="https://randomuser.me/api/portraits/men/1.jpg" alt="User profile" className={styles.avatar} />
      </div>
    </nav>
  );
};

export default Navbar;