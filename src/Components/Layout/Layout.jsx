import Header from "./Header"
import Sidebar from "./Sidebar"
import { Outlet } from "react-router-dom"
import { useState } from "react";

function Layout() {

const [isSlideActive, setIsSlideActive] = useState(false);
const toggleSlideClass = () => {
    setIsSlideActive(!isSlideActive);
  };

  return (
        <div className="app-main-wrapper">
             <div className={`amw_inner ${isSlideActive ? "app-left-menu-slide" : ""}`}>

                {/* Sidebar */}
                <div className="app-left-menu-custom">                    
                    <Sidebar toggleSlideClass={toggleSlideClass}/>
                </div>

                {/* Right Side Content */}
                <div className="app-main-content d-flex flex-column">

                    {/* Header */}
                    <Header/>

                    {/* Main Content */}
                    <Outlet/>
                </div>
            </div>
        </div>
  )
}

export default Layout