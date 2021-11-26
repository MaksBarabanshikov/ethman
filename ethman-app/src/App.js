import React from "react";
import Context from "./context";
import WikiPage from "./Pages/Wiki/Wiki";
import './Components/Header/HeaderInnerOne.css'
import {Route, Routes} from "react-router-dom";
import HomePage from "./Pages/Home/Home";
import Layout from "./Layout/layout";
import CataloguePage from "./Pages/Catalogue/CataloguePage";
import WalletPage from "./Pages/Wallet/WalletPage";
import ReadComicPage from "./Pages/ReadComic/ReadComicPage";

function App() {
    return (
        <Context.Provider value={{}}>
            <div className="wrapper">
                <Routes>
                    <Route path="/" element={<Layout/>}>
                        <Route index element={<HomePage/>}/>}/>
                        <Route path="wiki" element={<WikiPage/>}/>
                        <Route path="catalogue" element={<CataloguePage/>}/>
                    </Route>
                    <Route path="/wallet" element={<WalletPage/>}/>
                    <Route path="/comic/:address" element={<ReadComicPage/>}/>
                </Routes>
            </div>
        </Context.Provider>
    );
}

export default App;
