import React from 'react'
import { AiFillIeCircle, AiFillAndroid, AiFillWindows } from "react-icons/ai";
import { motion } from 'framer-motion'

const Services = () => {

    const animation = {
        whileInView: {
            x: 0,
            y: 0,
            opacity: 1
        },
        one: {
            opacity: 0,
            x: "-100%"
        },

        TwoAndThree: {
            opacity: 0,
            y: "-100%"
        },

        four: {
            opacity: 0,
            y: "100%"
        }
    }

    return (
        <div id='services' >
            <h2>Services</h2>

            <section>
                <motion.div className="serviceBox1" whileInView={animation.whileInView} initial={animation.one} >
                    <h2>2+</h2>
                    <p>Experience</p>
                </motion.div>
                <motion.div className="serviceBox2" whileInView={animation.whileInView} initial={animation.TwoAndThree}>
                    <AiFillIeCircle />
                    <span>Web Development</span>
                </motion.div>
                <motion.div className="serviceBox3" whileInView={animation.whileInView} initial={animation.TwoAndThree} transition={{ delay: 0.1 }} >
                    <AiFillAndroid />
                    <span>App Development</span>
                </motion.div>
                <motion.div className="serviceBox4" whileInView={animation.whileInView} initial={animation.four}>
                    <AiFillWindows />
                    <span>Desktop Development</span>
                </motion.div>
            </section>
        </div>
    )
}

export default Services