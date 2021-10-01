import React, {useState} from "react";
import FilterWindow from "./FilterWindow";
import SearchBar from "./SearchBar";
import SortByWindow from "./SortByWindow";

const TalkNav = ({setSearchedText, showSortBy,setShowSortBy, showFilter, setShowFilter}) => {
    
    const [textState, setTextState] = useState("Search Astrologer");
    const [showSearch,setShowSearch] = useState(false);
    

    const toggleSearch = () => {
        setTextState("Search Astrologer")
        setShowSearch(!showSearch)
        setSearchedText("")
    }

    const toggleFilter = () => {
        setShowFilter(!showFilter)
    }

    const toggleSortBy = () => {
        setShowSortBy(!showSortBy)
    }

    return (
        <>
        <div className="talk-nav_ ">
            <p className='heading_'>Talk to an Astrologer</p>
            <i className="fas fa-search" onClick={() => toggleSearch()}></i>
            <i className="fas fa-filter" onClick={() => toggleFilter()}></i>
            <i className="fas fa-sort" onClick={() => toggleSortBy()}></i>

            <SearchBar setSearchedText={setSearchedText} showSearch={showSearch} textState={textState} setTextState={setTextState}/>

            <FilterWindow showFilter={showFilter} setShowFilter={setShowFilter}/>

            <SortByWindow showSortBy={showSortBy} setShowSortBy={setShowSortBy}/>

        </div>
            </>
    )
}


export default React.memo(TalkNav)