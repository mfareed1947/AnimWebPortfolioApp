import React from 'react'
import NavContent from './NavContent'

const HeaderPhone = ({ setMenuOpen, menuOpen }) => {
    return (
        <>
            <div className={`navphone ${menuOpen ? "navphonecomes" : ""}`}>
                <NavContent setMenuOpen={setMenuOpen} menuOpen={menuOpen} />
            </div>
        </>
    )
}

export default HeaderPhone