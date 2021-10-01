import React, { createContext, useState } from "react";

import TalkNav from "./TalkNav";
import Astrologers from "./Astrologers";

export const setSearchText = createContext();

export const sortBy = createContext()

export const filterLang = createContext()
export const filterSkill = createContext()

function TalkToAstrologer() {

    const [searchedText, setSearchedText] = useState("");
    const [sortByOption, setSortByOption] = useState(4)
    const [showSortBy,setShowSortBy] = useState(false);
    const [showFilter,setShowFilter] = useState(false);
    const [languageSelected, setLanguageSelected] = useState("")
    const [skillSet, setSkillSet] = useState([-1])

    
    return(
        <>
            <sortBy.Provider value={setSortByOption}>
                <filterLang.Provider value={setLanguageSelected}>
                    <filterSkill.Provider value={setSkillSet}>
                        <TalkNav setSearchedText={setSearchedText} showSortBy={showSortBy} setShowSortBy={setShowSortBy} showFilter={showFilter} setShowFilter={setShowFilter} />
                    </filterSkill.Provider>
                </filterLang.Provider>
            </sortBy.Provider>

            <Astrologers searchedText={searchedText} sortByOption={sortByOption} setShowSortBy={setShowSortBy} setShowFilter={setShowFilter} languageSelected={languageSelected} skillSet={skillSet}/>
        </>
    )
}



export default TalkToAstrologer