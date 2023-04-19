import Logo from '../../assets/images/logo-n.png';
import AnimatedLetters from '../AnimatedLetters';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import './index.scss'



const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const name = "oah";
    const description = "Student, Developer";

    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>Hi, <br /> I'm       
                <img src={Logo} alt="N"/>
                oah
                <br />
                Student, Developer
                </h1>
                <h2>Computer Science Student at Iowa State University</h2>
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>
            </div>
        </div>
    );
}

export default Home;