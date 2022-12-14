import React from 'react'
import NavContent from './NavContent'
import { AiOutlineMenu } from 'react-icons/ai'

const Header = ({ setMenuOpen, menuOpen }) => {
    return (
        <>
            <nav>
                <NavContent />

            </nav>
            <button className='navbtn' onClick={() => setMenuOpen(!menuOpen)}>
                <AiOutlineMenu />
            </button>

        </>

    )
}


export default Header