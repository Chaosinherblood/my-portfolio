import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'
import { BsDribbble } from 'react-icons/bs'


const HeaderSocials = () => {
    return (
        <div className='header__socials'>
            <a href="https://www.linkedin.com/in/muskan-verma97/" target='blank'><BsLinkedin /></a>
            <a href="https.dribbble.com" target='blank'><BsDribbble /></a>
            <a href="https.github.com" target='blank'><BsGithub /></a>

        </div>
    )
}

export default HeaderSocials