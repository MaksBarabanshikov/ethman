import React from "react"
import "./Header.css";
import HeaderInnerOne from "./HeaderInnerOne";
import HeaderInnerTwo from "./HeaderInnerTwo";
import {useLocation} from "react-router-dom";

function Header() {
    const location = useLocation();

    const homePage = location.pathname
        if (homePage === '/') {
          return(
              <header className="header" >
                  <HeaderInnerOne />
                  <HeaderInnerTwo/>
              </header>
          )
        } else {
            return(
                    <header className="header">
                        <HeaderInnerOne/>
                    </header>
                )
        }
}

export default Header