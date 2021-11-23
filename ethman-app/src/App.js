import React from "react";
import Context from "./context";
import Header from "./Components/Header/Header";
import Products from "./Components/Products/Products";
import NewsLetter from "./Components/NewsLetter/NewsLetter";

function App() {
    return (
        <Context.Provider value={{}}>
            <div className="wrapper">
                <Header/>
                <Products/>
                <NewsLetter/>
            </div>
        </Context.Provider>
    );
}

export default App;
