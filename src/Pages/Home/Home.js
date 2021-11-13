import React from 'react';
import Review from '../Dashboards/Review';
import Reviews from '../Dashboards/Reviews';

import Services from '../Service/Services';
import Footer from '../Shared/Footer/Footer';
import About from './About';
import Banner from './Banner/Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <About></About>
            <Review></Review>
            <Footer></Footer>
        </div>
    );
};

export default Home;