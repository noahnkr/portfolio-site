import './index.scss';
import { useState, useEffect } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import Loader from 'react-loaders';
import { faJava, faHtml5, faCss3Alt, faSquareJs, faReact, faGitAlt, faGithub, faJira } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Mx from '../../assets/images/mx.png';
import Paddys from '../../assets/images/paddys.png';

const Resume = () => {
    document.title = 'noahnkr | Resume';
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
                animateBoxes();
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
            <div className="jobs">
                <div className="job-description">
                    <div className="job-heading">
                        <div className="job-title">
                            <h2>Front End Developer Intern</h2>
                            <h3>The MX Group | Burr Ridge, IL</h3>
                            <h4>May 2022 - Aug 2022</h4>
                        </div>
                        <img src={Mx} className='mx' />
                    </div>
                    <p>
                        As a front-end intern at The MX Group, I had the incredible opportunity to delve into the world of web development and user interface design in a 
                        professional setting. Working within a B2B marketing firm exposed me to the dynamic nature of the industry and the importance of aligning design 
                        and functionality with the specific needs and goals of business clients.
                    </p>
                    <p>
                        At the beginning of my internship, I was introduced to Atlassian Jira, a powerful project management tool widely used in the industry. I quickly realized its importance in 
                        organizing tasks, tracking progress, and ensuring efficient workflow management. In addition to Jira, I also gained experience working with Trello, another popular project 
                        management tool that emphasizes visual organization and collaboration.
                    </p>
                    <p>
                        Moreover, my time as a front-end intern allowed me to refine my communication and collaboration skills. I actively participated in meetings, 
                        sharing progress updates and seeking feedback from the team. This collaborative environment provided me with invaluable insights into the 
                        intricacies of teamwork within a professional setting.
                    </p>
                </div>
                <div className="job-description">
                    <div className="job-heading">
                        <div className="job-title">
                            <h2>Bartender</h2>
                            <h3>Paddy's Irish Pub | Ames, IA</h3>
                            <h4>Mar 2022 - Present</h4>
                        </div>
                        <img src={Paddys} className='paddys' />
                    </div>
                    <p>
                        At Paddy's, I serve drinks in a fast paced college bar environment. Working here as not only improved my multitasking skills but given me the opportunity to meet
                        many other students like myself.
                    </p>
                </div>
            </div>
            
            
        </div>
    );
    
    function animateBoxes() {
        const allBoxes = document.querySelectorAll('.highlight');
        const beginner = Array.from(allBoxes).filter(b => b.classList.contains('beginner'));
        const intermediate = Array.from(allBoxes).filter(i => i.classList.contains('intermediate'));
        const advanced = Array.from(allBoxes).filter(a => a.classList.contains('advanced'));
        const expert = Array.from(allBoxes).filter(e => e.classList.contains('expert'));

        const boxesArray = [beginner, intermediate, advanced, expert];

        setTimeout(() => { // wait for page to fade in
            boxesArray.forEach((boxes, index) => {
                setTimeout(() => {
                    boxes.forEach(box => {
                        box.classList.add('highlighted')
                    });
                }, index * 300);
            });
        }, 300);
    }
   
    const skills = (
        <div className='skills'>
            <div className='languages'>
                <h2>Languages & Frameworks</h2>
                <ul>
                    <li>
                        <div className="skill-icon-container">
                            <FontAwesomeIcon icon={faJava} color='#fff' className='skill-icon' />
                            <p>Java</p>
                        </div>
                        <div className="skill-level">
                            <div className="beginner highlight"></div>
                            <div className="intermediate highlight"></div>
                            <div className="advanced highlight"></div>
                            <div className="expert"></div>
                        </div>
                    </li>
                    <li>
                        <div className="skill-icon-container">
                            <FontAwesomeIcon icon={faHtml5} color='#fff' className='skill-icon' />
                            <p>HTML</p>
                        </div>
                        <div className="skill-level">
                            <div className="beginner highlight"></div>
                            <div className="intermediate highlight"></div>
                            <div className="advanced"></div>
                            <div className="expert"></div>
                        </div>
                    </li>
                    <li>
                        <div className="skill-icon-container">
                            <FontAwesomeIcon icon={faCss3Alt} color='#fff' className='skill-icon' />
                            <p>CSS</p>
                        </div>
                        <div className="skill-level">
                            <div className="beginner highlight"></div>
                            <div className="intermediate highlight"></div>
                            <div className="advanced"></div>
                            <div className="expert"></div>
                        </div>
                    </li>
                    <li>
                        <div className="skill-icon-container">
                            <FontAwesomeIcon icon={faSquareJs} color='#fff' className='skill-icon' />
                            <p>JavaScript</p>
                        </div>
                        <div className="skill-level">
                            <div className="beginner highlight"></div>
                            <div className="intermediate highlight"></div>
                            <div className="advanced highlight"></div>
                            <div className="expert"></div>
                        </div>
                    </li>
                    <li>
                        <div className="skill-icon-container">
                            <FontAwesomeIcon icon={faReact} color='#fff' className='skill-icon' />
                            <p>React</p>
                        </div>
                        <div className="skill-level">
                            <div className="beginner highlight"></div>
                            <div className="intermediate highlight"></div>
                            <div className="advanced"></div>
                            <div className="expert"></div>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="development">
                <h2>Development</h2>
                <ul>
                    <li>
                        <div className="skill-icon-container">
                            <FontAwesomeIcon icon={faGitAlt} color='#fff' className='skill-icon' />
                            <p>Git</p>
                        </div>
                        
                        <div className="skill-level">
                            <div className="beginner highlight"></div>
                            <div className="intermediate highlight"></div>
                            <div className="advanced highlight"></div>
                            <div className="expert"></div>
                        </div>
                    </li>
                    <li>
                        <div className="skill-icon-container">
                            <FontAwesomeIcon icon={faGithub} color='#fff' className='skill-icon' />
                            <p>GitHub</p>
                        </div>
                        
                        <div className="skill-level">
                            <div className="beginner highlight"></div>
                            <div className="intermediate highlight"></div>
                            <div className="advanced"></div>
                            <div className="expert"></div>
                        </div>
                    </li>
                    <li>
                        <div className="skill-icon-container">
                            <FontAwesomeIcon icon={faJira} color='#fff' className='skill-icon' />
                            <p>Jira</p>
                        </div>
                        
                        <div className="skill-level">
                            <div className="beginner highlight"></div>
                            <div className="intermediate"></div>
                            <div className="advanced"></div>
                            <div className="expert"></div>
                        </div>
                    </li>
                </ul>
                <div className="other">
                    <h2>Other</h2>
                    <p>MongoDB, Express, Node.js, Sass, JSON</p>
                </div>
            </div>
            
        </div>
    );

    const coursework = (
        <div className='coursework'>
            <ul className='courses-list'>
                <li>Introduction to Computer Programming</li>
                <li>Object-oriented Programming</li>
                <li>Introduction to Data Structures</li>
                <li>Discrete Computational Structures</li>
                <li>Construction of User Interfaces</li>
                <li>Introduction to the Design and Analysis of Algorithms</li>
                <li>Philosophy of Technology</li>
                <li>Calculus I, II</li>
                <li>Linear Algebra</li>
                <li>Object-oriented Analysis and Design</li>
                <li>Software Development Practices</li>
            </ul>
        </div>
    );


    return (
        <>
        <div className='container resume-page'>
            <div className='text-zone'>
                <h1 className='animated-letters'>
                    <AnimatedLetters letterClass={letterClass} strArray={'Resume'.split('')} index={15} />
                </h1>
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
        <Loader type="ball-pulse-sync" />
        </>
    );
}

export default Resume;