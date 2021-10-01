import React, { useContext,useEffect,useState } from "react";
import {filterLang, filterSkill } from ".";
import { languages, skills } from "../Content";

let a = Array(skills.length+1).fill(0)
a[skills.length] = -1   //to check if all are zeroes or not
                        //if all zeroes then -1 else noOfOnes
let noOfOnes = 0

function FilterWindow({showFilter, setShowFilter}) {

    const setLanguageSelected = useContext(filterLang)
    const setSkillSet = useContext(filterSkill)

    // in both only index is stored
    const [skillArr, setSkillArr] = useState([...a])
    const [lang, setLang] = useState("")

    const toggleLanguage = (language) => {
        if(language === lang)
            setLang("")
        else setLang(language)
    }

    const toggleSkillArr = (index) => {

        setSkillArr((prevArr) => {
            let b = [...prevArr]
            if(b[index] !== 1) {
                b[index] = 1
                b[b.length-1] = ++noOfOnes;
            }
            else {
                b[index] = 0
                b[b.length-1] = --noOfOnes;
            }
            return b
        })
    }

    const onApplyFilter = () => {
        setLanguageSelected(lang)
        setSkillSet(skillArr)
        setShowFilter(false)
    }


    return (
        <div className={`filter_ ${(showFilter?"":" no-display_")}`}>
                <p className="heading_ sort-by-head_">Filter</p>
                <p className="filter-set-head_">Languages</p>
                <ul className="filter-list_">
                    {languages.map((language,index) =>  (
                        <li className="filter-lang-item_" key={index} onClick={() => toggleLanguage(language)}>
                            <div className={`${lang===language ?"filter-selected_":""}`}>{language}</div>
                        </li> 
                    ))}
                </ul>

                <p className="filter-set-head_">Skills</p>
                <ul className="filter-list_">
                    {skills.map((skill,index) =>  (
                        <li className="filter-skill-item_" key={index} onClick={() => toggleSkillArr(index)}>
                            <div className={(skillArr[index]===1)?"filter-selected_":""}>{skill}</div>
                        </li> 
                    ))}
                </ul>

                <button className="btn_ talk-now_ apply-btn_" onClick={onApplyFilter}>Apply</button>
            </div>
    )
}

export default React.memo(FilterWindow)