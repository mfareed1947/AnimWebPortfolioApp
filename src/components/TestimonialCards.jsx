import React from 'react'

const TestimonialCards = ({ name, feedback, imgSrc }) => {
    return (
        <article id='article'>
            <img src={imgSrc} alt="" />
            <h4>{name}</h4>
            <p>{feedback}</p>
        </article>
    )
}

export default TestimonialCards