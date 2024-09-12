import AnimatedLetters from '../AnimatedLetters'
import { useState, useEffect } from 'react'
import Loader from 'react-loaders'
import Graph from '../../assets/images/graph-math.png'
import Chess from '../../assets/images/jchess.png'
import WeightClubGraph from '../../assets/images/weightclub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faYoutube } from '@fortawesome/free-brands-svg-icons'
import './index.scss'

const Projects = () => {
  document.title = 'noahnkr | Projects'
  const [letterClass, setLetterClass] = useState('text-animate')
  const [section, setSection] = useState(0)

  useEffect(() => {
    let timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    return () => {
      clearTimeout(timeoutId)
    }
  }, [])

  function handleSectionChange(newSection) {
    let oldSection
    switch (section) {
      case 0:
        oldSection = document.querySelector('.weightclub-select')
        break
      case 1:
        oldSection = document.querySelector('.graphmath-select')
        break
      case 2:
        oldSection = document.querySelector('.jchess-select')
        break
      case 3:
        oldSection = document.querySelector('.ankr-select')
        break
      case 4:
        oldSection = document.querySelector('.arbadillo-select')
    }

    if (oldSection) {
      oldSection.classList.remove('active')
    }

    let newSectionElement
    switch (newSection) {
      case 0:
        newSectionElement = document.querySelector('.weightclub-select')
        break
      case 1:
        newSectionElement = document.querySelector('.graphmath-select')
        break
      case 2:
        newSectionElement = document.querySelector('.jchess-select')
        break
      case 3:
        newSectionElement = document.querySelector('.ankr-select')
        break
      case 4:
        newSectionElement = document.querySelector('.arbadillo-select')
    }

    if (newSectionElement) {
      newSectionElement.classList.add('active')
    }

    setSection(newSection)
  }

  const weightClub = (
    <div className="project">
      <div className="text-zone"></div>
      <p>
        The Iowa State Weight Club faced a recurring issue: coordinating lifting
        sessions in the club gym. For safety reasons, we required at least three
        members to be present at all times, but scheduling became a challenge as
        students’ availability shifted frequently. Our previous method of using
        GroupMe to organize meeting times was inefficient. Communication lagged
        when schedules changed, cluttering the chat with messages and making it
        hard to focus on more important club discussions. As both the events
        coordinator and webmaster, I saw an opportunity to improve this process.
      </p>
      <p>
        I developed a custom check-in website that streamlined scheduling and
        made coordination more efficient. Using Chart.js, I implemented a live,
        responsive graph to display member check-ins throughout the day. This
        allowed club members to quickly see peak hours and plan accordingly. I
        also designed features for easy updates, deletions, and automatic
        recurring check-ins, catering to those with more structured schedules.
      </p>
      <p>
        As a result, the website significantly reduced scheduling confusion and
        freed up our group chat from constant messages about availability. Now,
        important club announcements can take priority, and members can organize
        their gym time more easily. The system I built is designed to continue
        supporting the club beyond my time at Iowa State, allowing future
        members to benefit from a allowing future members to enjoy a more
        efficient and organized scheduling process
      </p>
      <img
        src={WeightClubGraph}
        style={{ maxWidth: 600, paddingBottom: 20, paddingTop: 10 }}
      />
      <div className="project-links">
        <a
          href="https://www.isuweightclub.com"
          className="flat-button"
          target="_blank"
        >
          <FontAwesomeIcon
            icon={faUpRightFromSquare}
            className="project-link-icon"
          />
        </a>
        <a
          href="https://github.com/noahnkr/weight-club/"
          className="flat-button"
          target="_blank"
        >
          <FontAwesomeIcon icon={faGithub} className="project-link-icon" />
        </a>
      </div>
    </div>
  )

  const graphMath = (
    <div className="project">
      <p>
        My fascination with graphing functions began when I first explored the
        graph feature on my TI-84 calculator. I was amazed at how a computer
        could visually represent any function, regardless of its complexity.
        This project was inspired by the online graphing calculator,{' '}
        <a href="https://www.desmos.com/" target="blank">
          Desmos
        </a>
        , which beautifully transforms math into visual art. Motivated to create
        something similar, I initially started developing this project in 2021
        using Java. However, due to the limitations of Java's outdated Swing
        framework, building the graphical interface became increasingly
        difficult. Eventually, I transitioned the project to JavaScript,
        leveraging the Canvas API to enhance functionality.
      </p>
      <p>
        GraphMath serves as both a graphing calculator and an expression
        evaluator. It operates by tokenizing mathematical expressions,
        converting them to postfix notation, and constructing an expression tree
        for evaluation, with support for variables. For a deeper dive into how
        GraphMath works, more information is available on GitHub.
      </p>
      <img
        src={Graph}
        className="preview"
        style={{ maxWidth: 650, paddingBottom: 20, paddingTop: 10 }}
      />
      <div className="project-links">
        <a
          href="https://noahnkr.github.io/graphmath/"
          className="flat-button"
          target="_blank"
        >
          <FontAwesomeIcon
            icon={faUpRightFromSquare}
            className="project-link-icon"
          />
        </a>
        <a
          href="https://github.com/noahnkr/graphmath/"
          className="flat-button"
          target="_blank"
        >
          <FontAwesomeIcon icon={faGithub} className="project-link-icon" />
        </a>
      </div>
    </div>
  )

  const jchess = (
    <div className="project">
      <p>
        JChess is a chess engine I developed in Java using the Swing framework.
        It includes an AI that determines the best move through the Minimax
        algorithm with alpha-beta pruning, evaluating each board position based
        on various factors like material, mobility, piece positioning, and pawn
        structure. To enhance the AI's efficiency and performance, I implemented
        optimization strategies such as Zobrist Hashing, Transposition Tables,
        and Quiescence Search, drawing heavily from resources like the{' '}
        <a href="https://www.chessprogramming.org/Main_Page" target="blank">
          Chess Programming Wiki
        </a>
        .
      </p>
      <p>
        In the future, I plan to expand the AI's capabilities by incorporating
        an opening book sourced from a database of grandmaster games and
        exploring machine learning techniques to train the AI by having it play
        thousands of games against itself. One of the key lessons I’ve learned
        from this project is that chess programming is an incredibly deep and
        intricate field, where progress can be hard to measure. Though I’m
        satisfied with the AI’s current level of play (I still can't beat it), I
        look forward to revisiting and improving the engine over time.
      </p>
      <img
        src={Chess}
        className="preview"
        style={{ maxWidth: 600, paddingBottom: 20, paddingTop: 10 }}
      />
      <div className="project-links">
        <a
          href="https://github.com/noahnkr/jchess/"
          className="flat-button"
          target="_blank"
        >
          <FontAwesomeIcon icon={faGithub} className="project-link-icon" />
        </a>
        <a
          href="https://www.youtube.com/embed/WQBhAjnYA5g"
          className="flat-button"
          target="_blank"
        >
          <FontAwesomeIcon icon={faYoutube} className="project-link-icon" />
        </a>
      </div>
    </div>
  )

  const ankr = (
    <div className="project">
      <p>
        Ankr is a custom-built dynamically-typed toy programming language
        designed to explore the fundamentals of language parsing, syntax, and
        interpretation. The language features a basic syntax that allows for
        variable declarations, arithmetic operations, control flow (such as
        loops and conditionals), and function definitions. By building this
        language from scratch, I gained deeper insights into compiler design,
        lexing, and parsing techniques.
      </p>
      <p>
        The project is implemented in C++, and includes a working interpreter
        capable of executing simple programs written in the language. This
        endeavor helped strengthen my understanding of how high-level
        programming languages work at a lower level and introduced me to various
        concepts in compiler theory, such as abstract syntax trees and
        tokenization.
      </p>
      <div className="code-container">
        <code>
          <span className="keyword">function</span>{' '}
          <span className="function-name">fibonacci</span>(
          <span className="variable">n</span>) {'{'}
          <br />
          &nbsp;&nbsp;<span className="keyword">var</span>{' '}
          <span className="variable">a</span> ={' '}
          <span className="number">0</span>;
          <br />
          &nbsp;&nbsp;<span className="keyword">var</span>{' '}
          <span className="variable">b</span> ={' '}
          <span className="number">1</span>;
          <br />
          &nbsp;&nbsp;<span className="keyword">var</span>{' '}
          <span className="variable">f</span> ={' '}
          <span className="number">1</span>;
          <br />
          &nbsp;&nbsp;<span className="keyword">for</span> (
          <span className="keyword">var</span>{' '}
          <span className="variable">i</span> ={' '}
          <span className="number">2</span>; <span className="variable">i</span>{' '}
          {'<='} <span className="variable">n</span>;{' '}
          <span className="variable">i</span>++) {'{'}
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;<span className="variable">f</span> ={' '}
          <span className="variable">a</span> +{' '}
          <span className="variable">b</span>;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;<span className="variable">a</span> ={' '}
          <span className="variable">b</span>;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;<span className="variable">b</span> ={' '}
          <span className="variable">f</span>;
          <br />
          &nbsp;&nbsp;{'}'}
          <br />
          &nbsp;&nbsp;<span className="keyword">return</span>{' '}
          <span className="variable">f</span>;
          <br />
          {'}'}
          <br />
          <br />
          <span className="comment">
            // Calculate and print first 10 fibonacci numbers
          </span>
          <br />
          <span className="keyword">for</span> (
          <span className="keyword">var</span>{' '}
          <span className="variable">i</span> ={' '}
          <span className="number">1</span>; <span className="variable">i</span>{' '}
          {'<'} <span className="number">10</span>;{' '}
          <span className="variable">i</span>++) {'{'}
          <br />
          &nbsp;&nbsp;<span className="function-name">output</span>(
          <span className="string">"Fibonacci "</span> +{' '}
          <span className="variable">i</span> +{' '}
          <span className="string">": "</span> +{' '}
          <span className="function-name">fibonacci</span>(
          <span className="variable">i</span>));
          <br />
          {'}'}
        </code>
      </div>
      <div className="project-links">
        <a
          href="https://github.com/noahnkr/ankr/"
          className="flat-button"
          target="_blank"
        >
          <FontAwesomeIcon icon={faGithub} className="project-link-icon" />
        </a>
      </div>
    </div>
  )

  const arbadillo = (
    <div className="project">
      <p>
        Arbadillo is a Python-based web scraping project that collects live
        sportsbook data from multiple sources using Selenium and BeautifulSoup.
        It is designed to retrieve real-time odds and betting markets from
        popular sportsbooks like BetMGM and DraftKings, organizing this data for
        easy integration and storage.
      </p>
      <h2 className="list-header">Key Features:</h2>
      <ul className="arbadillo-list">
        <li>
          <p>
            <strong>Data Scraping:</strong> Utilizes Selenium for navigating and
            interacting with dynamic sportsbook web pages, and BeautifulSoup for
            parsing the HTML content to extract betting data, such as player
            props, game spreads, and moneylines.
          </p>
        </li>
        <li>
          <p>
            <strong>Concurrency:</strong> Implements Python's{' '}
            <em>ThreadPoolExecutor</em> for multi-threaded scraping, enabling
            efficient collection of data from multiple sportsbooks concurrently,
            reducing the overall execution time.
          </p>
        </li>
        <li>
          <p>
            <strong>Django Backend:</strong> Integrates with Django to manage
            data storage, using Django models to structure and save scraped
            events, picks, and odds into a database for future analysis.
          </p>
        </li>
        <li>
          <p>
            <strong>Error Handling and Logging:</strong> Robust error handling
            and retry logic ensure consistent data collection even when websites
            change or connection issues arise, with detailed logging for
            monitoring performance.
          </p>
        </li>
      </ul>
      <div className="project-links">
        <a
          href="https://github.com/noahnkr/arbadillo/"
          className="flat-button"
          target="_blank"
        >
          <FontAwesomeIcon icon={faGithub} className="project-link-icon" />
        </a>
      </div>
    </div>
  )

  return (
    <>
      <div className="container projects-page">
        <div className="text-zone">
          <h1 className="animated-letters">
            <AnimatedLetters
              letterClass={letterClass}
              strArray={'Projects'.split('')}
              index={15}
            />
          </h1>
          <div className="section-select">
            <h2
              className="weightclub-select active"
              onClick={() => handleSectionChange(0)}
            >
              Weight Club
            </h2>
            <h2
              className="graphmath-select"
              onClick={() => handleSectionChange(1)}
            >
              GraphMath
            </h2>
            <h2
              className="jchess-select"
              onClick={() => handleSectionChange(2)}
            >
              JChess
            </h2>
            <h2 className="ankr-select" onClick={() => handleSectionChange(3)}>
              Ankr
            </h2>
            <h2
              className="arbadillo-select"
              onClick={() => handleSectionChange(4)}
            >
              Arbadillo
            </h2>
          </div>
          {section === 0 && weightClub}
          {section === 1 && graphMath}
          {section === 2 && jchess}
          {section === 3 && ankr}
          {section === 4 && arbadillo}
        </div>
      </div>
      <Loader type="ball-pulse-sync" />
    </>
  )
}

export default Projects
