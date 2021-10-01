import React, { useEffect, useState } from "react";

import Section from "./Section";
import { Content } from "../Content";

const AskQues = () => {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [mainData, setMainData] = useState([]);
    const [quesList, setQuesList] = useState(-1)

    const showCategories = (e) => {
        document.querySelector(".dropdown-menu_").classList.toggle("showMenu_");
        setQuesList(-1)
    }

    useEffect(() => {
        fetch(Content[0].Ask_Question.jsonUrl)
            .then(response => response.json())
            .then(
                (data) => {
                    setIsLoaded(true);
                    setMainData(data.data);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )        
    }, [])

    function toggleQues(index) {
        setQuesList(index)
    }

    if(error) {
        return(
            <div> Error: {error.message}</div>
        )
    }
    else if(!isLoaded) {
        return(
            <div>Loading...</div>
        )
    }
    else return (
        <div className="section">
            <Section {...Content[0].Ask_Question}/>

            <div className="choose-category_">
                <p className="category-heading_">Choose Category</p>
                <div className="dropdown_">
                    <button className="category-btn_" onClick={() => showCategories()}>Select a category: Love, Career, more <i className="dropdown-arrow_"></i></button>
                    <ul className="dropdown-menu_ showMenu_">
                        {mainData.map(data => (
                            <li className="dropdown-item_"  key={data.id}>
                                <h4 onClick={() => toggleQues(data.id)} className={(quesList===data.id)?" highlight_":""}>{data.name}</h4>
                                {(quesList === data.id) && data.suggestions.map((ques,index) => (
                                    <p key={index}>{ques}</p>
                                ))}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="category-footer_">
                    <p className="category-price_"><strong>Rs 99</strong>(Including GST)</p>
                    <p className="category-ideas_">Ideas what to ask</p>
                    <button className="btn_  text white ask-question_">Ask a Question</button>
                </div>
                
            </div>
        </div>
    )

}

export default AskQues