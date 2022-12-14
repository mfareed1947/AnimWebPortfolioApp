import React from 'react'
import user3 from '../assets/user3.jpg'
import {
    AiFillGithub,
    AiFillInstagram,
    AiFillYoutube,
   
} from "react-icons/ai";

const Footer = () => {
    return (
        <footer>
            <div>
                <img
                    src={user3}
                    alt="Founder"
                />

                <h2>Muhammad Fareed</h2>
                <p>Motivation is temporary, but discipline last forever.</p>
            </div>
            <div>
                <h2>Social Media</h2>
                <a href="https://youtube.com" target={"blank"} >
                    <AiFillYoutube />
                </a>
                <a href="https://github.com/mfareed1947" target={"blank"} >
                    <AiFillGithub />
                </a>
                <a href="https://www.instagram.com/mfareed1504/" target={"blank"} >
                    <AiFillInstagram />
                </a>
            </div>

        </footer>
    )
}

export default Footer