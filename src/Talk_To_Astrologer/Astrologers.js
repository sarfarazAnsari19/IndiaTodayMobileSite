import React , {useEffect, useState} from "react";

import { Content, languages, skills } from "../Content";

const Astrologers = ({searchedText, sortByOption, setShowSortBy,setShowFilter,languageSelected , skillSet}) => {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [mainData, setMainData] = useState([]);



    const resetFilterSort = () => {
        setShowSortBy(false)
        setShowFilter(false)
    }

    useEffect(() => {
        fetch(Content[0].Talk_Astrologer.jsonUrl)
            .then(response => response.json())
            .then(
                (datas) => {
                    setIsLoaded(true);

                    //checking sort by option
                    if(sortByOption === 0)
                        datas.sort((a,b) => b.experience - a.experience)
                    
                    else if(sortByOption === 1)
                        datas.sort((a,b) => a.experience - b.experience)
                    
                    else if(sortByOption === 2)
                        datas.sort((a,b) => b.additionalPerMinuteCharges - a.additionalPerMinuteCharges)
                    
                    else if(sortByOption === 3)
                        datas.sort((a,b) => a.additionalPerMinuteCharges - b.additionalPerMinuteCharges)

                    //checking the language invoked
                    if(languageSelected !== ""){
                        datas = datas.filter(data => data.languages.includes(languageSelected))
                    }
                    
                    //checking skill set
                    if(skillSet[skillSet.length-1] !== 0) {  
                        for(let i = 0; i <skillSet.length-1;i++) {
                            if(skillSet[i] === 1)
                                datas = datas.filter((data) => data.skills.includes(skills[i]))
                        }
                    }


                    setMainData(datas)
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )        
    },[sortByOption,languageSelected,skillSet])

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
        <div className="list_" onMouseDown={() => resetFilterSort()}>

            {(mainData.length===0 && <div className="no-results_">No Results Found</div> ) || mainData.map(data => (data.firstName + " " + data.lastName).includes(searchedText.toLowerCase()) && (
                <Astrologer data={data} key={data.id}/>
            ))}
        </div>
    )

}

const Astrologer = ({data}) => {

    const {firstName, lastName, skills, languages, minimumCallDurationCharges,additionalPerMinuteCharges, images, experience} = data
    
    return (
        <div className="list-item_">
                <img src={images.medium.imageUrl} alt={firstName + " " + lastName} />
                <div className="info_">
                    <div>
                        <p className="name_">{firstName + " " + lastName}</p>
                    </div>
                    <div>
                        <i className="fal fa-bookmark"></i>
                        <p className="text_">{skills.join(', ')}</p>
                    </div>
                    <div>
                        <i className="far fa-language"></i>
                        <p className="language_">{languages.join(', ')}</p>
                    </div>
                    <div>
                        <i className="fas fa-money-check"></i>
                        <p className="fees_">{'\u20B9 '}{minimumCallDurationCharges + " + " + additionalPerMinuteCharges + "/ min"}</p>
                    </div>

                    <button className="btn_ talk-on-call_">
                    <i className="fas fa-phone-alt"></i>Talk on Call</button>


                </div>
                <p className="years_">{experience}{" Years"}</p>
            </div>
    )
}

export default Astrologers
// export default React.memo(Astrologers)