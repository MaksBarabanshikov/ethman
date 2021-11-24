import React from "react";
import Context from "./context";
import WikiPage from "./Pages/Wiki/Wiki";
import './Components/Header/HeaderInnerOne.css'
import {Route, Routes} from "react-router-dom";
import HomePage from "./Pages/Home/Home";
import Layout from "./Layout/layout";
import HeaderInnerTwo from "./Components/Header/HeaderInnerTwo";
import CataloguePage from "./Pages/Catalogue/CataloguePage";
import ConnectMetaMask from "./Pages/Wallet/Component/ConnectMetaMask";
import WalletPage from "./Pages/Wallet/WalletPage";

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
                </Routes>
            </div>
        </Context.Provider>
    );
}

export default App;
