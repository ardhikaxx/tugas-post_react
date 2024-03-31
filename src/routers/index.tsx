import { createBrowserRouter } from "react-router-dom";
import HomePageView from "../pages/home/home-page-view";
import React from "react";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePageView/>,
    },

]);

export {
    router
}