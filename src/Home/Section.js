const Section = (Content) => {

    return (
        <>
            <p className='heading_'>{Content.heading}</p>
            <p className="see-all_">{
                (Content.seeAll) && "See All >" 
            }</p>
            <p className="section-text_">{Content.section_text}</p>
        </>
    )
}

export default Section