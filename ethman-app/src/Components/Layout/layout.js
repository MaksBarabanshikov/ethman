import React from "react"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import {Outlet} from "react-router-dom";
import NewsLetter from "../NewsLetter/NewsLetter";


    function Layout() {
    return (
        <>
            <Header/>

            <Outlet/>

            <NewsLetter/>
            <Footer/>
        </>

    )
}

export default Layout
