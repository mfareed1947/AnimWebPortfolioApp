import React, { useState } from 'react'
import vg from '../assets/vg.png'
import { motion } from 'framer-motion'

const Contact = () => {

    const animations = {
        form: {
            initial: {
                x: "-100%",
                opacity: 0,
            },
            whileInView: {
                x: 0,
                opacity: 1,
            },
        },

        button: {
            initial: {
                y: "-100%",
                opacity: 0,
            },
            whileInView: {
                y: 0,
                opacity: 1,
            },
            transition: {
                delay: 0.5,
            },
        },
    };

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")

    const submitHandler = (e) => {
        e.preventDefault()
        console.log(name, email, message)
    }

    return (
        <div id='contact'>

            <section>
                <motion.form action="" onSubmit={submitHandler} {...animations.form}>
                    <h2>Contact Me</h2>
                    <input type="text" name='name' value={name} onChange={(e) => setName(e.target.value)} placeholder='Enter Your Name' required />
                    <input type="email" name='emmil' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter Your Email' required />
                    <input type="text" name='message' value={message} onChange={(e) => setMessage(e.target.value)} placeholder='Enter Your Message' required />
                    <motion.button {...animations.button}>SEND</motion.button>
                </motion.form>
            </section>
            <aside>
                <img src={vg} alt="" />
            </aside>

        </div >
    )
}

export default Contact