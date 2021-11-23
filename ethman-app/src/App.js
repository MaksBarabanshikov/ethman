import React from "react";
import Context from "./context";
import Header from "./Components/Header/Header";
import Products from "./Components/Products/Products";
import NewsLetter from "./Components/NewsLetter/NewsLetter";
import Footer from "./Components/Footer/Footer"
import Wiki from "./Pages/Wiki/Wiki";

function App() {
    return (
        <Context.Provider value={{}}>
            <div className="wrapper">
                <Header/>
                <Products/>
                <NewsLetter/>
                <Footer/>
            </div>
        </Context.Provider>
    );
}

export default App;
