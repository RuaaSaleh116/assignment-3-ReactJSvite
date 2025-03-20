import styles from "./styles/PopularStays.module.css";
import { Star, ArrowRightCircle } from "lucide-react";


const stays = [
  {
    image: "/1.png",
    type: "Entire bungalow",
    name: "Matterhorn Suites",
    price: "$575/night",
    rating: 4.9,
    reviews: 60,
  },
  {
    image: "/2.png",
    type: "2-Story beachfront suite",
    name: "Discovery Shores",
    price: "$360/night",
    rating: 4.8,
    reviews: 116,
  },
  {
    image: "/3.png",
    type: "Single deluxe hut",
    name: "Arctic Hut",
    price: "$420/night",
    rating: 4.7,
    reviews: 78,
  },
  {
    image: "/4.png",
    type: "Deluxe King Room",
    name: "Lake Louise Inn",
    price: "$244/night",
    rating: 4.6,
    reviews: 63,
  }
];

const PopularStays = () => {
  return (
    <section className={styles.staysSection}>
      <div className={styles.header}>
        <h2 className={styles.title}>Popular Stays</h2>
        <a href="#" className={styles.viewAll}>View all stays →</a>
      </div>
      <div className={styles.cardContainer}>
        {stays.map((stay, index) => (
          <div key={index} className={styles.card}>
            <img src={stay.image} alt={stay.name} className={styles.image} />
            <div className={styles.cardDetails}>
              <span className={styles.type}>{stay.type}</span>
              <h3 className={styles.name}>{stay.name}</h3>
              <p className={styles.price}>{stay.price}</p>
              <div className={styles.rating}>
                <Star size={16} color="#FFD700" />
                <span>{stay.rating}</span>
                <a href="#" className={styles.reviews}>({stay.reviews} reviews)</a>
              </div>
              <button className={styles.detailsButton}>MORE DETAILS</button>
              <ArrowRightCircle size={22} className={styles.arrowIcon} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularStays;
