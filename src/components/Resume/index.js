import './index.scss'
import { useState, useEffect } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import Loader from 'react-loaders'
import {
  faJava,
  faPython,
  faSquareJs,
  faReact,
  faGitAlt,
  faJira,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Mx from '../../assets/images/mx.png'
import Paddys from '../../assets/images/paddys.png'

const Resume = () => {
  document.title = 'noahnkr | Resume'
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

  useEffect(() => {
    if (section === 1) {
      const skillBars = document.querySelectorAll('.skill-bar')
      let skillLevels = [
        87.5, 67.5, 57.5, 32.5, 52.5, 67.5, 50, 45, 60, 37.5, 32.5,
      ]
      skillBars.forEach((bar) => {
        bar.style.width = '0%'
      })

      setTimeout(() => {
        skillBars.forEach(
          (bar, index) => (bar.style.width = `${skillLevels[index]}%`)
        )
      }, 50)
    }
  }, [section])

  function handleSectionChange(newSection) {
    let oldSection
    switch (section) {
      case 0:
        oldSection = document.querySelector('.experience-select')
        break
      case 1:
        oldSection = document.querySelector('.skills-select')
        break
      case 2:
        oldSection = document.querySelector('.coursework-select')
        break
    }

    if (oldSection) {
      oldSection.classList.remove('active')
    }

    let newSectionElement
    switch (newSection) {
      case 0:
        newSectionElement = document.querySelector('.experience-select')
        break
      case 1:
        newSectionElement = document.querySelector('.skills-select')
        break
      case 2:
        newSectionElement = document.querySelector('.coursework-select')
        break
    }

    if (newSectionElement) {
      newSectionElement.classList.add('active')
    }

    setSection(newSection)
  }

  const experience = (
    <div className="experience">
      <div className="jobs">
        <div className="job-description">
          <div className="job-heading">
            <div className="job-title">
              <h2>Front End Developer Intern</h2>
              <h3>The MX Group | Burr Ridge, IL</h3>
              <h4>May 2022 - Aug 2022</h4>
            </div>
            <img src={Mx} className="mx" />
          </div>
          <p>
            As a front-end intern at The MX Group, I had the incredible
            opportunity to delve into the world of web development and user
            interface design in a professional setting. Working within a B2B
            marketing firm exposed me to the dynamic nature of the industry and
            the importance of aligning design and functionality with the
            specific needs and goals of business clients.
          </p>
          <p>
            At the beginning of my internship, I was introduced to Atlassian
            Jira, a powerful project management tool widely used in the
            industry. I quickly realized its importance in organizing tasks,
            tracking progress, and ensuring efficient workflow management. In
            addition to Jira, I also gained experience working with Trello,
            another popular project management tool that emphasizes visual
            organization and collaboration.
          </p>
          <p>
            Moreover, my time as a front-end intern allowed me to refine my
            communication and collaboration skills. I actively participated in
            meetings, sharing progress updates and seeking feedback from the
            team. This collaborative environment provided me with invaluable
            insights into the intricacies of teamwork within a professional
            setting.
          </p>
        </div>
        <div className="job-description">
          <div className="job-heading">
            <div className="job-title">
              <h2>Data Analyst Intern</h2>
              <h3>The MX Group | Burr Ridge, IL</h3>
              <h4>May 2024 - Aug 2024</h4>
            </div>
            <img src={Mx} className="mx" />
          </div>
          <p>
            During my second internship at The MX Group, I had the opportunity
            to work closely on various client projects, gaining hands-on
            experience in data analysis. I utilized tools like Salesforce
            Datorama and Tableau to create reports for clients such as HF
            Sinclair, providing insights through data visualization. This
            experience allowed me to strengthen my ability to analyze and
            present data effectively for business decisions.
          </p>
          <p>
            I also gained experience with Microsoft SQL Server Management Studio
            to audit large datasets. During this process, I faced challenges
            associated with managing a vast amount of data, but I quickly
            adapted by developing strategiees to efficiently handle and process
            the data. Overcoming these issues not only helped ensure the
            reliability of the company’s data but also enhanced my understanding
            of data governance and best practices for maintaining data
            integrity.
          </p>
          <p>
            Additionally, I contributed to SEO efforts by writing automated
            scripts to pull search engine data from SEMrush, enabling more
            efficient tracking of the company’s web performance. I also played a
            role in migrating old pages from an acquired WordPress website to
            the company’s main site, ensuring a smooth transition and
            integration of web content.
          </p>
        </div>
        <div className="job-description">
          <div className="job-heading">
            <div className="job-title">
              <h2>Bartender</h2>
              <h3>Paddy's Irish Pub | Ames, IA</h3>
              <h4>Mar 2022 - Present</h4>
            </div>
            <img src={Paddys} className="paddys" />
          </div>
          <p>
            As a bartender at a busy college bar, I’ve honed my ability to work
            in a fast-paced environment, serving drinks and handling multiple
            tasks at once. I’ve become skilled at managing the bar during peak
            hours, staying organized, and delivering great customer service.
            Working in this setting has also given me the chance to meet and
            connect with fellow students, which has been one of the highlights
            of the job.
          </p>
        </div>
      </div>
    </div>
  )

  const skills = (
    <div className="skills">
      <div className="languages">
        <h2>Languages & Frameworks</h2>
        <ul>
          <li>
            <div className="skill-icon-container">
              <FontAwesomeIcon
                icon={faJava}
                color="#fff"
                className="skill-icon"
              />
              <p>Java</p>
            </div>
            <div className="skill-level">
              <div className="seperators">
                <div className="seperator"></div>
                <div className="seperator"></div>
                <div className="seperator"></div>
              </div>
              <div className="skill-bar"></div>
            </div>
          </li>
          <li>
            <div className="skill-icon-container">
              <FontAwesomeIcon
                icon={faPython}
                color="#fff"
                className="skill-icon"
              />
              <p>Python</p>
            </div>
            <div className="skill-level">
              <div className="seperators">
                <div className="seperator"></div>
                <div className="seperator"></div>
                <div className="seperator"></div>
              </div>
              <div className="skill-bar"></div>
            </div>
          </li>
          <li>
            <div className="skill-icon-container">
              <FontAwesomeIcon
                icon={faSquareJs}
                color="#fff"
                className="skill-icon"
              />
              <p>JavaScript</p>
            </div>
            <div className="skill-level">
              <div className="seperators">
                <div className="seperator"></div>
                <div className="seperator"></div>
                <div className="seperator"></div>
              </div>
              <div className="skill-bar"></div>
            </div>
          </li>
          <li>
            <div className="skill-icon-container">
              <i class="devicon-cplusplus-plain" />
              <p>C/C++</p>
            </div>
            <div className="skill-level">
              <div className="seperators">
                <div className="seperator"></div>
                <div className="seperator"></div>
                <div className="seperator"></div>
              </div>
              <div className="skill-bar"></div>
            </div>
          </li>
          <li>
            <div className="skill-icon-container">
              <FontAwesomeIcon
                icon={faReact}
                color="#fff"
                className="skill-icon"
              />
              <p>React</p>
            </div>
            <div className="skill-level">
              <div className="seperators">
                <div className="seperator"></div>
                <div className="seperator"></div>
                <div className="seperator"></div>
              </div>
              <div className="skill-bar"></div>
            </div>
          </li>
        </ul>
      </div>
      <div className="development">
        <h2>Tools & Development</h2>
        <ul>
          <li>
            <div className="skill-icon-container">
              <FontAwesomeIcon
                icon={faGitAlt}
                color="#fff"
                className="skill-icon"
              />
              <p>Git</p>
            </div>
            <div className="skill-level">
              <div className="seperators">
                <div className="seperator"></div>
                <div className="seperator"></div>
                <div className="seperator"></div>
              </div>
              <div className="skill-bar"></div>
            </div>
          </li>
          <li>
            <div className="skill-icon-container">
              <FontAwesomeIcon
                icon={faJira}
                color="#fff"
                className="skill-icon"
              />
              <p>Jira</p>
            </div>
            <div className="skill-level">
              <div className="seperators">
                <div className="seperator"></div>
                <div className="seperator"></div>
                <div className="seperator"></div>
              </div>
              <div className="skill-bar"></div>
            </div>
          </li>
          <li>
            <div className="skill-icon-container">
              <div>
                <i class="devicon-mysql-original" />
              </div>
              <p>MySQL</p>
            </div>
            <div className="skill-level">
              <div className="seperators">
                <div className="seperator"></div>
                <div className="seperator"></div>
                <div className="seperator"></div>
              </div>
              <div className="skill-bar"></div>
            </div>
          </li>
          <li>
            <div className="skill-icon-container">
              <div>
                <i class="devicon-firebase-plain" />
              </div>
              <p>Firebase</p>
            </div>
            <div className="skill-level">
              <div className="seperators">
                <div className="seperator"></div>
                <div className="seperator"></div>
                <div className="seperator"></div>
              </div>
              <div className="skill-bar"></div>
            </div>
          </li>
          <li>
            <div className="skill-icon-container">
              <div>
                <i class="devicon-spring-original" />
              </div>
              <p>Spring</p>
            </div>
            <div className="skill-level">
              <div className="seperators">
                <div className="seperator"></div>
                <div className="seperator"></div>
                <div className="seperator"></div>
              </div>
              <div className="skill-bar"></div>
            </div>
          </li>
          <li>
            <div className="skill-icon-container">
              <div>
                <i class="devicon-mongodb-plain" />
              </div>
              <p>MongoDB</p>
            </div>
            <div className="skill-level">
              <div className="seperators">
                <div className="seperator"></div>
                <div className="seperator"></div>
                <div className="seperator"></div>
              </div>
              <div className="skill-bar"></div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )

  const coursework = (
    <div className="coursework">
      <ul className="courses-list">
        <li>Object-Oriented Programming</li>
        <li>Data Structures</li>
        <li>Discrete Computational Structures</li>
        <li>Construction of User Interfaces</li>
        <li>Design and Analysis of Algorithms</li>
        <li>Philosophy of Technology</li>
        <li>Object-Oriented Analysis and Design</li>
        <li>Software Development Practices</li>
        <li>Probability and Statistics for Computer Science</li>
        <li>Advanced Programming Techniques</li>
        <li>Theory of Computing</li>
      </ul>
    </div>
  )

  return (
    <>
      <div className="container resume-page">
        <div className="text-zone">
          <h1 className="animated-letters">
            <AnimatedLetters
              letterClass={letterClass}
              strArray={'Resume'.split('')}
              index={15}
            />
          </h1>
          <div className="section-select">
            <h2
              className="experience-select active"
              onClick={() => handleSectionChange(0)}
            >
              Experience
            </h2>
            <h2
              className="skills-select"
              onClick={() => handleSectionChange(1)}
            >
              Skills
            </h2>
            <h2
              className="coursework-select"
              onClick={() => handleSectionChange(2)}
            >
              Coursework
            </h2>
          </div>
          {section === 0 && experience}
          {section === 1 && skills}
          {section === 2 && coursework}
        </div>
      </div>
      <Loader type="ball-pulse-sync" />
    </>
  )
}

export default Resume
