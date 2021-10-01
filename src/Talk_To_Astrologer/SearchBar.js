import React from "react";

function SearchBar({setSearchedText, showSearch, textState, setTextState}) {

    const onClickTextField = () => {
        if(textState === "Search Astrologer")
            setTextState("")
    }

    const onChangeText = (text) => {
        setTextState(text)
        setSearchedText(text)

        document.querySelector('.search-text_').focus()
    }

    return (
        
        <div className={`search_ ${showSearch?"":" no-display_"}`}>
            <i className="fa fa-search" aria-hidden="true" ></i>
            <input type="text" className="search-text_" value={textState} onClick={() => onClickTextField()} onChange={(event) => onChangeText(event.target.value)}/>
            <i className="fa fa-times" aria-hidden="true" onClick={() => onChangeText("")}></i>
        </div>
    )
}



export default React.memo(SearchBar)