import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useState, useEffect } from 'react'
import Loader from 'react-loaders'
import Headshot from '../../assets/images/headshot.jpg'
import Deadlift from '../../assets/images/deadlift.jpg'
import Bartend from '../../assets/images/bartend.jpg'

const About = () => {
  document.title = 'noahnkr | About'
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    let timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    return () => {
      clearTimeout(timeoutId)
    }
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone about">
          <h1 className="animated-letters">
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              index={15}
            />
          </h1>
          <div className="biography">
            <h2>Biography</h2>
            <p>
              Hello! I'm Noah Roberts, a senior at Iowa State University
              majoring in Computer Science. My journey into the world of
              technology began in 2012 at a summer coding camp, sparking an my
              interest in this field. From learning how to build my first
              computer to testing out new frameworks, I'm always trying to
              improve my skills.
            </p>
            <h2>Interests</h2>
            <p>
              When im not immersed in my schoolwork or coding, I enjoy lifting
              at our weight club gym, watching football, bartending, and
              listening to music. Some of my favorite bands are Pink Floyd,
              Pearl Jam, and Metallica. I believe in the importance of
              maintaining a balanced lifestyle. Time management is a personal
              necessity that allows me to juggle my academic responsibilities,
              personal projects, and social life.
            </p>
            <h2>Looking Ahead</h2>
            <p>
              As I continue my journey in Computer Science, I am excited about
              the opportunities to innovate and make an impact. I am a fast
              learner, dedicated to my work, and always eager to take on new
              challenges.
            </p>
            <div className="photo-zone">
              <img src={Headshot} className="headshot" />
              <img src={Deadlift} className="deadlift" />
              <img src={Bartend} className="bartend" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="ball-pulse-sync" />
    </>
  )
}

export default About
