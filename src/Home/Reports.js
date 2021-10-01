import React from "react";
// import React , {useState, useEffect} from "react";

import Section from "./Section";
import { Content } from "../Content";

const Reports = () => {

    // const [error, setError] = useState(null);
    // const [isLoaded, setIsLoaded] = useState(false);
    // const [mainData, setMainData] = useState([]);

    // useEffect(() => {
    //     fetch(Content[0].Reports.jsonUrl)
    //         .then(response => response.json())
    //         .then(
    //             (data) => {
    //                 setIsLoaded(true);
    //                 setMainData([data]);
    //             },
    //             (error) => {
    //                 setIsLoaded(true);
    //                 setError(error);
    //             }
    //         )        
    // }, [])

    // if(error) {
    //     return(
    //         <div> Error: {error.message}</div>
    //     )
    // }
    // else if(!isLoaded) {
    //     return(
    //         <div>Loading...</div>
    //     )
    // }
    // else 
    return (
            <div className="section_">
                <Section {...Content[0].Reports} />
                
                <div className="reports_">
                    <div className="reports-item_" style={{background:'url("./assets/BANNER2.png") no-repeat center'}}>
                        <div className="reports-footer_">
                            <p className="reports-price_">{'\u20B9 '}500/min</p>
                            <button className="btn_ buy-now_">buy now</button>
                        </div>  
                    </div>
                    <div className="reports-item_" style={{background:'url("./assets/BANNER2.png") no-repeat center'}}>
                        <div className="reports-footer_">
                            <p className="reports-price_">{'\u20B9 '}500/min</p>
                            <button className="btn_ buy-now_">buy now</button>
                        </div>  
                    </div>
                    
                </div>
            </div>
        )
}


export default Reports