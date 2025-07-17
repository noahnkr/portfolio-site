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
import Isu from '../../assets/images/isu.png'

const Resume = () => {
  document.title = 'Noah Roberts | Resume'
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
        oldSection = document.querySelector('.education-select')
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
        newSectionElement = document.querySelector('.education-select')
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
              <h2>Data Analyst Intern</h2>
              <h3>The MX Group | Burr Ridge, IL</h3>
              <h4>May 2024 - Aug 2024</h4>
            </div>
            <img src={Mx} className="mx" />
          </div>
          <p>
            During my second internship at The MX Group, I worked as a data
            analyst on marketing and web performance projects for B2B clients,
            including HF Sinclair. I developed interactive dashboards and
            reports using Salesforce Datorama and Tableau, enabling stakeholders
            to visualize key metrics and make informed strategic decisions.
          </p>
          <p>
            I cleaned, transformed, and audited large datasets using Microsoft
            SQL Server Management Studio, implementing solutions to improve data
            quality and ensure reporting accuracy. This experience deepened my
            understanding of data governance, query optimization, and best
            practices for maintaining data integrity at scale.
          </p>
          <p>
            To support SEO initiatives, I wrote Python scripts to automate the
            collection and processing of search engine data from SEMrush,
            reducing manual overhead and streamlining reporting workflows. I
            also collaborated with a newly acquired client to migrate and
            standardize data from a legacy WordPress site into the company’s
            centralized reporting infrastructure.
          </p>
        </div>
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
            As a Front End Development Intern at The MX Group, I worked on
            enhancing B2B marketing websites for a range of clients. Using
            React, Sass, and WordPress, I developed responsive, accessible
            interfaces that aligned with each client’s brand identity and
            improved the overall user experience across devices.
          </p>
          <p>
            I collaborated with backend developers to integrate APIs and ensure
            that dynamic, data-driven content rendered correctly. Throughout the
            development process, I partnered closely with designers and QA
            analysts to resolve UI/UX issues and deliver projects on schedule.
          </p>
          <p>
            I also participated in daily Scrum standups and used tools like Jira
            and Trello to manage tasks, track progress, and prioritize feature
            development. This experience gave me valuable exposure to agile
            workflows and strengthened my ability to contribute effectively
            within a cross-functional team.
          </p>
        </div>
        <div className="job-description">
          <div className="job-heading">
            <div className="job-title">
              <h2>Bartender</h2>
              <h3>Paddy's Irish Pub | Ames, IA</h3>
              <h4>Mar 2022 - Apr 2025</h4>
            </div>
            <img src={Paddys} className="paddys" />
          </div>
          <p>
            As a bartender at a high-traffic college bar, I developed the
            ability to thrive under pressure while managing multiple
            responsibilities simultaneously. I regularly handled large volumes
            of drink orders during peak hours, maintained a clean and organized
            workspace, and delivered fast, friendly customer service in a
            dynamic environment.
          </p>
          <p>
            This role sharpened my communication skills, taught me how to adapt
            quickly to changing situations, and reinforced the importance of
            efficiency, attention to detail, and teamwork. Working in this
            setting has gave me the chance to meet and connect with fellow
            students, which was one of the highlights of the job.
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

  const education = (
    <div className="education">
      <div className="education-heading">
        <div className="education-description">
          <h2>Iowa State University</h2>
          <h3>B.S. Computer Science</h3>
          <h4>Aug 2021 - May 2025</h4>
        </div>
        <img src={Isu} className="isu" />
      </div>
      <ul className="course-list">
        <li>Construction of User Interfaces</li>
        <li>Design and Analysis of Algorithms</li>
        <li>Object-Oriented Analysis and Design</li>
        <li>Software Development Practices</li>
        <li>Probability and Statistics for Computer Science</li>
        <li>Advanced Programming Techniques</li>
        <li>Database Management Systems</li>
        <li>Theory of Computing</li>
        <li>Operating Systems</li>
        <li>Principles of Artificial Intelligence</li>
        <li>Introduction to Machine Learning</li>
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
              className="education-select"
              onClick={() => handleSectionChange(2)}
            >
              Education
            </h2>
          </div>
          {section === 0 && experience}
          {section === 1 && skills}
          {section === 2 && education}
        </div>
      </div>
      <Loader type="ball-pulse-sync" />
    </>
  )
}

export default Resume
