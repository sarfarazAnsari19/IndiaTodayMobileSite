import React, { useState } from "react";
import {Link} from 'react-router-dom';

const arr = [
    {
        "name" : "Home",
        "url" : "fa-home",
        "to" :"/"
    },
    {
        "name" : "Talk To Astrologer",
        "url" : "fa-comments-alt",
        "to" :"/talkToAstrologer"
    },
    {
        "name" : "Ask Question",
        "url" : "fa-question",
        "to" :"/askQuestion"
    },
    {
        "name" : "Reports",
        "url" : "fa-file",
        "to" :"/reports"
    }
]

const NavbarBottom = () => {
    const [state,setState] = useState(() => {
        // every time page loads, we find the current active page and show the corresponding active in navbar
        let a = "/" + window.location.href.split('/')[3] 
        const index = arr.findIndex(page => page.to === a )

        let newState = [0,0,0,0]    
        newState[index] = 1;
        return newState
    });

    const changePage = (index) => {
        let a = [0,0,0,0];
        a[index] = 1;
        setState(a);
    }

return (
    <div className="navbar_">
        {arr.map((nav, index) => (
            <Link to={nav.to} className="link_ " key={index}>
                <div className="navbar-item_" onClick={() => changePage(index)} >
                    <i className={"fa " + nav.url + (((state[index]===1) && " activePage_") || "")}></i>
                    <p className={(((state[index]===1) && " activePage_") || "")}>{nav.name}</p>
                </div>
            </Link>
        ))}
        <div className="horizontal-line_"></div>
    </div>
)
}

export default NavbarBottom