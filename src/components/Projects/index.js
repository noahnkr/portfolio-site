import AnimatedLetters from '../AnimatedLetters';
import { useState, useEffect } from 'react';
import Loader from 'react-loaders';
import Graph from '../../assets/images/graph-math.png'
import Chess from '../../assets/images/jchess.png'
import WeightClubGraph from  '../../assets/images/weightclub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faYoutube } from '@fortawesome/free-brands-svg-icons';
import './index.scss';

const Projects = () => {
    document.title = 'noahnkr | Projects';
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
                newSection = document.querySelector('.weightclub-select');
                break;
            case 1:
                newSection = document.querySelector('.graphmath-select');
                break;
            case 2:
                newSection = document.querySelector('.jchess-select');
                break;
        }
        newSection.style.opacity = '100%';
    }, [section]);

    function handleSectionChange(newSection) {
        let oldSection;
        switch (section) {
            case 0:
                oldSection = document.querySelector('.weightclub-select');
                break;
            case 1:
                oldSection = document.querySelector('.graphmath-select');  
                break;
            case 2:
                oldSection = document.querySelector('.jchess-select');
                break;
        }
        if (section !== newSection) {
            oldSection.style.opacity = '50%';
        }
       
        setSection(newSection);
    }

    const weightClub  = (
        <div className="weightclub">
            <p>
                My fellow members of the Iowa State Weight Club and I faced an issue with coordinating what times people can visit the weight club gym due 
                to a new policy requiring three members at the club to be unlocked. Previously, we had been using GroupMe but it was not an effective solution. I proposed the idea
                of a check-in website allowing members to view a graph of who and how many members would be at the club throughout the day and began working on it.
                The frontend for the website was created using React, and the backend and hosting is through Google Firebase. 
            </p>
            <img src={WeightClubGraph} className='preview'/>
            <div className="project-links">
                <a href="https://www.isuweightclub.com" className="flat-button" target="_blank">Website</a>
                <a href="https://github.com/noahnkr/weight-club/" className="flat-button" target="_blank"><FontAwesomeIcon icon={faGithub} className="project-link-icon" /></a>
            </div>
            
        </div>
    );

    const graphMath = (
        <div className="graphmath">
            <p>
                Ever since I discovered the graph function on my TI-84 calculator, I was fascinated by how a computer could give a visualization 
                of what a function looks like, no matter its complexity. The inspiration for this project came largely from the website <a href='https://www.desmos.com/' target='blank'>Desmos</a>, 
                an online graphing calculator that turns math into art. Motived to create something similar, I initially started this project in 
                2021 in Java, however, Java's deprecated Swing Framework made creating the GUI very challenging and I eventually decided to convert 
                the project to Javascript using the Canvas API. GraphMath is not only a graphing calculator, but also an expression evaluator. It works 
                by tokenizing an expression, converting it to postfix, and building an expression tree which can be evaluated using variables. More 
                information about how GraphMath works can be found on GitHub.
            </p>
            <img src={Graph} className='preview'/>
            <div className="project-links">
                <a href="https://noahnkr.github.io/graphmath/" className="flat-button" target="_blank">Demo</a>
                <a href="https://github.com/noahnkr/graphmath/" className="flat-button" target="_blank"><FontAwesomeIcon icon={faGithub} className="project-link-icon" /></a>
            </div>
            
            
        </div>
    );

    const jchess = (
        <div className="jchess">
            <p>
                JChess is a simple chess engine I created in Java using the Swing framework. It features an AI that evaluates the best move using 
                the Minimax algorithm. Each board position is given a score based on several factors including, but not limited to: material, mobility, 
                piece position, and pawn structure. Many of the optimization strategies like Zobrist Hashing, Transposition Tables, and Quiescence Search
                that I implemented to improve the AI's efficiency and performance would not have been possible without the <a href='https://www.chessprogramming.org/Main_Page' target='blank'>Chess Programming Wiki</a>.  
                Some other features that I would like to implement is an opening book for the AI from a large database of chess grandmaster 
                games, and machine learning so I could train the AI through thousands of games by playing itself. One thing I have learned from this project 
                though is that Chess Programming is an endless rabbit hole where you can get lost in your code and measuring progress can be very difficult.
                I'm content with the AI's level of play (I still can't beat it) but will hopefully come back to this in the future.
            </p>
            <img src={Chess} className='preview' />
            <div className="project-links">
                <a href="https://github.com/noahnkr/jchess/" className="flat-button" target="_blank"><FontAwesomeIcon icon={faGithub} className="project-link-icon" /></a>
                <a href="https://www.youtube.com/embed/WQBhAjnYA5g" className="flat-button" target="_blank"><FontAwesomeIcon icon={faYoutube} className="project-link-icon" /></a>
            </div>
            
        </div>
    );

    return (
        <>
        <div className="container projects-page">
            <div className="text-zone">
                <h1 className='animated-letters'>
                    <AnimatedLetters letterClass={letterClass} strArray={'Projects'.split('')} index={15} />
                </h1>
                <div className="section-select">
                    <h2 className='weightclub-select' onClick={() => handleSectionChange(0)}>Weight Club</h2>
                    <h2 className='graphmath-select' onClick={() => handleSectionChange(1)}>GraphMath</h2>
                    <h2 className='jchess-select' onClick={() => handleSectionChange(2)}>JChess</h2>
                </div>
                {section === 0 && weightClub}
                {section === 1 && graphMath}
                {section === 2 && jchess}
            </div>
        </div>
        <Loader type="ball-pulse-sync" />
        </>
    );

}

export default Projects;