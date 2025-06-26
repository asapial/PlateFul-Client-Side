import React from "react";
import DashBoardLink from "../Components/common/DashBoardLink";
import Navbar from "../Components/common/NavBar";
import Footer from "../Components/common/Footer";
import { Outlet } from "react-router";
import DashBoardLinkDrawer from "../Components/common/DashBoardLinkDrawer";

const DashboardLayout = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="flex flex-col md:flex-row min-h-[calc(100vh-120px)]">
        {/* Sidebar */}
        <aside className="w-full md:w-1/4 lg:w-1/5 bg-transparent  shadow-none md:shadow-lg z-10">
          {/* <DashBoardLink /> */}
          <DashBoardLinkDrawer></DashBoardLinkDrawer>
        </aside>
        {/* Main Content */}
        <main className="w-full md:w-3/4 lg:w-4/5 flex flex-col">
          <div className="flex-1 p-2 md:p-6 overflow-y-auto">
            <Outlet />
          </div>
          <Footer />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;