import './index.scss'
import Logo from '../../assets/images/logo-n.png'
import AnimatedLetters from '../AnimatedLetters'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'

const Home = () => {
  document.title = 'Noah Roberts | Portfolio'

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1 className="animated-letters">
            <AnimatedLetters text="Hi," index={25} />
            <br />
            <AnimatedLetters text="I'm" index={30} />
            <span className="animated-word image-letter">
              <img src={Logo} alt="N" className="logo-letter" />
              <AnimatedLetters text="oah." index={35} />
            </span>
            <br />
            <AnimatedLetters text="Software Developer" index={40} />
          </h1>
          <h2>B.S Computer Science | Iowa State University</h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
      </div>
      <Loader type="ball-pulse-sync" />
    </>
  )
}

export default Home
