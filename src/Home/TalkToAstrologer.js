import React, { useState, useEffect } from "react";

import Section from "./Section";
import { Content } from "../Content";

const TalkToAstrologer = () => {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [mainData, setMainData] = useState([]);

    useEffect(() => {
        fetch(Content[0].Talk_Astrologer.jsonUrl)
            .then(response => response.json())
            .then(
                (data) => {
                    setIsLoaded(true);
                    setMainData(data);
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
        <div className="section_">
            <Section {...Content[0].Talk_Astrologer}/>
            
            {/* Cards  */}
            <div className="card-section_">
                {mainData.map((data) => (
                    <div className="card_ astrologer_" key={data.id}>
                    <img src={data.images.medium.imageUrl} alt={data.firstName + " " + data.lastName} className="card-img_" />n
                    <div className="card-body-astrologer_">
                        <h4 className="name_">{data.firstName + " " + data.lastName}</h4>
                        <p className="rating_">{((data.rating) && data.rating.toFixed(1)) || ""}</p>
                        <p className="vastu_">{data.skills[0]}</p>
                        <p className="price_">{'\u20B9 '}{data.minimumCallDurationCharges + data.additionalPerMinuteCharges}{"/ min"}</p>
                        <button className="btn_ talk-now_">talk now</button>
                    </div>
                </div>
                ))}
            </div>

            {/* Cards end  */}
        </div>
    )
}

export default TalkToAstrologer