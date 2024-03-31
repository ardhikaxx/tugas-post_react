import { Navigate, createBrowserRouter } from "react-router-dom";
import LandingPageView from "../pages/landing/landing-page-view"; // Mengimpor LandingPageView
import AboutPageView from "../pages/about/about-page-view";
import ProductsPageView from "../pages/products/products-page-view";
import CallToActionPageView from "../pages/call-to-action/call-to-action-page-view";
import ContactPageView from "../pages/contact/contact-us";
import React from "react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPageView />,
  },
  {
    path: "/about",
    element: <AboutPageView />,
  },
  {
    path: "/products",
    element: <ProductsPageView />,
  },
  {
    path: "/call-to-action",
    element: <CallToActionPageView />,
  },
  {
    path: "/contact",
    element: <ContactPageView />,
  },
]);

export { router };
