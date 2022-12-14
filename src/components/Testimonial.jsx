import React from 'react'
import TestimonialCards from './TestimonialCards'
import user2 from '../assets/user2.jpg'
import user3 from '../assets/user3.jpg'
import user4 from '../assets/user4.jpg'


const Testimonial = () => {
    return (
        <div id='testimonial'>
            <h2>Testimonial</h2>
            <section>
                <TestimonialCards name={"Ali"} imgSrc={user2} feedback={"Your teaching skills so good"} />
                <TestimonialCards name={"Ahmed"} imgSrc={user3} feedback={"Be truthful in your feedback."} />
                <TestimonialCards name={"Micale"} imgSrc={user4} feedback={"If you are happy with the content, that's excellent!"} />
            </section>
        </div>
    )
}

export default Testimonial