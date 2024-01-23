import React from "react";
import Nav from "../components/Nav";
import { Outlet } from "react-router";

interface LayoutProps {}

const Layout: React.FC<LayoutProps> = ({}) => {
  return (
    <div className="w-full">
      <Nav />
      <div className="w-full">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
