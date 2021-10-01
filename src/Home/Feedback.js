import React, { useEffect, useState } from "react";

import Section from "./Section";
import { Content } from "../Content";

const Feedback = () => {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [mainData, setMainData] = useState([]);

    useEffect(() => {
        fetch(Content[0].Feedback.jsonUrl)
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
            <Section {...Content[0].Feedback}/>
            <div className="feedback_">
                {mainData.map(data => (
                    <div className="feedback-item_" key={data.id}>
                    <span className="feedback-quotes_">"</span>                    
                    <p className="feedback-text_">{data.feedback_text}</p>
                    <div className="feedback-footer_">
                        {/* <img src={data.picUrl} alt={data.name + "Profile Photo"} className="feedback-photo_"/> */}
                        <i className="fas fa-user-circle"></i>
                        <p className="feedback-name_">{data.name}</p>
                        <p className="feedback-address_">{data.address}</p>
                    </div>  
                </div>
                ))}
            </div>
        </div>
    )

}

export default Feedback