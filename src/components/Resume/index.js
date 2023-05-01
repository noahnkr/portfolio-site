import './index.scss';
import { useState, useEffect } from 'react';
import AnimatedLetters from '../AnimatedLetters';

const Resume = () => {
    const[letterClass, setLetterClass] = useState('text-animate');

    useEffect(() => {
        let timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
        
        return () => {
                    clearTimeout(timeoutId)
                }
    }, []);

    return (
        <>
        <div className='container resume-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters letterClass={letterClass} strArray={'Resume'.split('')} index={15} />
                </h1>
            </div>
        </div>
        </>
    );

}

export default Resume;