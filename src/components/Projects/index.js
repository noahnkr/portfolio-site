import AnimatedLetters from '../AnimatedLetters';
import { useState, useEffect } from 'react';
import './index.scss';

const Projects = () => {

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
                newSection = document.querySelector('.graphmath-select');
                break;
            case 1:
                newSection = document.querySelector('.jchess-select');
                break;
            case 2:
                newSection = document.querySelector('.jobcseeker-select');
                break;
        }
        newSection.style.opacity = '100%';
    }, [section]);

    function handleSectionChange(newSection) {
        let oldSection;
        switch (section) {
            case 0:
                oldSection = document.querySelector('.graphmath-select');
                break;
            case 1:
                oldSection = document.querySelector('.jchess-select');
                break;
            case 2:
                oldSection = document.querySelector('.jobcseeker-select');
                break;
        }
        if (section !== newSection) {
            oldSection.style.opacity = '50%';
        }
       
        setSection(newSection);
    }

    const graphMath = (
        <div className="graphmath">

        </div>
    );

    const jchess = (
        <div className="jchess">

        </div>

    );

    const jobCSeeker = (
        <div className="jobcseeker">

        </div>
    );


    return (
        <div className="container projects-page">
            <div className="text-zone">
                <h1 className='animated-letters'>
                    <AnimatedLetters letterClass={letterClass} strArray={'Projects'.split('')} index={15} />
                </h1>
                <div className="projects">
                    <div className="section-select">
                        <h2 className='graphmath-select' onClick={() => handleSectionChange(0)}>GraphMath</h2>
                        <h2 className='jchess-select' onClick={() => handleSectionChange(1)}>JChess</h2>
                        <h2 className='jobcseeker-select' onClick={() => handleSectionChange(2)}>Job CSeeker</h2>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default Projects;