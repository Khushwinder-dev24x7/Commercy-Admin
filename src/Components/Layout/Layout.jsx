import Header from "./Header"
import Sidebar from "./Sidebar"
import { Outlet } from "react-router-dom"

function Layout() {
  return (
        <div className="app-main-wrapper">
            <div className="amw_inner">

                {/* Sidebar */}
                <div className="app-left-menu-custom">
                    <Sidebar/>
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