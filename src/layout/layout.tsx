import React from "react";
import { useLocation } from "react-router";
import { Outlet } from "react-router";
import Splash from "../components/Splash";
import PageSplash from "../components/PageSplash";
import Footer from "../components/Footer";

interface LayoutProps { }

const pageTitles: Record<string, string> = {
  '/theexperience': "The Experience",
  '/whyseaburial': "Why A Sea Burial",
  '/calendar': "Calendar",
  '/prices': "Prices",
  '/policies': "Policies",
}
const Layout: React.FC<LayoutProps> = () => {
  const location = useLocation();
  console.log(location.pathname)
  return (
    <div className="w-full">
      {location.pathname === '/' ? <Splash /> : <PageSplash pageTitle={pageTitles[location.pathname]} />}
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
