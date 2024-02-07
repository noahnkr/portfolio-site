import './index.scss';
import LogoN from '../../assets/images/logo-n.png';
import { useState } from 'react';
import LogoSubtitle from '../../assets/images/logo_sub.png';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faEnvelope, faFileLines, faLayerGroup } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';


export const Sidebar = () => {

    const [isOpen, setIsOpen] = useState(false);

    function toggleMenu() {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <div className={`side-bar ${isOpen ? "open" : ""}`}>
                <div className='logo' onClick={toggleMenu}>
                    <img src={LogoN} alt="logo" />
                    <img className="sub-logo" src={LogoSubtitle} alt="noah"/>
                </div>
                <div className={`nav-links ${isOpen ? "open" : ""}`}>
                    <NavLink exact="true" activeclassname="active" to="/">
                        <FontAwesomeIcon icon={faHome} color="4d4d4e" />
                    </NavLink>
                    <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
                        <FontAwesomeIcon icon={faUser} color="4d4d4e" />
                    </NavLink>
                    <NavLink exact="true" activeclassname="active" className="resume-link" to="/resume">
                        <FontAwesomeIcon icon={faFileLines} color="4d4d4e" />
                    </NavLink>
                    <NavLink exact="true" activeclassname="active" className="projects-link" to="/projects">
                        <FontAwesomeIcon icon={faLayerGroup} color="4d4d4e" />
                    </NavLink>
                    <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
                        <FontAwesomeIcon icon={faEnvelope} color="4d4d4e" />
                    </NavLink>
                </div>
                <div className='contact-links'>
                    <a target="_blank" rel='noreferrer' href="https://www.linkedin.com/in/noah-roberts-3bb399234/">
                        <FontAwesomeIcon icon={faLinkedinIn} color="#4d4d4e" />
                    </a>
                    <a target="_blank" rel='noreferrer' href="https://github.com/noahnkr">
                        <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
                    </a>
                </div>
            </div>
        </>
    );
};

export default Sidebar;