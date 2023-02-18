import React from 'react';
import Banar from '../Banar/Banar';
import Experienced from '../Experienced/Experienced';
import FresherJob from '../FresherJob/FresherJob';

const Home = () => {
    return (
        <div>
           <Banar></Banar>
           <FresherJob></FresherJob>
           <Experienced></Experienced>
        </div>
    );
};

export default Home;