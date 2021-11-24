import React from "react"
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import {Outlet} from "react-router-dom";
import NewsLetter from "../Components/NewsLetter/NewsLetter";


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
