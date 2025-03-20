import styles from "./styles/DestinationCard.module.css";

const destinations = [
  { image: "/paris.png" },
  { image: "/Greece.png" },
  { image: "/Norway.png" },
  { image: "/Tuscany.png" }
];

const DestinationCard = () => {
  return (
    <section className={styles.destinationSection}>
      <div className={styles.header}>
        <h2 className={styles.title}>Most Popular Destinations</h2>
        <a href="#" className={styles.viewAll}>View all destinations →</a>
      </div>

      <div className={styles.cardContainer}>
        {destinations.map((dest, index) => (
          <div key={index} className={styles.card} style={{ backgroundImage: `url(${dest.image})` }}>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DestinationCard;
