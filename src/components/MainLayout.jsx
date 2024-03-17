import { Outlet } from "react-router-dom"
import Navs from "./Navs.jsx"
import AppTitle from "./AppTitle.jsx"


const MainLayout = () => {
  return (
    <div>
        <AppTitle />
        <Navs />

        <Outlet />
    </div>
  )
}

export default MainLayout
