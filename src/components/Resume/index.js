import './index.scss';
import { useState, useEffect } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import Loader from 'react-loaders';

const Resume = () => {
    const [letterClass, setLetterClass] = useState('text-animate');

    useEffect(() => {
        let timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
        
        return () => {
                    clearTimeout(timeoutId)
                }
    }, []);

    const [section, setSection] = useState(0);

    function handleSectionChange(section) {
        setSection(section);
    }

    const experience = (
        <div className='experience'>

        </div>
    );

    const skills = (
        <div className='experience'>

        </div>
    );

    const coursework = (
        <div className='coursework'>

        </div>
    );


    return (
        <>
        <div className='container resume-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters letterClass={letterClass} strArray={'Resume'.split('')} index={15} />
                </h1>
                <div className='resume'>
                    <div className="section-select">
                        <h2 id='section-1' onClick={() => handleSectionChange(0)}>Experience</h2>
                        <h2 id='section-2' onClick={() => handleSectionChange(1)}>Skills</h2>
                        <h2 id='section-3' onClick={() => handleSectionChange(2)}>Coursework</h2>
                    </div>
                </div>
            </div>
        </div>
        <Loader type="ball-pulse-sync" />
        </>
    );
}

export default Resume;