import React, {useEffect, useState } from "react";

import Section from "./Section";
import { Content } from "../Content";


const DailyHoroscopes = ()  => {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [mainData, setMainData] = useState([]);

    useEffect(() => {
        fetch(Content[0].Daily_Horoscopes.jsonUrl)
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
            <div className="section_">
                <Section {...Content[0].Daily_Horoscopes}/>

                {/* Cards  */}
                <div className="card-section_">
                   {mainData.map((data,index) => (
                        <div className="card_" key={data.images.medium.id}>
                            <img src={"./assets/zodiac-sign/" + data.name + ".png"} alt={data.name} className="card-img_" />
                            {/* <img src={data.images.medium.imageUrl + '/' + data.urlSlug} alt={data.name} className="card-img_" /> */}

                            <div className="card-body_">
                                <h4 className="card-title_">{data.name}</h4>
                                <p className="card-text_">{data.date}</p>
                            </div>
                        </div>
                   ))}
                </div>
                {/* Cards end  */}
            </div>
    ) 
}

export default DailyHoroscopes

