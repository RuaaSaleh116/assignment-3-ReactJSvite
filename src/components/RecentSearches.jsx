import { useState } from "react";
import styles from "./styles/RecentSearches.module.css";
import { Plane } from "lucide-react"; 

const RecentSearches = () => {
  const [recentTrips] = useState([
    { from: "SIN", to: "LAX", date: "7 Sep 2021" },
    { from: "MY", to: "DUB", date: "9 Sep 2021" }
  ]);

  const services = [
    { name: "Hotel", image: "/Bed.png", color: "#FF6584" },
    { name: "Attractions", image: "/Ticket.png", color: "#FFA54F" },
    { name: "Eats", image: "/cutlery.png", color: "#5DD167" },
    { name: "Commute", image: "/train.png", color: "#FFC107" },
    { name: "Taxi", image: "/Taxi.png", color: "#49A9FE" },
    { name: "Movies", image: "/Movie.png", color: "#8DD600" }
  ];
  

  return (
    <section className={styles.recentSearches}>
      <h2 className={styles.title}>RECENT SEARCHES</h2>

      <div className={styles.tripsContainer}>
        {recentTrips.map((trip, index) => (
          <div key={index} className={styles.tripCard}>
            <span className={styles.airportCode}>{trip.from}</span>
            <Plane size={20} className={styles.planeIcon} />
            <span className={styles.airportCode}>{trip.to}</span>
            <p className={styles.departure}>
              <strong>Depart On:</strong> {trip.date}
            </p>
          </div>
        ))}
      </div>

      <div className={styles.prepareSection}>
      <h3 className={styles.title}>PREPARE FOR YOUR TRIP</h3>
      <div className={styles.servicesContainer}>
        {services.map((service, index) => (
          <div key={index} className={styles.serviceItem}>
            <div className={styles.iconWrapper} style={{ backgroundColor: service.color }}>
              <img src={service.image} alt={service.name} className={styles.serviceIcon} />
            </div>
            <span className={styles.serviceName}>{service.name}</span>
          </div>
        ))}
      </div>
    </div>

    </section>
  );
};

export default RecentSearches;
