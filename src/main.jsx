import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import Contact from "./components/contact/Contact.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home/Home.jsx";
import AboutUs from "./components/aboutUs/AboutUs.jsx";
import Blogs from "./components/blogs/Blogs.jsx";
import WebDesignPage from "./components/servicesPages/WebDesignPage/WebDesignPage.jsx";
import SocialMediaMarketing from "./components/servicesPages/SocialMediaMarketingPage/SocialMediaMarketing.jsx";
import ContentWritting from "./components/servicesPages/ContentWritting/ContentWritting.jsx";
import SEOservice from "./components/servicesPages/SEOpage/SEOservice.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/aboutus",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "/web-design",
        element: <WebDesignPage></WebDesignPage>,
      },
      {
        path: "/social-marketing",
        element: <SocialMediaMarketing></SocialMediaMarketing>,
      },
      {
        path: "/content-writing",
        element: <ContentWritting></ContentWritting>,
      },
      {
        path: "/seo",
        element: <SEOservice></SEOservice>,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
