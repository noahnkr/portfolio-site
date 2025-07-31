import AnimatedLetters from '../AnimatedLetters'
import { useState, useEffect } from 'react'
import Loader from 'react-loaders'
import Graph from '../../assets/images/graph-math.png'
import Chess from '../../assets/images/jchess.png'
import WeightClubGraph from '../../assets/images/weightclub.png'
import Tournament from '../../assets/images/tournament.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUpRightFromSquare, faFilm } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faYoutube } from '@fortawesome/free-brands-svg-icons'
import './index.scss'

const Projects = () => {
  document.title = 'Noah Roberts | Projects'
  const [section, setSection] = useState(0)

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
        break
      case 5:
        oldSection = document.querySelector('.marchmadness-select')
        break
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
        break
      case 5:
        newSectionElement = document.querySelector('.marchmadness-select')
        break
    }

    if (newSectionElement) {
      newSectionElement.classList.add('active')
    }

    setSection(newSection)
  }

  const weightClub = (
    <div className="project">
      <div className="text-zone"></div>
      <p className="paragraph-animate">
        At the Iowa State Weight Club, coordinating gym sessions was an ongoing
        challenge. For safety, at least three members were required to be
        present during each workout, but fluctuating student schedules made it
        difficult to organize. Relying on GroupMe led to cluttered communication
        and scheduling conflicts. As both the events coordinator and webmaster,
        I identified the need for a more efficient and scalable solution.
      </p>
      <p className="paragraph-animate">
        I designed and built a custom check-in web application to streamline
        scheduling and improve visibility into gym usage. The frontend uses
        Chart.js to render a live, responsive graph showing member check-ins in
        15-minute intervals throughout the day. The backend, built with Node.js
        and Firebase, stores attendance data in real-time and supports features
        like automated recurring check-ins, easy deletions, and time validation
        for structured scheduling.
      </p>
      <p className="paragraph-animate">
        The application significantly reduced scheduling confusion and
        eliminated the need for manual coordination, allowing the club’s group
        chat to focus on important announcements. The platform continues to
        support club operations beyond my time at Iowa State, offering a
        reliable and user-friendly system for future members to coordinate safe
        and efficient gym sessions.
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
      <p className="paragraph-animate">
        GraphMath is an interactive graphing calculator and mathematical
        expression evaluator built in JavaScript using the Canvas API. Inspired
        by{' '}
        <a href="https://www.desmos.com/" target="blank">
          Desmos
        </a>
        , it allows users to visualize mathematical functions in real time and
        explore how algebraic expressions translate into graphical behavior. I
        originally began the project in Java using Swing, but later transitioned
        to JavaScript to improve UI responsiveness and rendering performance in
        the browser.
      </p>
      <p className="paragraph-animate">
        The core engine is a custom-built parser that tokenizes user input
        through lexical analysis, converts expressions to postfix notation using
        the Shunting Yard algorithm, and builds an expression tree for
        evaluation. The parser handles a wide range of mathematical functions,
        including trigonometry, logarithms, and nested operations, while
        supporting user-defined variables and multi-digit precision. To improve
        accuracy and avoid floating-point errors, I implemented number
        condensation and recursive function parsing.
      </p>
      <p className="paragraph-animate">
        GraphMath emphasizes both functionality and user experience. The graph
        is rendered using the HTML5 Canvas API, enabling smooth curve plotting
        and responsive zooming and panning. Behind the scenes, the expression
        evaluator performs postorder traversal of the expression tree to
        calculate results in real time. This project deepened my understanding
        of interpreters, data structures, and graphics programming, while also
        reflecting my passion for building educational tools that make abstract
        concepts more intuitive.
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
      <p className="paragraph-animate">
        JChess is a Java-based chess engine featuring an AI opponent capable of
        playing full games against a human user. The engine uses the Minimax
        algorithm with alpha-beta pruning to evaluate board positions and select
        optimal moves based on factors such as material balance, piece mobility,
        positioning, and pawn structure. I built a graphical user interface
        using the Java Swing framework to allow for interactive gameplay and
        visual move tracking.
      </p>
      <p className="paragraph-animate">
        To optimize performance and reduce computation time, I implemented
        advanced techniques like Zobrist Hashing for unique board state
        representation, Transposition Tables for caching previously evaluated
        positions, and Quiescence Search to avoid shallow tactical blunders in
        volatile positions. These enhancements significantly increased the
        engine’s search efficiency and helped it evaluate deeper positions
        within a limited time window.
      </p>
      <p className="paragraph-animate">
        Chess programming introduced me to the complexity of search algorithms,
        evaluation heuristics, and game tree exploration. One of my goals is to
        eventually integrate an opening book sourced from a database of
        grandmaster games and experiment with reinforcement learning by having
        the AI train through self-play. While I still can’t consistently beat
        it, JChess has been one of the most rewarding and technically
        challenging projects I’ve built to date.
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
      <p className="paragraph-animate">
        Ankr is a dynamically typed toy programming language I designed and
        implemented in C++ to explore the fundamentals of compilers and
        interpreters. The language supports variable declarations, arithmetic
        operations, control flow structures (like loops and conditionals), and
        user-defined functions, offering a simplified but expressive syntax for
        writing basic programs.
      </p>
      <p className="paragraph-animate">
        I built a full interpreter from scratch, including a lexer for
        tokenizing input, a recursive-descent parser to generate abstract syntax
        trees (ASTs), and an evaluation engine that executes the resulting
        program. Throughout this process, I implemented core compiler theory
        concepts such as lexical analysis, syntax analysis, and tree-based
        expression evaluation — without relying on external parsing libraries.
      </p>
      <p className="paragraph-animate">
        Developing Ankr gave me hands-on experience with the inner workings of
        programming languages and deepened my understanding of how high-level
        code is processed and executed under the hood. This project pushed me to
        think critically about language design, runtime behavior, and error
        handling, and served as a foundational step toward building more complex
        interpreters or compilers in the future.
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
      <p className="paragraph-animate">
        Arbadillo is a scalable, distributed sports betting data platform built
        to collect, process, and serve live and historical sportsbook odds
        across multiple leagues and markets. Designed with extensibility in
        mind, Arbadillo powers a future-facing AI engine to identify high-value
        betting opportunities.
      </p>

      <h2 className="list-header">🔧 Stack & Architecture</h2>
      <ul className="arbadillo-list">
        <p className="paragraph-animate">
          <li>
            <strong>Celery + Redis:</strong> Asynchronous scraping jobs run in
            parallel using Celery, with Redis as both the task backend and
            in-memory cache to reduce I/O and maintain fresh odds data.
          </li>
          <li>
            <strong>Scrapy + Playwright:</strong> Reverse-engineered sportsbook
            APIs and dynamic web content are accessed using Scrapy and headless
            Playwright sessions with stealth techniques to bypass bot detection.
          </li>
          <li>
            <strong>PostgreSQL Database:</strong> Odds and event data are
            structured and deduplicated using smart upserts keyed on event,
            market, sportsbook, and outcome identifiers to maintain consistency
            and minimize bloat.
          </li>
          <li>
            <strong>Data Normalization:</strong> Market names and outcomes are
            cleaned and mapped across sportsbooks, ensuring uniform input for
            analysis and ML training.
          </li>
        </p>
      </ul>

      <h2 className="list-header">⚙️ Pipeline Overview</h2>
      <ol className="arbadillo-list">
        <p className="paragraph-animate">
          <li>
            <strong>Bootstrap Schedule:</strong> ESPN API scrapes upcoming
            events, team aliases, and rosters. Events are cached and used to
            match sportsbook event IDs.
          </li>
          <li>
            <strong>Scrape Odds:</strong> FanDuel, DraftKings, ESPNBet clients
            collect moneylines, spreads, totals, and props. Data is parsed,
            normalized, deduped, and cached.
          </li>
          <li>
            <strong>Upsert to DB:</strong> Odds with changes in value, line, or
            status are upserted into PostgreSQL. Outdated lines are
            automatically dropped from cache.
          </li>
        </p>
      </ol>

      <h2 className="list-header">💡 Future Additions</h2>
      <ul className="arbadillo-list">
        <p className="paragraph-animate">
          <li>
            Machine learning model to predict high-value bets using stats + odds
            history
          </li>
          <li>
            Natural language interface to query picks and insights (LLM wrapper)
          </li>
          <li>
            API and frontend for user interaction, Discord integration, and
            credit-based monetization
          </li>
        </p>
      </ul>

      <div className="project-links">
        <a
          href="https://github.com/noahnkr/arbadillo/"
          className="flat-button"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} className="project-link-icon" />{' '}
        </a>
      </div>
    </div>
  )

  const marchMadness = (
    <div className="project">
      <p className="paragraph-animate">
        This project aimed to predict NCAA March Madness outcomes using
        historical tournament data and machine learning. I collected tournament
        matchups from 2012 to 2025 (excluding 2020) and combined them with
        advanced and basic team statistics from a variety of sources, writing
        custom Python web scrapers to automate the data collection process.
      </p>
      <p className="paragraph-animate">
        After consolidating and cleaning the datasets, I engineered a rich set
        of features capturing performance metrics, historical trends, and
        seeding differences. These features were used to train and evaluate
        several classification models, including Logistic Regression, SVM,
        Random Forests, KNN, and Naive Bayes, in order to compare their
        predictive accuracy.
      </p>
      <p className="paragraph-animate">
        To test the real-world applicability of the models, I simulated entire
        NCAA tournament brackets year by year using the model outputs. This
        revealed strengths and limitations of each algorithm and showed the
        importance of balancing accuracy with variance in prediction. The
        project also provided a valuable opportunity to implement and validate
        machine learning pipelines manually, from preprocessing to evaluation,
        without relying heavily on libraries.
      </p>
      <img
        src={Tournament}
        className="preview"
        style={{ maxWidth: 800, paddingBottom: 20, paddingTop: 10 }}
      />
      <div className="project-links">
        <a
          href="https://docs.google.com/presentation/d/1G7-xcGmo5TE4j4LUpBRWjps8SdhHVABz0wmel8HrIao/edit?usp=sharing"
          className="flat-button"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faFilm} className="project-link-icon" />
        </a>
        <a
          href="https://github.com/noahnkr/mlmm"
          className="flat-button"
          target="_blank"
          rel="noopener noreferrer"
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
            <AnimatedLetters text="Projects" index={25} />
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
            <h2
              className="marchmadness-select"
              onClick={() => handleSectionChange(5)}
            >
              March Madness Predictions
            </h2>
          </div>
          {section === 0 && weightClub}
          {section === 1 && graphMath}
          {section === 2 && jchess}
          {section === 3 && ankr}
          {section === 4 && arbadillo}
          {section === 5 && marchMadness}
        </div>
      </div>
      <Loader type="ball-pulse-sync" />
    </>
  )
}

export default Projects
