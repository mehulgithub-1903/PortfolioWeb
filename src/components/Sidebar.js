import React from 'react'

import leetcode from '../assets/icons/leetcode.svg'
import linkedin from '../assets/icons/linkedin.svg'
import github from '../assets/icons/github.svg'
import pin from '../assets/icons/pin.svg'
import tie from '../assets/icons/resume.svg'
import mightycoder from '../assets/mp5.png'
import resume from '../assets/resume.pdf'

const Sidebar = () => {
    const handleEmailMe = () => {
        window.open("mailto:mehulporwal9999@gmail.com")

    }
    return (
        <div className="sidebar">
            <img src={mightycoder} alt="avatar" className="sidebar__avatar" />
            <div className="sidebar__name">Mehul <span>Porwal</span> </div>
            <div className="sidebar__item sidebar__title">Web Developer</div>
            <div className="sidebar__item sidebar__title">JavaProgramer</div>
            <a href={resume} download="resume.pdf">
                
                <div className="sidebar__item sidebar__resume">
                    <img src={tie} alt="resume" className="sidebar__icon" />Download Resume
                </div>
            </a>
            <figure className="sidebar__social-icons">

                <a title="Leetcode" target="_blank" href="https://leetcode.com/pheonix1903/"><img src={leetcode} alt="leetcode" className="sidebar__icon mr-3" /></a>
                <a title="Linkedin" target="_blank" href="https://www.linkedin.com/in/mehul-porwal1903/"><img src={linkedin} alt="linkedin" className="sidebar__icon" /></a>
            </figure>
            <div className="sidebar__contact">
                <div className="sidebar__item sidebar__github">
                    <a href=""><img src={github} alt="github" className="sidebar__icon mr-3" />GitHub</a>
                </div>
                <div className="sidebar__location">
                    <img src={pin} alt="location" className="sidebar__icon mr-3" />
                    Ujjain,M.P</div>
                <div className="sidebar__item">mehulporwal9999@gmail.com</div>
                <div className="sidebar__item">7835323423/9876543510</div>
            </div>
            <div className="sidebar__item sidebar__email" onClick={handleEmailMe}>Email Me</div>
        </div>
    )
}

export default Sidebar;