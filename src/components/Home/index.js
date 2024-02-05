import './index.scss'
import Logo from '../../assets/images/logo-n.png';
import AnimatedLetters from '../AnimatedLetters';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Loader from 'react-loaders';


const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate');

    useEffect(() => {
        let timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
        
        return () => {
                    clearTimeout(timeoutId)
                }
    }, [])

    return (
        <>
        <div className="container home-page">
            <div className="text-zone">
                <h1 className='animated-letters'>
                <AnimatedLetters letterClass={letterClass} strArray={"Hi,".split('')} index={18} />     
                <br />
                <AnimatedLetters letterClass={letterClass} strArray={"I'm".split('')} index={18} />
                <img src={Logo} alt="N"/>
                <AnimatedLetters letterClass={letterClass} strArray={"oah".split('')} index={18} />
                <br />
                <AnimatedLetters letterClass={letterClass} strArray={"Student, ".split('')} index={18} />
                <AnimatedLetters letterClass={letterClass} strArray={"Developer".split('')} index={18} />
                </h1>
                <h2>Computer & Data Science Undergrad at Iowa State University</h2>
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>
            </div>
        </div>
        <Loader type="ball-pulse-sync" />
        </>
    );
}

export default Home;