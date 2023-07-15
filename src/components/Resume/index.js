import './index.scss';
import { useState, useEffect } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import Loader from 'react-loaders';
import { faJava, faSquareJs, faReact } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Mx from '../../assets/images/mx.png';

const Resume = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const [section, setSection] = useState(0);
    

    useEffect(() => {
        let timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
        
        return () => {
                    clearTimeout(timeoutId)
                }
    }, []);

    useEffect(() => {
        let newSection;
        switch (section) {
            case 0:
                newSection = document.querySelector('.experience-select');
                break;
            case 1:
                newSection = document.querySelector('.skills-select');
                break;
            case 2:
                newSection = document.querySelector('.coursework-select');
                break;
        }
        newSection.style.opacity = '100%';
    }, [section]);

    function handleSectionChange(newSection) {
        let oldSection;
        switch (section) {
            case 0:
                oldSection = document.querySelector('.experience-select');
                break;
            case 1:
                oldSection = document.querySelector('.skills-select');
                break;
            case 2:
                oldSection = document.querySelector('.coursework-select');
                break;
        }
        if (section !== newSection) {
            oldSection.style.opacity = '50%';
        }
       
        setSection(newSection);
    }

    const experience = (
        <div className='experience'>
            <div className="job-description">
                <div className="job-heading">
                    <h2>Front End Developer Intern</h2>
                    <div className="job-location">
                        <h3>The MX Group | Burr Ridge, IL</h3>
                        <h4>May 2022 - Aug 2022</h4>
                    </div>
                </div>
                <p>
                    Hello 1
                </p>
                <p>
                    Hello 2
                </p>
            </div>
            <img src={Mx} className='mx' />
        </div>
    );

    const skills = (
        <div className='skills'>
            <div className='languages'>
                <h2>Languages</h2>
                <ul>
                    <li>
                        <FontAwesomeIcon icon={faJava} color='#fff' className='skill-icon' />
                        <div className="skill-level">
                            <div className="beginner selected"></div>
                            <div className="intermediate selected"></div>
                            <div className="advanced selected"></div>
                            <div className="expert"></div>
                        </div>
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faSquareJs} color='#fff' className='skill-icon' />
                        <div className="skill-level">
                            <div className="beginner selected"></div>
                            <div className="intermediate selected"></div>
                            <div className="advanced"></div>
                            <div className="expert"></div>
                        </div>
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faReact} color='#fff' className='skill-icon' />
                        <div className="skill-level">
                            <div className="beginner selected"></div>
                            <div className="intermediate selected"></div>
                            <div className="advanced"></div>
                            <div className="expert"></div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );

    const coursework = (
        <div className='coursework'>
            <p>coursework</p>
        </div>
    );


    return (
        <>
        <div className='container resume-page'>
            <div className='text-zone'>
                <h1 className='animated-letters'>
                    <AnimatedLetters letterClass={letterClass} strArray={'Resume'.split('')} index={15} />
                </h1>
                <div className='resume'>
                    <div className="section-select">
                        <h2 className='experience-select' onClick={() => handleSectionChange(0)}>Experience</h2>
                        <h2 className='skills-select' onClick={() => handleSectionChange(1)}>Skills</h2>
                        <h2 className='coursework-select' onClick={() => handleSectionChange(2)}>Coursework</h2>
                    </div>
                    {section === 0 && experience}
                    {section === 1 && skills}
                    {section === 2 && coursework}
                </div>
            </div>
        </div>
        <Loader type="ball-pulse-sync" />
        </>
    );
}

export default Resume;