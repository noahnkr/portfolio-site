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
                <h1>
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _12`}>i,</span>    
                    <br />
                    <span className={`${letterClass} _13`}>I</span>
                    <span className={`${letterClass} _14`}>'m</span>       
                <img src={Logo} alt="N"/>
                <AnimatedLetters letterClass={letterClass} strArray={"oah".split('')} index={18} />
                <br />
                <AnimatedLetters letterClass={letterClass} strArray={"Student, Developer".split('')} index={18} />
                </h1>
                <h2>Computer Science Student at Iowa State University</h2>
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>
            </div>
        </div>
        <Loader type="ball-pulse-sync" />
        </>
    );
}

export default Home;