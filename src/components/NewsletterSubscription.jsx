import { useState } from "react";
import styles from "./styles/NewletterSubscription.module.css";

const NewsletterSubscription = ({ leftImage, rightImage }) => {
  const [formData, setFormData] = useState({ name: "", email: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Subscribed successfully!\nName: ${formData.name}\nEmail: ${formData.email}`);
  };

  return (
    <section className={styles.newsletterSection}>
      <div className={styles.container}>

        <img 
        src="/cloudsForMobile.png" 
        alt="Mobile Graphic" 
        className={styles.mobileImage} 
        />
      
        <h3 className={styles.subTitle}>SUBSCRIBE TO OUR NEWSLETTER</h3>
        <h2 className={styles.title}>Get weekly updates</h2>
        <form className={styles.form} onSubmit={handleSubmit}>
          <p className={styles.description}>Fill in your details to join the party!</p>
          <input
            type="text"
            name="name"
            placeholder="Your name"
            value={formData.name}
            onChange={handleChange}
            className={styles.input}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email address"
            value={formData.email}
            onChange={handleChange}
            className={styles.input}
            required
          />
          <button type="submit" className={styles.submitButton}>SUBMIT</button>
        </form>

       
      </div>
    </section>
  );
};

export default NewsletterSubscription;
