import { Navigate, createBrowserRouter } from "react-router-dom";
import LandingPageView from "../pages/landing/landing-page-view"; // Mengimpor LandingPageView
import AboutPageView from "../pages/about/about-page-view";
import ProductsPageView from "../pages/products/products-page-view";
import CallToActionPageView from "../pages/call-to-action/call-to-action-page-view";
import ContactPageView from "../pages/contact/contact-page-view";
import React from 'react';

const router = createBrowserRouter([
    {
      path: "/", // Route untuk halaman utama
      element: <LandingPageView/>, // Menggunakan LandingPageView sebagai halaman utama
    },
    {
      path: "/about", // Route untuk halaman about
      element: <AboutPageView />,
    },
    {
      path: "/products", // Route untuk halaman products
      element: <ProductsPageView />,
    },
    {
      path: "/call-to-action", // Route untuk halaman call to action
      element: <CallToActionPageView />,
    },
    {
      path: "/contact", // Route untuk halaman contact
      element: <ContactPageView />,
    },
]);

export {
    router
}