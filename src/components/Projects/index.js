import AnimatedLetters from '../AnimatedLetters';
import { useState, useEffect } from 'react';
import Loader from 'react-loaders';
import Graph from '../../assets/images/graph-math.png'
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
            <p>
                GraphMath is a project that I have been wanting to create for a long time. Ever since I discovered the graph function on my TI-84 
                calculator, I was fascinated by how a computer could give a visualiztion of what a function looks like, no matter its complexity.
                The inspiration for this project came largely from the website <a href='https://www.desmos.com/' target='blank'>Desmos</a>, 
                an online graphing calculator that turns math into art. Motived to create something similar, I initially started this project in 
                2021 in Java, however, Java's deprecated Swing Framework made creating the GUI very challenging and I eventually decided to convert 
                the project to Javascript using the Canvas API. 
            </p> 
            <p>After a year of on and off work on GraphMath, I am content with how far the project 
                has come but I still have future plans of turning GraphMath into a standalone math library with a sophisticated online user interface
                akin to <a href='https://www.symbolab.com/' target='blank'>Symbolab</a>. The live demo for GraphMath can be viewed <a href='https://noahnkr.github.io/graph-math/' target='blank'>here</a>. 
                If you would like to learn more about GraphMath's features and how it works, you can view its project page on <a href='https://github.com/noahnkr/graph-math' target='blank'>GitHub</a>.
            </p>
            <img src={Graph} className='graph'/>
        </div>
    );

    const jchess = (
        <div className="jchess">
            <p>
                JChess is a simple chess engine I created in Java using the Swing framework. It features an AI that evaluates the best move using 
                the Minimax algorithm. Each board position is given a score based on several factors including, but not limited to: material, mobilty, 
                piece position, and pawn structure. Many of the optimization strategies like Zobrist Hashing, Transposition Tables, and Quiescence Search
                that I implemented to improve the AI's efficiency and performance would not have been possible without the <a href='https://www.chessprogramming.org/Main_Page' target='blank'>Chess Programming Wiki</a>.
            </p>
            <p>    
                Some other features that I would like to implement in the future is an opening book for the AI from a large database of chess grandmaster 
                games, and machine learning so I could train the AI through thousands of games by playing itself. One thing I have learned from this project 
                though is that Chess Programming is an endless rabbit hole where you can get lost in your own code and measuring progress can be nearly impossible.
                Before I take on that challenge I think i need to improve my own programming skills first. The source code for JChess can be found on my <a href='https://github.com/noahnkr/jchess' target='blank'>GitHub</a>.
            </p>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/WQBhAjnYA5g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
    );

    const jobCSeeker = (
        <div className="jobcseeker">
            <p>
                For our final project in Construction of User Interfaces we had to create a website that used the CRUD operations with Node.js, Express, MongoDB, and React.
                I decided to create a job board website where users could search for jobs and employers could post jobs. The source code for the frontend and backend can be found
                on <a href="https://github.com/noahnkr/job-cseeker">GitHub</a>.
            </p>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/PGAzUOB2NJA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

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
                    <h2 className='graphmath-select' onClick={() => handleSectionChange(0)}>GraphMath</h2>
                    <h2 className='jchess-select' onClick={() => handleSectionChange(1)}>JChess</h2>
                    <h2 className='jobcseeker-select' onClick={() => handleSectionChange(2)}>JobCSeeker</h2>
                </div>
                {section === 0 && graphMath}
                {section === 1 && jchess}
                {section === 2 && jobCSeeker}
            </div>
        </div>
        <Loader type="ball-pulse-sync" />
        </>
    );

}

export default Projects;