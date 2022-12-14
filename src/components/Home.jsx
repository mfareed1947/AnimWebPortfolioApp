import React, { useRef } from 'react'
import { animate, motion } from 'framer-motion'
import Typewriter from 'typewriter-effect'
import { BsArrowUpRight } from 'react-icons/bs'
import me from '../assets/profile pic.jpg'

const Home = () => {

    const clientCount = useRef(null);
    const projectCount = useRef(null);


    const animClientCount = () => {
        animate(0, 100, {
            duration: 1,
            onUpdate: (v) => (clientCount.current.textContent = v.toFixed())
        })
    }
    const animProjectCount = () => {
        animate(0, 500, {
            duration: 1,
            onUpdate: (v) => (projectCount.current.textContent = v.toFixed())
        })
    }


    const animation = {
        h1: {
            initial: {
                x: '-100%',
                opacity: 0
            },
            whileInView: {
                x: 0,
                opacity: 1
            }
        }
    }

    return (
        <div id='home' className='home-container'>
            <section>
                <div>
                    <motion.h1 {...animation.h1} >
                        Hi, I Am <br /> Muhammad Fareed
                    </motion.h1>
                    <Typewriter
                        options={{
                            strings: ['A Developer', 'A Designer', 'A Creator'],
                            autoStart: true,
                            loop: true,
                            cursor: "",
                            wrapperClassName: "typewriterpara"
                        }} />
                    <div>
                        <a href="mailto:mfareed1504@gmail.com">Hire Me</a>
                        <a href="#work"> Projects <BsArrowUpRight /> </a>
                    </div>
                    <article>
                        <p style={{ fontWeight: "900" }}>+
                            <motion.span
                                whileInView={animClientCount}
                                ref={clientCount}
                            >100</motion.span>
                        </p>
                        <span>Clients Worldwide</span>
                    </article>

                    <aside>
                        <article>
                            <p style={{ fontWeight: "900" }}>+
                                <motion.span
                                    whileInView={animProjectCount}
                                    ref={projectCount}
                                >500</motion.span>
                            </p>
                            <span>Projects Done</span>
                        </article>

                        <article data-special>
                            <p style={{ fontWeight: "900" }}>Contact</p>
                            <span>mfareed1504@gmail.com</span>
                        </article>
                    </aside>
                </div>
            </section>
            <section>
                <img src={me} alt="" />
            </section>

        </div>
    )
}

export default Home