import React from "react";
import Context from "./context";
import WikiPage from "./Pages/Wiki/Wiki";
import './Components/Header/HeaderInnerOne.css'
import {Route, Routes} from "react-router-dom";
import HomePage from "./Pages/Home/Home";
import Layout from "./Layout/layout";
import HeaderInnerTwo from "./Components/Header/HeaderInnerTwo";
import CataloguePage from "./Pages/Catalogue/CataloguePage";

function App() {
    return (
        <Context.Provider value={{}}>
            <div className="wrapper">
                <Routes>
                    <Route path="/" element={<Layout/>}>
                        <Route index element={<HomePage children={<HeaderInnerTwo/>}/>}/>
                        <Route path="wiki" element={<WikiPage/>}/>
                        <Route path="catalogue" element={<CataloguePage/>}/>
                    </Route>
                </Routes>
            </div>
        </Context.Provider>
    );
}

export default App;
