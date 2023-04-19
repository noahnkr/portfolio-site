import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useState, useEffect } from 'react';


const About = () => {
    const[letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        let timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
        
        return () => {
                    clearTimeout(timeoutId)
                }
    }, [])

    return (
        <div className="container about-page">
            <div className="text-zone">
                <h1>
                    <AnimatedLetters letterClass={letterClass} strArray={['A','b','o','u','t',' ','m','e']} index={15} />
                </h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Urna porttitor rhoncus dolor purus non enim praesent elementum facilisis. Lacus sed viverra tellus in hac. 
                    Id aliquet lectus proin nibh. In nulla posuere sollicitudin aliquam ultrices sagittis orci. Tristique senectus et netus et.
                     Quis ipsum suspendisse ultrices gravida dictum fusce. At consectetur lorem donec massa sapien faucibus. 
                     Pulvinar pellentesque habitant morbi tristique senectus. 
                </p>
                
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                     A arcu cursus vitae congue mauris rhoncus aenean vel elit. Donec enim diam vulputate ut pharetra sit amet.
                </p>
            </div>
        </div>
    )
}

export default About;