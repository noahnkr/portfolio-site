import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import Loader from 'react-loaders'
import Headshot from '../../assets/images/headshot.jpg'
import Deadlift from '../../assets/images/deadlift.jpg'
import Bartend from '../../assets/images/bartend.jpg'

const About = () => {
  document.title = 'Noah Roberts | About'

  return (
    <>
      <div className="container about-page">
        <div className="text-zone about">
          <h1 className="animated-letters">
            <AnimatedLetters strArray={'About'.split('')} index={10} />
          </h1>
          <div className="biography">
            <h2>Biography</h2>
            <p className="paragraph-animate">
              Hello! I'm Noah Roberts, a Computer Science graduate from at Iowa
              State University, class of 2025. My journey into the world of
              technology began in 2012 at a summer coding camp, sparking an my
              interest in this field. From learning how to build my first
              computer, coming up with new projects, to teaching myself a new
              language or framework, I'm always trying to improve my skills.
            </p>
            <h2>Interests</h2>
            <p className="paragraph-animate">
              When im not immersed in my work or coding, I enjoy working out at
              the gym, watching football, bartending, and listening to music.
              Some of my favorite bands are Pink Floyd, Pearl Jam, and
              Metallica. I believe in the importance of maintaining a balanced
              lifestyle. Time management is a personal necessity that allows me
              to juggle my personal responsibilities, projects, and social life.
            </p>
            <h2>Looking Ahead</h2>
            <p className="paragraph-animate">
              Now entering the next chapter of my journey, I’m seeking full-time
              opportunities where I can apply my skills to solve meaningful
              problems and continue growing as a developer.
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
