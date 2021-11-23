import React from "react";
import Header from "../../Components/Header/Header";
import Products from "../../Components/Products/Products";
import NewsLetter from "../../Components/NewsLetter/NewsLetter";
import Footer from "../../Components/Footer/Footer";

function HomePage() {
    return (
        <>
            <Header/>
            <Products/>
            <NewsLetter/>
            <Footer/>
        </>

    )
}

export default HomePage