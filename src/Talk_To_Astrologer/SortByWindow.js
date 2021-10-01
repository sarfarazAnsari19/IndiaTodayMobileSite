import React, { useContext,useState } from "react";
import { sortBy } from ".";

import { sortList } from "../Content";

function SortByWindow({showSortBy}) {

    // 4 refers to no sorting option is clicked
    const [hover,setHover] = useState(4)

    const setSortByOption = useContext(sortBy)

    const onSortOptionSelect = (id) => {

        // console.log(setSortByOption)
        // setTimeout(()=> setShowSortBy(false), 200)
        setSortByOption(id)
    }


    return (
        <div className={`sort-by_ ${showSortBy?"":" no-display_"}`}>
                <p className="heading_ sort-by-head_">Sort By</p>
                <ul className="sort-list_">
                    {sortList.map(item =>  (
                        <li className="sort-item_" key={item.id} onClick={() => onSortOptionSelect(item.id)}  onMouseOver={() => setHover(item.id)}>
                            <div className={`circle_ ${(hover===item.id)?" circle-hover-outline_":""}`}>
                                <div className={(hover===item.id)?" circle-hover_":""}></div>
                            </div>
                            <p>{item.text}</p>
                        </li> 
                    ))}
                </ul>
            </div>
    )
}

export default React.memo(SortByWindow)