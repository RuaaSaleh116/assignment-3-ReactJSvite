import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import DestinationCard from './components/DestinationCard';
import RecentSearches from './components/RecentSearches';
import RecommendedHolidays from './components/RecommendedHolidays';
import PopularStays from './components/PopularStays';
import NewsletterSubscription from './components/NewsletterSubscription';
import Footer from './components/Footer';

const App = () => {
  
  return (
    <div>
      <Navbar/>
      <Header backgroundImage="/bg.png" />
      <RecentSearches/>
      <DestinationCard/>
      <RecommendedHolidays/>
      <PopularStays/>
      <NewsletterSubscription 
        leftImage="/left-clouds.png" 
        rightImage="/right-clouds.png" 
      />
      <Footer/>
  
    </div>
  );
};

export default App;
