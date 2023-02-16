import React from "react"
import Header from "../component/header"
import NaviguationBar from "../component/navbar"
import { Outlet } from "react-router-dom"
function Home() {
    return (
        <div>
            <Header />
            <NaviguationBar />
            <Outlet />
        </div>
    )
}

export default Home