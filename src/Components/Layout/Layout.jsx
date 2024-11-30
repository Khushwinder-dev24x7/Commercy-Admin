import Header from "./Header"
import Sidebar from "./Sidebar"
import { Outlet } from "react-router-dom"

function Layout() {
  return (
    <div className="main">
    <Sidebar/>
    <Header/>
    <div className="text-center"><Outlet/></div>
    </div>
  )
}

export default Layout