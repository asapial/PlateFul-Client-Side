import React, { useState } from "react";
import DashBoardLink from "../Components/common/DashBoardLink";
import Navbar from "../Components/common/NavBar";
import Footer from "../Components/common/Footer";
import { Outlet } from "react-router";
import DashBoardLinkDrawer from "../Components/common/DashBoardLinkDrawer";
import { FaX } from "react-icons/fa6";
import { RiMenuFold4Fill } from "react-icons/ri";

const DashboardLayout = () => {
  const [open, setOpen] = useState(true);

  return (
    <div className="max-h-screen flex flex-col relative">
      {open ? (
        <button
          onClick={() => setOpen(!open)}
          className=" top-7  left-5 hidden md:block z-50 fixed"
        >
          <FaX></FaX>
        </button>
      ) : (
        <button
          onClick={() => setOpen(!open)}
          className="  top-7  left-5 hidden md:block  z-50 fixed"
        >
          <RiMenuFold4Fill />
        </button>
      )}

            <div className="navBarContainer flex justify-center shadow-sm mb-18">
                <Navbar></Navbar>
            </div>
      <div className="flex flex-1">
        {/* Sidebar */}
        {open && (
          <aside className="w-1/5 min-w-[300px] h-screen hidden md:block">
            <div className=" h-full ">
              <DashBoardLink />
            </div>
            {/* <DashBoardLinkDrawer></DashBoardLinkDrawer> */}
          </aside>
        )}

        {/* Main Content */}
        <main className="w-full flex flex-col h-screen">
          <div className="flex-1 overflow-y-auto ">
            <Outlet />
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default DashboardLayout;
