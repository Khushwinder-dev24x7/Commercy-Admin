import { Outlet } from "react-router-dom"

function Customer() {
  return (
    <div>
    <h1>Customer Topbar</h1>
    <div className="content"><Outlet/></div>
</div>
  )
}

export default Customer