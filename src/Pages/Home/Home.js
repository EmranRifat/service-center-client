import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Feature from '../Feature/Feature';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
           <Banner/>
           <About/>
           <Services/>
           <Feature/>
        </div>
    );
};

export default Home;