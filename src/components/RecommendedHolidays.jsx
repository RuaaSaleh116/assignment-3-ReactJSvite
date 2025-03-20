import styles from "./styles/RecommendedHolidays.module.css";

const holidays = [
  { image: "/bali.png", location: "Bali", duration: "4D3N", price: "899" },
  { image: "/swis.png", location: "Swiss", duration: "6D5N", price: "900" },
  { image: "/bor.png", location: "Boracay", duration: "5D4N", price: "699" },
  { image: "/pal.png", location: "Palawan", duration: "4D3N", price: "789" }
];

const RecommendedHolidays = () => {
  return (
    <section className={styles.holidaysSection}>
      <div className={styles.header}>
        <h2 className={styles.title}>Recommended Holidays</h2>
        <a href="#" className={styles.viewAll}>View all holidays →</a>
      </div>
      <div className={styles.cardContainer}>
        {holidays.map((holiday, index) => (
          <div key={index} className={styles.card}>
            <img src={holiday.image} alt={holiday.location} className={styles.image} />
            <div className={styles.cardDetails}>
              <h3 className={styles.location}>{holiday.location}</h3>
              <span className={styles.duration}>{holiday.duration}</span>
              <span className={styles.price}>${holiday.price}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecommendedHolidays;
