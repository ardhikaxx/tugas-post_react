import React from 'react';
import HomePageView from '../home/home-page-view';
import AboutPageView from '../about/about-page-view';
import ProductsPageView from '../products/products-page-view';
import CallToActionPageView from '../call-to-action/call-to-action-page-view';
import ContactPageView from '../contact/contact-page-view';

const LandingContent: React.FC = () => {
    return (
        <div>
            <section id="home">
                <HomePageView />
            </section>
            <section id="about">
                <AboutPageView />
            </section>
            <section id="products">
                <ProductsPageView />
            </section>
            <section id="call-to-action">
                <CallToActionPageView />
            </section>
            <section id="contact">
                <ContactPageView />
            </section>
        </div>
    );
};

export default LandingContent;