import React from "react"
import HeaderInnerOne from "../../Components/Header/HeaderInnerOne"
import ContentWiki from "./Components/Content/Content";
import NewsLetter from "../../Components/NewsLetter/NewsLetter";
import Footer from "../../Components/Footer/Footer";

function WikiPage() {
    return(
        <>
            <HeaderInnerOne/>
            <ContentWiki/>
            <NewsLetter/>
            <Footer/>
        </>
    )
}

export default WikiPage
