import React, {useState} from "react";
import WikiPage from "./Pages/Wiki/Wiki";
import './Components/Header/HeaderInnerOne.css'
import {Route, Routes} from "react-router-dom";
import HomePage from "./Pages/Home/Home";
import Layout from "./Layout/layout";
import CataloguePage from "./Pages/Catalogue/CataloguePage";
import WalletPage from "./Pages/Wallet/WalletPage"
import ReadComicsPage from "./Pages/ReadComic/ReadComicPage";

function App() {
    const [selectedPages, setSelectedPages] = useState(null)
    function handlerGetPages(pages) {
        setSelectedPages(pages)
    }

    return (
        <div className="wrapper">
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<HomePage/>}/>
                    <Route path="wiki" element={<WikiPage/>}/>
                    <Route path="catalogue" element={<CataloguePage getPages={handlerGetPages}/>}/>

                </Route>
                <Route path="/wallet" element={<WalletPage/>}/>
                <Route path="/comic/:address" element={<ReadComicsPage selectedPage={selectedPages}/>}/>
            </Routes>
        </div>
    );
}

export default App;
