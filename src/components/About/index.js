import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useState, useEffect } from 'react';
import Loader from 'react-loaders';
import Me from '../../assets/images/me.JPG';


const About = () => {
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
        <div className='container about-page'>
            <div className='text-zone'>
                <h1 className='animated-letters'>
                    <AnimatedLetters letterClass={letterClass} strArray={['A','b','o','u','t',' ','m','e']} index={15} />
                </h1>
                <p>
                    I'm Noah Roberts and I'm currently a sophomore studying Computer Science at Iowa State University. I'm a hardworking and dedicated person 
                    who is passionate about anything technology related. I pride myself on being a fast learner and will strive to get a job done right. 
                </p>
                <p>
                    My interest in this field was was sparked in 2012 when I went to a summer coding camp and created my first Java program. This inspired me 
                    to build my first computer and to continue learning how to program so I could eventually create my own game. Fast forward to today and I still haven't finished
                    that game, however, I have a newfound love for creating applications, web design, and turning my ideas into reality.
                    My recent obsession has been working with artificial intelligence and machine learning.
                </p>

                <p>
                    When i'm not studying or coding, you can usually find me at the gym, hanging with friends, or bartending, Time managemant is
                    a necessity for me in order to maintain a healthy school-work-life balance; A project that has been on my radar for some time now has been creating
                    a time management software specifically tailored towards students.
                </p>
            </div>
            <div className='photo-zone'>
                <img src={Me} className='me-photo'/>
            </div>
        </div>
        <Loader type='ball-pulse-sync' />
        </>
    )
}

export default About;