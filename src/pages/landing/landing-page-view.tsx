import React from 'react';
import Navbar from './navbar';
import Footer from './footer';
import LandingContent from './landing-content';

const LandingPageView: React.FC = () => {
    return (
        <div>
            <Navbar />
            <LandingContent />
            <Footer />
        </div>
    );
};

export default LandingPageView;